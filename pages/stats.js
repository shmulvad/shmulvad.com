import Link from 'next/link'

import Layout from '../components/layout';

import Personal from '../components/stats/personal';
import Github from '../components/stats/github';
// import Steps from '../components/stats/steps';

const Stats = () => (
  <Layout title="Stats">
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2>
            <Link href="/stats"><a>Stats</a></Link>
          </h2>
        </div>
      </header>
      <Personal />
      <Github />
      {/* <Steps /> */}
    </article>
  </Layout>
);

export default Stats;