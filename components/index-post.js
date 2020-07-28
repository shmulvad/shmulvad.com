import Link from "next/link";
import Date from "./date";

import utilStyles from "../styles/utils.module.css";

const IndexPost = ({ post }) => (
  <li className={utilStyles.listItem}>
    <Link href="/blog/[id]" as={`/blog/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <br />
    <small className={utilStyles.lightText}>
      <Date dateString={post.date} />
    </small>
  </li>
)

export default IndexPost;
