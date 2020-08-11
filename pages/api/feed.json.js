import generateFeed from "../../lib/rss-feed";

export default async (req, res) => {
  try {
    const feed = generateFeed("json");
    const rssjson = feed.json1();
    res.setHeader("Content-type", "text/json");
    res.status(200).json(rssjson);
  } catch (err) {
    res.status(500).json({ ...err, error: true });
  }
};
