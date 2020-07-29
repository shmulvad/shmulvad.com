import Link from "next/link";

import Layout from "../components/layout";
import Preview from "../components/blog/preview";

import { getSortedPostsData } from "../lib/posts";

const Blog = ({ posts }) => (
  <Layout title="Blog">
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
              summary={post.summary}
              heroImg={post.heroImg}
              id={post.id}
              key={post.id}
            />
          );
        })}
    </article>
  </Layout>
);

export async function getStaticProps() {
  const posts = await getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
