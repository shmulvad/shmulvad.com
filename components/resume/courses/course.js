const Course = ({ data, last }) => (
  <li className="course-container">
    <a href={data.link}>
      {data.number && <h4 className="course-number">{data.number}:</h4>}
      <p className="course-name">{data.title}</p>
    </a>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

export default Course;
