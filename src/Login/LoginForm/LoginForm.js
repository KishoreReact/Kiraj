import React, { useState } from "react";
import "../../orangeHRPanel/OrangeHR.css";
import Button from "../../components/Button/Button";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginSignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    //let users = JSON.parse(localStorage.getItem("users")) || [];
    const storedData = localStorage.getItem("users");
console.log("Stored data:", storedData);
let users = [];
try {
  users = JSON.parse(storedData) || [];
} catch (error) {
  console.error("Error parsing stored data:", error);
}

    const existingUser = users?.find((user) => user.email === email);
    if (existingUser) {
      console.log("Logging in with email:", email);
      if (!existingUser.watchlist) {
        existingUser.watchlist = [];
        localStorage.setItem("users", JSON.stringify(users));
      }
      navigate("/", { state: { user: existingUser } });
    } else {
      const newUser = { email, watchlist: [] };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      console.log("New user signed up:", email);
      navigate("/", { state: { user: newUser } });
    }
  };

  const loginPopupStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px 0px 53px 50px",
    borderRadius: "5px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    width: "70%",
  };

  const handleWithoutLogin = () => {
    navigate("/");
  };

  return (
    <div style={loginPopupStyles}>
      <h2 className="label-log">Login</h2>
      <form className="form-log">
        <input
          className="input-log"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button text="Login" onClick={handleLogin} />
      </form>
      <div className="without">
        <div className="clickhere" onClick={handleWithoutLogin}>
          <Link>Click here</Link>
        </div>
        to continue as guest
      </div>
    </div>
  );
}

export default LoginSignupForm;
