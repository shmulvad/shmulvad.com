import { useState } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './Skills/CategoryButton';
import SkillBar from './Skills/SkillBar';

const Skills = ({ categories, skills }) => {
  const buttons = ['All'].concat(categories.map(cat => cat.name));
  const [activeCategory, setActiveCategory] = useState('All');

  const getRows = () => (
    skills
      .filter(skill => activeCategory === 'All' || skill.category.includes(activeCategory))
      .sort((a, b) => {
        let ret = 0;
        if (a.compentency > b.compentency) ret = -1;
        else if (a.compentency < b.compentency) ret = 1;
        else if (a.category[0] > b.category[0]) ret = -1;
        else if (a.category[0] < b.category[0]) ret = 1;
        else if (a.title > b.title) ret = 1;
        else if (a.title < b.title) ret = -1;
        return ret;
      })
      .map(skill => (
        <SkillBar
          categories={categories}
          data={skill}
          key={skill.title}
        />
      ))
  );

  const handleChildClick = label => {
    setActiveCategory(prevActive => (prevActive === label ? 'All' : label));
  };

  const getButtons = () => {
    return buttons.map(key => (
      <CategoryButton
        label={key}
        key={key}
        active={key === activeCategory}
        handleClick={handleChildClick}
      />
    ));
  };

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title">
        <h3>Skills</h3>
      </div>
      <div className="skill-button-container">{getButtons()}</div>
      <div className="skill-row-container">{getRows()}</div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      compentency: PropTypes.number,
      category: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string
    })
  )
};

Skills.defaultProps = {
  skills: [],
  categories: []
};

export default Skills;
