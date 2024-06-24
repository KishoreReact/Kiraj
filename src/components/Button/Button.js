import React from "react";
import "./Button.css";
import { IoHomeOutline } from "react-icons/io5";

const Button = ({ text, icon, style, onClick }) => {
  return (
    <button className={`red-login-button ${style}`} onClick={onClick}>
      {icon && (
        <span style={{ marginRight: "8px" }}>
          {icon === "home" ? (
            <i className="material-icons" style={{ fontSize: "20px" }}>
              {icon}
            </i>
          ) : (
            <IoHomeOutline style={{ fontSize: "20px" }} />
          )}
        </span>
      )}
      {text}
    </button>
  );
};

Button.defaultProps = {
  style: "",
};

export default Button;
