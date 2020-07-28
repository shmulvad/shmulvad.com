import Head from 'next/head'

import Header from '../components/template/header';
import Nav from '../components/template/nav';

import faviconHtml from '../data/favicon'
import { fullName, websiteLong } from '../data/contact';
export const siteTitle = fullName;

const Layout = ({ children, fullPage, title }) => {
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
          content={`${fullName}'s personal website. Facts, thoughts, bad ideas, and everything else.`}
        />
        <meta property="og:image" content={`${websiteLong}/images/shmulvad.jpg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:creator" content="@shmulvad" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title> :
      </Head>
      <Header />
      <main id="main">{children}</main>
      {!fullPage && <Nav />}
    </div>
  )
}

export default Layout;
