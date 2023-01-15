import React from "react";
import "./login.css";
export default function Login() {
  return (
    <div className="login-container">
      <label htmlFor="">הכנס קוד חקלאי</label>
      <input type="number" />
      <button>כניסה</button>
    </div>
  );
}
