import Link from "next/link";
import Layout from "../components/layout";

import IndexPosts from "../components/index-posts";

import { getSortedPostsData } from "../lib/posts";

import { indexDescription } from '../data/descriptions';

const MAX_BLOG_POSTS = 4;

const Home = ({ allPostsData }) => (
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
      <IndexPosts posts={allPostsData} maxPosts={MAX_BLOG_POSTS} />
    </article>
  </Layout>
);

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
