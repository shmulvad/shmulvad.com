import { getPostData } from "../../../lib/posts";

// Get post id pid
export default async (req, res) => {
  const {
    query: { pid },
  } = req;

  const { id, date, content, error } = await getPostData(pid);
  if (error) {
    res.status(400).json({ error, errorMsg: "Couldn't find id." });
  } else {
    res.status(200).json({ id, date, content, error });
  }
};
