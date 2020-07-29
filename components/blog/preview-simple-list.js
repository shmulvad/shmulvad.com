import PreviewSimple from "./preview-simple";

import utilStyles from "../../styles/utils.module.css";

const PreviewSimpleList = ({ posts, numPosts = null }) => (
  <ul className={utilStyles.list}>
    {posts.slice(0, numPosts || posts.length).map((post) => {
      return <PreviewSimple post={post} key={post.id} />;
    })}
  </ul>
);

export default PreviewSimpleList;
