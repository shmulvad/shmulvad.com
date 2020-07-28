import Link from 'next/link'

import Layout from '../components/layout';
import { getPageMarkdown } from '../lib/pages';

const About = ({ contentHtml, count }) => (
  <Layout title="About">
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2><Link href="about"><a>About me</a></Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  </Layout>
);

export async function getStaticProps({ }) {
  const props = await getPageMarkdown("about");
  return { props };
}

export default About;
