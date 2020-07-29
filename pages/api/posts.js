import { getSortedPostsData } from "../../lib/posts";

// Get a list of all posts
export default (req, res) => {
  const posts_metadata = getSortedPostsData();
  res.status(200).json(posts_metadata);
};
