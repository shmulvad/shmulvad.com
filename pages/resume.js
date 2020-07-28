import Link from 'next/link'
import Layout from '../components/layout';

import Education from '../components/resume/education';
import PositionList from '../components/resume/position-list';
import Courses from '../components/resume/courses';
import References from '../components/resume/references';
import Download from '../components/resume/download';
// import Skills from '../components/resume/skills';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import experience from '../data/resume/experience';
import extracurricular from '../data/resume/extracurricular';
// import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Extracurricular',
  // 'Skills',
  'Courses',
  'References',
];

const Resume = () => (
  <Layout title="Resume">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link href="resume"><a>Resume</a></Link></h2>
          <div className="link-container">
            {sections.map(sec => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
          <Download />
        </div>
      </header>
      <Education data={degrees} />
      <PositionList data={experience} positions_type="Experience" short="experience" />
      <PositionList data={extracurricular} positions_type="Extracurricular Activities" short="extracurricular" />
      {/* <Skills skills={skills} categories={categories} /> */}
      <Courses data={courses} />
      <References />
      <div className="align-center">
        <h2><Link href="resume"><a>▲ Go back up ▲</a></Link></h2>
      </div>
    </article>
  </Layout>
);

export default Resume;
