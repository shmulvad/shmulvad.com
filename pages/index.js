import Link from "next/link";
import Layout from "../components/layout";

import PreviewSimpleList from "../components/blog/preview-simple-list";

import { getSortedPostsData } from "../lib/posts";

import { indexDescription } from '../data/descriptions';

const MAX_BLOG_POSTS = 4;

const Home = ({ allPostsData }) => {
  const numPosts = Math.min(MAX_BLOG_POSTS, allPostsData.length);
  return (
    <Layout description={indexDescription}>
      <article className="post" id="home">
        <header>
          <div className="title align-center">
            <h2>
              <Link href="/">
                <a>About this site</a>
              </Link>
            </h2>
            <p>A personal homepage statically generated using Next.js</p>
          </div>
        </header>
        <p>
          Hey there, I'm Søren. Welcome to my personal website. Please feel free
          to check out all sections of the site!
        </p>
        <p>
          I also write sometimes (or at least I plan to). Feel free to check out
          my{" "}
          <Link href="/blog">
            <a>full blog</a>
          </Link>{" "}
          or just the latest {numPosts} post{numPosts > 1 && 's'} here:
        </p>
        <PreviewSimpleList posts={allPostsData} numPosts={numPosts} />
      </article>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
