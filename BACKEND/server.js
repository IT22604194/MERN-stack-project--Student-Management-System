const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;//Backend Port

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

// Correct Mongoose connection configuration
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb Connection Success!"))
  .catch((error) => console.error("MongoDB Connection Error:", error));

const studentRouter = require("./routes/students.js");
app.use("/student", studentRouter);

// Add a route for login
app.post('/login', (req, res) => {
  const { name, password } = req.body;
  if (name === 'testUser' && password === 'testPassword') {
    res.status(200).send({ token: 'test123' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
