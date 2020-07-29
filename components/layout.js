import Head from "next/head";

import Header from "../components/template/header";
import Nav from "../components/template/nav";
import Archive from "../components/blog/archive";

import faviconHtml from "../data/favicon";
import { fullName, websiteLong } from "../data/contact";

const siteTitle = fullName;

const Layout = ({ children, title, description, sortedPostsData }) => {
  const titleToUse = title ? `${title} | ${siteTitle}` : siteTitle;
  return (
    <div id="wrapper">
      <Head>
        {faviconHtml}
        <link
          href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Raleway:400,800,900"
          rel="stylesheet"
          async
        />
        <meta
          name="description"
          content={`${fullName}'s personal website. ${description}`}
          key="description"
        />
        <meta
          property="og:image"
          content={`${websiteLong}/images/shmulvad.jpg`}
          key="image"
        />
        <meta name="og:title" content={titleToUse} key="title" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:creator" content="@shmulvad" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{titleToUse}</title> :
      </Head>
      <Header />
      <main id="main">{children}</main>
      {!!sortedPostsData ? (
        <Archive sortedPostsData={sortedPostsData} />
      ) : (
        <Nav />
      )}
    </div>
  );
};

export default Layout;
