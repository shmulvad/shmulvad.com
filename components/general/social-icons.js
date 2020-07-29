import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { socialIcons } from "../../data/contact";


const SocialIcons = () => (
  <ul className="icons">
    {socialIcons.map((s) => (
      <li key={s.label}>
        <a href={s.link}>
          <FontAwesomeIcon icon={s.icon} height="1em" alt={s.label} />
        </a>
      </li>
    ))}
  </ul>
)

export default SocialIcons;
