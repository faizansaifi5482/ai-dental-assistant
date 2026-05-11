"use client";

import { useState } from "react";

export default function SignupPage() {

  const [role, setRole] = useState("user");

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2>Create Account</h2>
        <p>Join DentAssist today</p>

        {/* Role Select */}
        <div className="role-select">

          <button
            className={role === "user" ? "active" : ""}
            onClick={() => setRole("user")}
          >
            User
          </button>

          <button
            className={role === "admin" ? "active" : ""}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>

        </div>

        <form className="auth-form">

          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Email Address" />

          <input type="password" placeholder="Create Password" />

          <button type="submit" className="auth-btn">
            Sign Up
          </button>

        </form>

        <p className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </p>

      </div>

    </div>
  );
}