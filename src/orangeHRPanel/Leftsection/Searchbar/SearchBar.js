import React from "react";
import "./Searchbar.css";
import { IoSearchOutline } from "react-icons/io5";

const Searchbar = ({
  searchTerm,
  onSearchChange,
  onSearchSubmit,
  props,viewMode
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearchSubmit();
    }
  };

  return (
    <div className={"search-bar"}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={onSearchChange}
        onKeyDown={ null}
        className={(viewMode === "mobile" ? "input-mob" :  "input")}

      />
      <span
        className={"search-icon"}
        onClick={onSearchSubmit}
      >
        <IoSearchOutline />
      </span>
    </div>
  );
};

export default Searchbar;
