import { fetchGithubStats } from '../../lib/github';
import { githubUsername } from '../../data/contact';

// Get a list of all posts
export default async (req, res) => {
  const githubData = await fetchGithubStats(githubUsername);
  res.status(200).json(githubData);
}
