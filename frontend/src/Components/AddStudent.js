import React, { useState } from "react";
import axios from "axios";

export default function AddStudent() {

   const [name, setName] = useState("");
   const [age, setAge] = useState("");
   const [gender, setGender] = useState("");

   function sendData(e) {
      e.preventDefault();

      const newStudent = {
         name,
         age,
         gender
      };

      axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
         alert("Student Added")
         setName("");
         setAge("");
         setGender("");
         
      }).catch((err)=>{
         alert(err)

      })
   }

   return (
      <div className="container">
         <form onSubmit={sendData}>
            <div className="form-group">
               <label htmlFor="name">Student Name</label>
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
               <label htmlFor="age">Student's Age</label>
               <input
                  type="text"
                  className="form-control"
                  id="age"
                  placeholder="Enter Student Age"
                  onChange={(e) => {
                     setAge(e.target.value);
                     console.log("Age updated:", e.target.value); // Debug log for age input
                  }}
               />
            </div>

            <div className="form-group">
               <label htmlFor="gender">Gender</label>
               <input
                  type="text"
                  className="form-control"
                  id="gender"
                  placeholder="Enter Student Gender"
                  onChange={(e) => {
                     setGender(e.target.value);
                     console.log("Gender updated:", e.target.value); // Debug log for gender input
                  }}
               />
            </div>
  
            <button type="submit" className="btn btn-primary">Submit</button>
         </form>
      </div>
   );
}
