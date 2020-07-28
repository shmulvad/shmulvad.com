import axios from "axios";

// https://github.com/anuraghazra/github-readme-stats/blob/master/src/retryer.js
// const retryer = async (fetcher, variables, retries = 0) => {
//   if (retries > 7) {
//     throw new Error("Maximum retries exceeded");
//   }
//   try {
//     // try to fetch with the first token since RETRIES is 0 index i'm adding +1
//     let response = await fetcher(
//       variables,
//       process.env[`PAT_${retries + 1}`],
//       retries
//     );

//     // prettier-ignore
//     const isRateExceeded = response.data.errors && response.data.errors[0].type === "RATE_LIMITED";

//     // if rate limit is hit increase the RETRIES and recursively call the retryer
//     // with username, and current RETRIES
//     if (isRateExceeded) {
//       retries++;
//       // directly return from the function
//       return retryer(fetcher, variables, retries);
//     }

//     // finally return the response
//     return response;
//   } catch (err) {
//     // prettier-ignore
//     // also checking for bad credentials if any tokens gets invalidated
//     const isBadCredential = err.response.data && err.response.data.message === "Bad credentials";

//     if (isBadCredential) {
//       retries++;
//       // directly return from the function
//       return retryer(fetcher, variables, retries);
//     }
//   }
// };

function request(data, headers) {
  return axios({
    url: "https://api.github.com/graphql",
    method: "post",
    headers,
    data,
  });
}

// https://github.com/anuraghazra/github-readme-stats/blob/master/src/fetchStats.js
const fetcher = variables => {
  return request(
    {
      query: `
      query GithubQuery($login:String!) {
        user(login: $login) {
          contributionsCollection {
            totalCommitContributions,
            restrictedContributionsCount
          }
          mostStarredRepo: repositories(first: 1, ownerAffiliations: OWNER, isFork: false, orderBy: {direction: DESC, field: STARGAZERS}) {
            nodes {
              name,
              url
            }
          }
          repositories(first: 100, ownerAffiliations: OWNER, isFork: false, orderBy: {direction: DESC, field: STARGAZERS}) {
            totalCount
            edges {
              node {
                collaborators(first: 2) {
                  nodes {
                    login
                  }
                }
                stargazers {
                  totalCount
                }
                commits: object(expression:"master") {
                  ... on Commit {
                    history {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }
      `,
      variables,
    },
    {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    }
  );
};

export async function fetchGithubStats(username) {
  if (!username) throw Error("Invalid username");

  const stats = {
    totalCommits: 0,
    totalStars: 0,
    totalRepos: 0,
    mostStarred: '',
    mostStarredUrl: '',
  };

  let res = await fetcher({ login: username });

  if (res.data.errors) {
    throw Error(res.data.errors[0].message || "Could not fetch user");
  }

  const user = res.data.data.user;
  const contribCount = user.contributionsCollection;

  stats.totalCommits = contribCount.totalCommitContributions;
  stats.totalCommits += contribCount.restrictedContributionsCount;
  stats.totalCommits += user.repositories.edges.reduce((acc, repo) => {
    const onlyOneCommiter = repo.node.collaborators.nodes.length === 1;
    return acc + onlyOneCommiter ? repo.node.commits.history.totalCount : 0;
  }, 0);

  stats.totalStars = user.repositories.edges.reduce((acc, repo) => {
    return acc + repo.node.stargazers.totalCount;
  }, 0);

  stats.totalRepos = user.repositories.totalCount;

  const mostStarred = user.mostStarredRepo.nodes[0];
  stats.mostStarred = mostStarred.name;
  stats.mostStarredUrl = mostStarred.url;

  return stats;
}
