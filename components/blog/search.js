import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

const Search = ({ value, handleChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="input-container">
      <FontAwesomeIcon
        className={`search-icon ${isFocused && "is-focused"}`}
        icon={faSearch}
        alt="Search"
      />
      <input
        className="input-field"
        type="text"
        placeholder="Search"
        name="search"
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Search;
