import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import editstudent from "../images/editstudent.jpg";

export default function EditStudent() {
  const { id } = useParams(); // Get student ID from the URL
  const navigate = useNavigate(); // Hook for navigation
  const [student, setStudent] = useState({
    name: "",
    age: "",
    gender: "",
  });

  useEffect(() => {
    // Fetch student data by ID
    axios
      .get(`http://localhost:8070/student/get/${id}`)
      .then((res) => {
        setStudent(res.data.student);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  function handleUpdate(e) {
    e.preventDefault();

    // Update student data
    axios
      .put(`http://localhost:8070/student/update/${id}`, student)
      .then(() => {
        alert("Student updated successfully!");
        navigate("/"); // Redirect back to the All Students page
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${editstudent})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="form-container"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)", 
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Edit Student</h1>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={student.name}
              onChange={(e) =>
                setStudent({ ...student, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              value={student.age}
              onChange={(e) =>
                setStudent({ ...student, age: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <input
              type="text"
              className="form-control"
              value={student.gender}
              onChange={(e) =>
                setStudent({ ...student, gender: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100"
            style={{ marginTop: "10px" }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
