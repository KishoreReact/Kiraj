import React from "react";
import "./Searchbar.css";
import { IoSearchOutline } from "react-icons/io5";

const Searchbar = ({
  searchTerm,
  onSearchChange,
  MovieWatchlist,
  onSearchSubmit,
  props,viewMode
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearchSubmit();
    }
  };

  return (
    <div className={MovieWatchlist == true ? "search-bar-mov" : "search-bar"}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={onSearchChange}
        onKeyDown={MovieWatchlist == true ? handleKeyDown : null}
        //className={MovieWatchlist == true ? "input-mov" : "input"}
        className={(viewMode === "mobile" && !MovieWatchlist) ? "input-mob" : (MovieWatchlist ? "input-mov" : "input")}

      />
      <span
        className={MovieWatchlist == true ? "search-icon-mov" : "search-icon"}
        onClick={onSearchSubmit}
      >
        <IoSearchOutline />
      </span>
    </div>
  );
};

export default Searchbar;
