import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
        position: "sticky", 
        top: 0,
        zIndex: 1000, 
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="#" style={{ fontWeight: "bold", color: "#007bff" }}>
          Student Management System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                style={{ fontWeight: "500", color: "#007bff" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/add"
                className="nav-link"
                style={{ fontWeight: "500", color: "#007bff" }}
              >
                Create Student
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
