import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faUser, faCalendarAlt, faClock, faInfoCircle, faTachometerAlt, faAddressBook, faTools, faComments } from "@fortawesome/free-solid-svg-icons";
import "./Mylist.css";
import "../../../Login/Login.css";

const Mylist = (props) => {
  const menuItems = [
    { name: "Admin", icon: faUserShield },
    { name: "PIM", icon: faUser },
    { name: "Leave", icon: faCalendarAlt },
    { name: "Time", icon: faClock },
    { name: "Myinfo", icon: faInfoCircle },
    { name: "Dashboard", icon: faTachometerAlt },
    { name: "Directory", icon: faAddressBook },
    { name: "Maintenance", icon: faTools },
    { name: "Buzz", icon: faComments }
  ];

  return (
    <div className="mylist">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <FontAwesomeIcon icon={item.icon} /> <div className="menu-name">{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mylist;
