import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons/faRss";

import Layout from "../components/layout";
import Preview from "../components/blog/preview";

import { getSortedPostsData } from "../lib/posts";

import { blogDescription } from "../data/descriptions";

const Blog = ({ posts }) => (
  <Layout sortedPostsData={posts} title="Blog" description={blogDescription}>
    <article className="post mini-post" id="blog">
      <header>
        <div className="title">
          <h2>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </h2>
          <p>Facts, thoughts, bad ideas, and everything else.</p>
        </div>
      </header>
      {posts &&
        posts.map((post) => {
          return (
            <Preview
              title={post.title}
              date={post.date}
              readStatText={post.readStatText}
              summary={post.summary}
              heroImg={post.heroImg}
              id={post.id}
              key={post.id}
            />
          );
        })}
      <a
        href="/api/feed.xml"
        title="RSS"
        style={{ borderBottom: "none" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faRss} alt="RSS" height="0.7em" />
      </a>
    </article>
  </Layout>
);

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
