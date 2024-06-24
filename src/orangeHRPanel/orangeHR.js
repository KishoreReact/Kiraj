import React, { useState, useEffect } from "react";
import "./OrangeHR.css";
import Leftpanel from "./Leftsection/Leftpanel";
import { useLocation } from "react-router-dom";
import Login from "../Login/Login";
import ProfileView from "./profilevew/profileView";

function OrangeHR() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [selectedState, setSelectedState] = useState(false);
  const [viewMode, setViewMode] = useState("desktop");

  const menuBarData = ["configuration", "employee List", "Add Employee", "Reports" ]

  useEffect(() => {}, [location.state?.existingUser]);


  

  const handleHomeClick = () => {
    setSelectedState(false);
  };

  const updateViewMode = () => {
    if (window.innerWidth < 768) {
      setViewMode("mobile");
    } else {
      setViewMode("desktop");
    }
  };

  useEffect(() => {
    updateViewMode();

    window.addEventListener("resize", updateViewMode);
    return () => {
      window.removeEventListener("resize", updateViewMode);
    };
  }, []);
  

  const usersData = localStorage.getItem("users");
  const user2 = usersData ? JSON.parse(usersData) : [];

  // Filter the watchlist for the current user
  const currentUserEmail = location?.state?.user?.email;
  const filteredWatchlist =
    user2.find((user) => user.email === currentUserEmail)?.watchlist || [];

  return (
    <div className="App">
      <Leftpanel
        email={location?.state?.user?.email}
        state={selectedState}
        setState={setSelectedState}
        onButtonClick={handleHomeClick}
        viewMode={viewMode}
      />
       
        <div
        className={
          searchResults.length === 0 
            ? (viewMode === "desktop" ? "left-panel2" : "left-panel2-mob")
            : "left-panel"
        }
        
        >
          <div className="navbar">PIM <Login/></div>
          <div className="menuNavbar">
          {menuBarData.map((item, index) => (
            <div className="navConfig">{item} </div>))}
            <div><Login email={location?.state?.user?.email} viewMode={viewMode}/></div></div>
         
          <ProfileView email={location?.state?.user?.email}/>
        
        </div>
      
    </div>
  );
}

export default OrangeHR;
