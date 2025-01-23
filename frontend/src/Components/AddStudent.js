import React, { useState } from "react";
import axios from "axios";
import editstudent from "../images/editstudent.jpg";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [grade, setGrade] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
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
      age,
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
        setAge("");
        setGender("");
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
        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
        <form onSubmit={sendData}>
          <div className="form-group">
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Student Name"
              onChange={(e) => {
                setName(e.target.value);
                console.log("Name updated:", e.target.value); // Debug log for name input
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Position</label>
            <input
              type="text"
              className="form-control"
              id="position"
              placeholder="Enter User's Position "
              onChange={(e) => {
                setPosition(e.target.value);
                console.log("position updated:", e.target.value); // Debug log for name input
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Grade</label>
            <select
              
              className="form-control"
              id="grade"
              value={grade}
              placeholder="Enter User's Position "
              onChange={(e) => setGrade(e.target.value)}
              required>
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
              pattern="\d{10}" // Ensures a valid 10-digit number
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
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
