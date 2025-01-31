import React, { useState } from "react";
import editstudent from "../images/editstudent.jpg";

export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { name, password });
    };

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
                    maxHeight: "90vh",
                    overflowY: "auto",
                }}
            >
                <h1
              style={{
                    color: "#FF5733",
                    fontWeight: "bold",
                    fontSize: "2rem",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                    textAlign:"center"
               }}
        >Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">User Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your user name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength="6"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
