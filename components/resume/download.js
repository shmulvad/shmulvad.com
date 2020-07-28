import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faFilePdf from '@fortawesome/fontawesome-free-regular/faFilePdf';

import cvLink from '../../data/resume/cv';

const Download = () => (
  <div className="align-center download">
    <a href={cvLink} download className="button large">
      <FontAwesomeIcon icon={faFilePdf} height="1em" />{' '}
      Download CV
    </a>
  </div>
);

export default Download;
