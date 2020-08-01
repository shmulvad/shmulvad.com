import Link from "next/link";
import { CommentCount } from "disqus-react";

import Date from "../date";
import Image from "../general/image";

import { websiteLong } from "../../data/contact";

const Preview = ({ title, date, readStatText, summary, heroImg, id }) => {
  const link = `/blog/${id}`;
  return (
    <div className="blog-preview">
      <h2>
        <Link href={link}>
          <a>{title}</a>
        </Link>
      </h2>
      <h5 id="date">
        <Date className="published" dateString={date} />
        <span className="light-text">{` | ${readStatText}`}</span>
      </h5>
      <Link href={link}>
        <a className="image">
          <Image className="preview-img" src={`posts/${heroImg}`} alt={title} />
        </a>
      </Link>
      <p>{summary}</p>
      <footer>
        <ul className="actions">
          <li>
            <Link href={link}>
              <a className="button large">Continue Reading →</a>
            </Link>
          </li>
        </ul>
        <ul className="stats">
          <li>
            <CommentCount
              shortname="shmulvad"
              config={{
                url: websiteLong + link,
                identifier: id,
                title: title,
              }}
            >
              Loading comment count...
            </CommentCount>
          </li>
        </ul>
      </footer>
      <hr />
    </div>
  );
};

export default Preview;
