import React from "react";
import { BiSearch } from "react-icons/bi";
import "./styles.css"

function SearchBar({ onChangeBtn }) {
  return (
    <div className="main-container-search">
    <div className="search-container">
        <span><BiSearch className="search-icon"/></span>
        <input type="text" className="input-element" placeholder="Search" onChange={onChangeBtn} ></input>
    </div>
    </div>
  );
}

export default SearchBar;
