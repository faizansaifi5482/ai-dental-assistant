"use client";

import { useState } from "react";

export default function LoginPage() {

  const [role, setRole] = useState("user");

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2>Login to DentAssist</h2>
        <p>Access your dental assistant dashboard</p>

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

          <input type="email" placeholder="Email Address" />

          <input type="password" placeholder="Password" />

          <button type="submit" className="auth-btn">
            Login
          </button>

        </form>

        <p className="auth-footer">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>

      </div>

    </div>
  );
}