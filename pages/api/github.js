import LRUCache from "lru-cache";
import { fetchGithubStats } from "../../lib/github";
import { githubUsername } from "../../data/contact";

const KEY = "GITHUB-DATA";

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1 hour
});

export default async (req, res) => {
  if (ssrCache.has(KEY)) {
    const githubData = ssrCache.get(KEY);
    res.setHeader("x-cache", "HIT");
    res.status(200).json({ ...githubData, cached: "HIT" });
    return;
  }

  try {
    const githubData = await fetchGithubStats(githubUsername);
    ssrCache.set(KEY, githubData);
    res.setHeader("x-cache", "MISS");
    res.status(200).json({ ...githubData, cached: "MISS" });
  } catch(err) {
    res.setHeader('x-cache', 'SKIP');
    res.status(502).json(err);
  }
};
