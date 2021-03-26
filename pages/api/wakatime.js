import LRUCache from "lru-cache";
import { fetchWakaStats } from "../../lib/wakatime";

const KEY = "WAKATIME-DATA";

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1 hour
});

export default async (req, res) => {
  if (ssrCache.has(KEY)) {
    const wakaData = ssrCache.get(KEY);
    res.setHeader("x-cache", "HIT");
    res.status(200).json({ ...wakaData, cached: "HIT" });
    return;
  }

  try {
    const wakaData = await fetchWakaStats();
    ssrCache.set(KEY, wakaData);
    res.setHeader("x-cache", "MISS");
    res.status(200).json({ ...wakaData, cached: "MISS" });
  } catch(err) {
    res.setHeader('x-cache', 'SKIP');
    res.status(502).json({ ...err, error: "True" });
  }
};
