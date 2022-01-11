import React, { useState } from "react";
import { BiSearch, BiCaretDown, BiCaretUp } from "react-icons/bi";
import "./styles.css";

function SearchBar({ onChangeBtn, filterBody }) {
  const [openFilter, setOpenFilter] = useState(false);

  function handleFilter() {
    setOpenFilter(!openFilter);
  }

  return (
    <div className="main-container-search">
      <div className="search-container">
        <span>
          <BiSearch className="search-icon" />{" "}
        </span>
        <input
          type="text"
          className="input-element"
          placeholder="Search"
          onChange={onChangeBtn}
        ></input>
        <span>
          {openFilter === false ? (
            <BiCaretDown
              className="filter-btn-icon"
              onClick={() => handleFilter()}
            />
          ) : (
            <BiCaretUp
              className="filter-btn-icon"
              onClick={() => handleFilter()}
            />
          )}
        </span>
      </div>
      {openFilter === true && (
        <div className="filter-container">{filterBody}</div>
      )}
    </div>
  );
}

export default SearchBar;
