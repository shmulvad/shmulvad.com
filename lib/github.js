import axios from "axios";

function request(data, headers) {
  return axios({
    url: "https://api.github.com/graphql",
    method: "post",
    headers,
    data,
  });
}

// https://github.com/anuraghazra/github-readme-stats/blob/master/src/fetchStats.js
const fetcher = (variables) => {
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
    mostStarred: "",
    mostStarredUrl: "",
  };

  let res = await fetcher({ login: username });

  // This also gives errors that are not 'fatal'. Unused for now
  // if (res.data.errors) {
  //   console.log(res.data.errors);
  //   throw Error(res.data.errors[0].message || "Could not fetch user");
  // }

  const user = res.data.data.user;
  const contribCount = user.contributionsCollection;

  stats.totalCommits = contribCount.totalCommitContributions;
  stats.totalCommits += contribCount.restrictedContributionsCount;
  stats.totalCommits += user.repositories.edges.reduce((acc, repo) => {
    const collaborators = repo.node.collaborators;
    const exactOneCommiter = collaborators && collaborators.nodes.length === 1;
    return acc + exactOneCommiter ? repo.node.commits.history.totalCount : 0;
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
