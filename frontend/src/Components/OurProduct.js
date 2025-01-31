import React, { useEffect, useState } from "react";

function OurProduct() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dummyCourses = [
        { id: 1, name: "🎨 Fun with Shapes", ageGroup: "2-3 years", img: "https://via.placeholder.com/100?text=Shapes" },
        { id: 2, name: "🌈 Introduction to Colors", ageGroup: "3-4 years", img: "https://via.placeholder.com/100?text=Colors" },
        { id: 3, name: "🔢 Basic Numbers & Counting", ageGroup: "4-5 years", img: "https://via.placeholder.com/100?text=Numbers" },
        { id: 4, name: "📖 Storytelling Time", ageGroup: "5-6 years", img: "https://via.placeholder.com/100?text=Stories" },
        { id: 5, name: "✂️ Creative Art & Craft", ageGroup: "6-7 years", img: "https://via.placeholder.com/100?text=Art" },
      ];
      setCourses(dummyCourses);
    };

    fetchData();
  }, []);

  return (
    <div
      className="container-fluid py-4"
      style={{
        backgroundColor: "#C3E6F8", // Light Blue Background
        minHeight: "100vh",
        textAlign: "center",
        paddingBottom: "50px",
      }}
    >
      <h2
        className="mb-4"
        style={{
          color: "#FF5733",
          fontWeight: "bold",
          fontSize: "2rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        🎈 Exciting Courses for 2-7 Year Kids! 🎨
      </h2>
      
      <div className="container">
        <div className="row justify-content-center">
          {courses.map((course) => (
            <div key={course.id} className="col-md-4 mb-4">
              <div
                className="card shadow-lg p-3"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#FFFCF2", // Light Cream for Contrast
                  border: "3px solid #FFA500",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={course.img}
                  alt={course.name}
                  className="card-img-top mx-auto"
                  style={{
                    borderRadius: "10px",
                    maxHeight: "100px",
                    width: "auto",
                    display: "block",
                  }}
                />
                <div className="card-body text-center">
                  <h5
                    className="card-title"
                    style={{ color: "#4CAF50", fontWeight: "bold", fontSize: "1.3rem" }}
                  >
                    {course.name}
                  </h5>
                  <p className="card-text" style={{ fontSize: "1.1rem", color: "#555" }}>
                    📅 {course.ageGroup}
                  </p>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#FFC107",
                      border: "none",
                      color: "#333",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "background 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#FFA500")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#FFC107")}
                  >
                    Enroll Now! 🚀
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
