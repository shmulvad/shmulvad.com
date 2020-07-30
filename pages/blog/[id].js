import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import { DiscussionEmbed } from "disqus-react";

import Layout from "../../components/layout";
import Date from "../../components/date";

import { websiteLong } from "../../data/contact";

import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/posts";

const Post = ({ postData, sortedPostsData }) => {
  // Fix anchor links on page. Make sure that they take the height of the
  // header into account and also make the scrolling smooth. It is the
  // footnotes that create anchor links
  useEffect(() => {
    const ADDITIONAL_OFFSET = 5; // px
    const headerElm = document.getElementById("header");
    const offset = headerElm.offsetHeight + ADDITIONAL_OFFSET;
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const scrollDest = document.querySelector(this.getAttribute("href"));
        const scrollDestTop = scrollDest.getBoundingClientRect().top;
        const top = scrollDestTop + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      });
    });
  }, []);

  return (
    <Layout sortedPostsData={sortedPostsData} blogPage title={postData.title}>
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title} key="title" />
        <meta
          property="og:description"
          content={postData.short}
          key="description"
        />
        <meta
          property="og:image"
          content={websiteLong + postData.heroImg}
          key="image"
        />
        {postData.containsMath && (
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
            integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
            crossOrigin="anonymous"
          ></link>
        )}
      </Head>
      <article className="post" id="blogpost">
        <header>
          <div className="title">
            <h2>
              <Link href={`/blog/${postData.id}`}>
                <a>{postData.title}</a>
              </Link>
            </h2>
            <p>{postData.short}</p>
            <h4 id="date">
              <Date dateString={postData.date} />
            </h4>
          </div>
        </header>
        <img
          className="hero-img"
          src={postData.heroImg}
          alt={postData.title}
          title={postData.title}
        />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <DiscussionEmbed
          shortname="shmulvad"
          config={{
            url: `${websiteLong}/blog/${postData.id}`,
            identifier: postData.id,
            title: postData.title,
            language: "en_US",
          }}
        />
        <hr />
        <Link href="/blog">
          <a className="button large">↩ Back to blog</a>
        </Link>
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sortedPostsData = getSortedPostsData();
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
      sortedPostsData,
    },
  };
}

export default Post;
