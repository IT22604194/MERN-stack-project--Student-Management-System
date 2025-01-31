import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: "#47C364" }}>Contact Us</h2>
      <p className="text-center">Feel free to reach out to us with any questions or feedback!</p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 shadow rounded">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100">Submit</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>Email: contact@growmate.com</p>
        <p>Phone: +94 123 456 789</p>
        <p>Address: 123 Green Street, Colombo, Sri Lanka</p>
      </div>
    </div>
  );
}

export default ContactUs;
