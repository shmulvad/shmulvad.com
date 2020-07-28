import Link from 'next/link';
import { CommentCount } from 'disqus-react';

import Date from '../date';

import { websiteLong } from '../../data/contact';

const Preview = ({ title, date, summary, heroImg, id }) => {
  const link = `/blog/${id}`;
  return (
    <div className="blog-preview">
      <h2><Link href={link}><a>{title}</a></Link></h2>
      <h5 id="date"><Date dateString={date} /></h5>
      <Link href={link}>
        <a className="image">
          <img className="preview-img" src={heroImg} alt={title} />
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
              shortname='shmulvad'
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
      <hr/>
    </div>
  );
};

export default Preview;
