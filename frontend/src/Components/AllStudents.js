import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AllStudents() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null); // For tracking the student being edited
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);

  function handleEdit(student) {
    setEditingStudent(student); // Set the selected student for editing
    navigate(`/edit/${student._id}`); // Navigate to the edit page with the student's ID
  }

  function handleUpdate(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:8070/student/update/${editingStudent._id}`, editingStudent)
      .then(() => {
        alert("Student updated successfully!");
        window.location.reload(); // Reload to fetch updated data
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  function handleDelete(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8070/student/delete${id}`)
        .then(() => {
          alert("Student deleted successfully!");
          setStudents(students.filter((student) => student._id !== id)); // Update state after deletion
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }
  

  return (
    <div className="container">
      <h1>All Students</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(student)}
                >
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(student._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingStudent && (
        <div>
          <h2>Edit Student</h2>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={editingStudent.name}
                onChange={(e) =>
                  setEditingStudent({ ...editingStudent, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                value={editingStudent.age}
                onChange={(e) =>
                  setEditingStudent({ ...editingStudent, age: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                className="form-control"
                value={editingStudent.gender}
                onChange={(e) =>
                  setEditingStudent({ ...editingStudent, gender: e.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-success">
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
