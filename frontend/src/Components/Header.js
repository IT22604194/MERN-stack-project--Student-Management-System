import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(to right, #7FE466, #47C364)",
        color: "white",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container">
        {/* Link to the home page */}
        <Link
          to="/"
          className="navbar-brand"
          style={{
            fontWeight: "bold",
            color: "#FFFFFF",
            fontSize: "1.5rem",
            letterSpacing: "1px",
          }}
        >
          🌱 GrowMate
        </Link>
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
            {[
              { label: "Home", path: "/" },
              { label: "Our Products", path: "/ourproducts" },
              { label: "Blogs", path: "/" },
              { label: "Contact Us", path: "/contact" },
              { label: "Create Student", path: "/add" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  to={item.path}
                  className="nav-link"
                  style={{
                    fontWeight: "500",
                    color: "#FFFFFF",
                    margin: "0 10px",
                    fontSize: "1rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#FCE87B")}
                  onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
