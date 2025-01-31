import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import axios from "axios";
import editstudent from "../images/editstudent.jpg";

export default function AddStudent() {
  const navigate = useNavigate(); // Initialize navigation

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [grade, setGrade] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newStudent = {
      name,
      position,
      grade,
      password,
      phoneNumber,
      address,
      gender,
    };

    axios
      .post("http://localhost:8070/student/add", newStudent)
      .then(() => {
        alert("Student Added");
        setName("");
        setPosition("");
        setGrade("");
        setPassword("");
        setPhoneNumber("");
        setAddress("");
        setGender("");
        navigate("/login"); // Redirect to Login page after successful signup
      })
      .catch((err) => {
        alert(err);
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
        width: "100%",
        overflow: "hidden",
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
          maxHeight: "80vh", // Prevents form from overflowing outside image
          overflowY: "auto", // Adds scrollbar when content is too long
        }}
      >
        <h1 style={{
          color: "#FF5733",
          fontWeight: "bold",
          fontSize: "2rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          textAlign:"center"
        }}>Sign Up</h1>
        <form onSubmit={sendData} style={{ overflowY: "auto" }}>
          <div className="form-group">
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Student Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              className="form-control"
              id="position"
              placeholder="Enter User's Position"
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="grade">Grade</label>
            <select
              className="form-control"
              id="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            >
              <option value="">Select Grade</option>
              <option value="1-2">1-2 Years</option>
              <option value="3-4">3-4 Years</option>
              <option value="5-7">5-7 Years</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              pattern="\d{10}"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              className="form-control"
              id="address"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              minLength="10"
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              placeholder="Enter User's Gender"
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" style={{ marginBottom: "10px" }}>
            Register
          </button>
          <button
            type="button"
            className="btn btn-secondary w-100"
            onClick={() => navigate("/login")} // Navigate to Login page
          >
            Login Instead
          </button>
        </form>
      </div>
    </div>
  );
}
