import { getSortedPostsData } from "../../lib/posts";

// Get a list of all posts
export default (req, res) => {
  const postsMetadata = getSortedPostsData();
  res.status(200).json(postsMetadata);
};
