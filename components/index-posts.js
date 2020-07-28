import Link from "next/link";
import IndexPost from './index-post';

import utilStyles from "../styles/utils.module.css";

const IndexPosts = ({ posts, maxPosts }) => {
  const numPosts = Math.min(maxPosts, posts.length);
  return (
    <>
      <p>
        I also write sometimes (or at least I plan to). Feel free to check out
        my{" "}
        <Link href="/blog">
          <a>full blog</a>
        </Link>{" "}
        or just the latest {numPosts} post{numPosts > 1 && 's'} here:
      </p>
      <ul className={utilStyles.list}>
        {posts.slice(0, maxPosts).map(post => {
          return <IndexPost post={post} key={post.id} />
        })}
      </ul>
    </>
  );
}

export default IndexPosts;
