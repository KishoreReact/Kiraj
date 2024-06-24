import React, { useState } from "react";
import "./Leftpanel.css";
import Searchbar from "./Searchbar/SearchBar";
import Mylist from "./Mylists/Mylist";

const Leftpanel = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`panel-container ${isSidebarOpen ? "open" : "closed"}`}>
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div
          className={props.viewMode === "mobile" ? "hrpan-mob" : "hrpan"}
        >
          <div className={props.viewMode === "mobile" ? "head-mob" : "head"}>
            Orange<div className="color">HRM</div>
          </div>
          <Searchbar viewMode={props.viewMode} />
          <Mylist

            viewMode={props.viewMode}
          />
        </div>
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isSidebarOpen ? "←" : "→"}
      </button>
    </div>
  );
};

export default Leftpanel;
