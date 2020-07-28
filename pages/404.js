import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../components/layout";
import Suggestions from "../components/404/suggestions";

import { getSortedPostsData } from "../lib/posts";
import { findClosePages, findClosePosts } from "../lib/find-close";

import { websiteShort } from '../data/contact';


const Custom404 = ({ allPostsData }) => {
  const router = useRouter();
  const path = router.asPath.toLowerCase();

  const closePages = findClosePages(path);
  const closePosts = findClosePosts(path, allPostsData);

  return (
    <Layout title="404">
      <article className="post" id="404">
        <header>
          <div className="title align-center">
            <h2>
              <Link href="/">
                <a>404</a>
              </Link>
            </h2>
            <p>This is awkward...</p>
          </div>
        </header>
        <p>
          Sorry, I don't know how you got here. But the page{" "}
          <em>"{websiteShort}{router.asPath}"</em> could not be found.
        </p>
        <Suggestions items={closePages} term="page" />
        <Suggestions items={closePosts} term="post" />
      </article>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Custom404;
