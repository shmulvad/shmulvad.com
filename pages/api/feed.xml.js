import generateFeed from "../../lib/rss-feed";

export default async (req, res) => {
  try {
    const feed = await generateFeed("xml");
    const rssXml = feed.rss2();
    res.setHeader("Content-type", "text/xml");
    res.status(200).send(rssXml);
  } catch (err) {
    res.status(500).json({ ...err, error: true });
  }
};
