import Link from 'next/link';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school">
        <a href={data.link}>{data.school}</a>, {data.year}
        {data.grade && ', '}
        {data.grade && <Link href={data.gradeLink}><a>{data.grade}</a></Link>}
      </p>
    </header>
  </article>
);

export default Degree;
