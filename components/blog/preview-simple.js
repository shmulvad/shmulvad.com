import Link from "next/link";
import Date from "../date";

import utilStyles from "../../styles/utils.module.css";

const PreviewSimple = ({ post }) => {
  const titleArr = post.title.split("");
  const titleTagArr = titleArr.map(() => false);
  if (post.fuzzyData !== undefined) {
    const fuzzyMatchLetterIndices = post.fuzzyData[2];
    fuzzyMatchLetterIndices.forEach((index) => {
      titleTagArr[index] = true;
    });
  }

  const mapLetter = (letter, index) => {
    return titleTagArr[index] ? (
      <b key={index}>{letter}</b>
    ) : (
      <span key={index}>{letter}</span>
    );
  };

  return (
    <li className={utilStyles.listItem}>
      <Link href="/blog/[id]" as={`/blog/${post.id}`}>
        <a>{titleArr.map(mapLetter)}</a>
      </Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={post.date} />
      </small>
    </li>
  );
};

export default PreviewSimple;
