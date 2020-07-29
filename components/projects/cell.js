import Date from "../date";

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link}>{data.title}</a>
        </h3>
        <time className="published">{<Date dateString={data.date} />}</time>
      </header>
      <a href={data.link} className="image">
        <img src={data.image} alt="" />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
