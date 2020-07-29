import Degree from "./education/degree";

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {data.map((degree, i) => (
      <Degree data={degree} key={i} />
    ))}
  </div>
);

export default Education;
