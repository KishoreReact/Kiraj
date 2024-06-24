import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrangeHR from "./orangeHRPanel/orangeHR";
import LoginSignupForm from "./Login/LoginForm/LoginForm";
import ErrorBoundary from "./Error/ErrorBoundary";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", []);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<OrangeHR />} />
            <Route path="/loginSignup" element={<LoginSignupForm />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
