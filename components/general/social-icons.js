import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { socialIcons } from "../../data/contact";

const setColorsStatic = (curLabel) => {
  return socialIcons.reduce((acc, icon) => {
    const color = icon.label === curLabel ? icon.color : "gray";
    acc[icon.label] = color;
    return acc;
  }, {});
};

const SocialIcons = () => {
  const [colors, setColors] = useState(setColorsStatic(null));
  return (
    <ul className="icons">
      {socialIcons.map((s) => (
        <li key={s.label}>
          <a href={s.link} target="_blank" rel="noopener">
            <FontAwesomeIcon
              icon={s.icon}
              alt={s.label}
              color={colors[s.label]}
              height="1em"
              onMouseOver={() => setColors(setColorsStatic(s.label))}
              onMouseLeave={() => setColors(setColorsStatic(null))}
              style={{transition: "color 0.3s ease-out"}}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
