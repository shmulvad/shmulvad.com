import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons/faFileDownload";

import cvLink from "../../data/resume/cv";

const Download = () => (
  <div className="align-center download">
    <a href={cvLink} download className="button large">
      <FontAwesomeIcon icon={faFileDownload} height="1em" width="1em" />
      <span className="spacing"></span>
      Download CV
    </a>
  </div>
);

export default Download;
