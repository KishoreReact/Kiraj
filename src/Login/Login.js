import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Login(props, viewMode) {
  const location = useLocation();
  const navigate = useNavigate();
  const guestText = props.email ? props.email : "Guest";
  const truncatedText =
    guestText.length > 10 ? guestText.substring(0, 10) + "..." : guestText;
  const imageUrl =
    "https://m.media-amazon.com/images/M/MV5BZDNlN2VkNjAtYWJmMi00NTllLThiODgtZTg1NTQxNzE2NjFhXkEyXkFqcGdeQXVyNjc4NTExMTk@._V1_SX300.jpg";
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);
  console.log(isMenuVisible);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuVisible && !event.target.closest(".login")) {
        setIsMenuVisible(false);
      } else if (
        isLoginPopupVisible &&
        !event.target.closest(".login-details-popup")
      ) {
        setIsLoginPopupVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuVisible, isLoginPopupVisible]);

  const handleLogin = () => {
    navigate("/loginSignup");
  };

  const handleLogout = () => {
    navigate("/loginSignup");
  };

  const handlerspLogin = () => {
    props.viewMode === "mobile" ? navigate("/loginSignup") : console.log("log")
  }

  return (
    <div className={props.viewMode === "mobile" ? "login-mob" : "login"}>
      <div className="guest-wrapper"
      onClick={handlerspLogin}>
        <img src={imageUrl} alt="Guest User Icon" className="guest-image" />
        <span
          className={
            props.viewMode === "mobile" ? "guest-text-mob" : "guest-text"
          }
        >
          {truncatedText}
        </span>

        {props.viewMode === "desktop" ? <button
          className={
            props.viewMode == "mobile" ? "menu-button-mob" : "menu-button"
          }
          onClick={toggleMenu}
        >
          ...
        </button>: null}
      </div>

      {/* {props.viewMode == "mobile" && isMenuVisible &&  (
        <div >
        
          hi
        </div>
      ) } */}

      {isMenuVisible && props.viewMode == "desktop" && (
        <div className="menu-popup">
          {location.state == null ? (
            <ul>
              <li onClick={handleLogin}>Login</li>
            </ul>
          ) : (
            <ul>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Login;
