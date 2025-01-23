import React from "react";
import { Link } from "react-router-dom";
import home from "../images/home.png";

function Home(){
    return(
      
        <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", padding: "20px" }}>
      {/* Banner Section */}
      <div className="text-center bg-light p-4 rounded shadow" style={{ marginBottom: "20px" }}>
        <h1 style={{ fontWeight: "bold", color: "#333" }}>Education for Every Child!</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
        <Link to={"/add"}>
          <button
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            For Teachers
          </button>
        </Link>
        <Link to={"/add"}>
          <button
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            For Parents
          </button>
         </Link>
         <Link to={"/add"} >
          <button
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            For Students
          </button>
        </Link>
        </div>
      </div>

      {/* Description Section */}
      <div className="text-center" style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#555" }}>
          GrowMate is a fun and engaging learning platform designed for children aged 2 to 7. It combines colorful
          lessons, interactive games, and exciting activities to make learning enjoyable. GrowMate helps parents and
          teachers track progress while encouraging kids to explore, learn, and grow at their own pace.
        </p>
      </div>

      {/* Image Section */}
      <div className="text-center">
        <img
          src={home}
          alt="Cute Plant Icon"
          style={{
            maxWidth: "150px",
            height: "auto",
            borderRadius: "50%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </div>


    );



}
export default Home;