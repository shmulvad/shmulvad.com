const SkillBar = ({ data, categories }) => {
  const { category, compentency, title } = data;

  // TODO: Consider averaging colors
  const titleStyle = {
    background: categories.filter((cat) => cat.name === category[0])[0].color,
  };

  const barStyle = {
    ...titleStyle,
    width: "100%", // `${String(Math.min(100, Math.max((compentency / 5.0) * 100.0, 0)))}%`
  };

  return (
    <div className="skillbar clearfix">
      <div className="skillbar-title" style={titleStyle}>
        <span>{title}</span>
      </div>
      <div className="skillbar-bar" style={barStyle} />
      {/* <div className="skill-bar-percent">{compentency} / 5</div> */}
    </div>
  );
};

export default SkillBar;
