import Position from "./experience/position";

const PositionList = ({ data, positions_type, short }) => (
  <div className="experience">
    <div className="link-to" id={short} />
    <div className="title">
      <h3>{positions_type}</h3>
    </div>
    {data.map((job) => (
      <Position data={job} key={job.company} />
    ))}
  </div>
);

export default PositionList;
