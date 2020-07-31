import { parseISO, format } from "date-fns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";

const Date = ({ dateString, className, showIcon }) => {
  const date = parseISO(dateString);
  return (
    <time className={className} dateTime={dateString}>
      {showIcon && (
        <FontAwesomeIcon
          icon={faCalendarDay}
          alt="Date published icon"
          height="0.8em"
          style={{ marginRight: "10px" }}
        />
      )}
      {format(date, "LLLL d, yyyy")}
    </time>
  );
};

export default Date;
