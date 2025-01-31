import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import AddStudent from './Components/AddStudent';
import AllStudents from './Components/AllStudents';
import EditStudent from './Components/EditStudent';
import Home from './Components/Home';
import StudentDashboard from './Components/StudentDashboard';
import Login from './Components/Login';
import Preference from './Components/Preference';
import ContactUs from './Components/ContactUs';
import OurProduct from './Components/OurProduct';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default home page */}
          <Route path="/studentdashboard" element={<StudentDashboard />} />
          <Route path="/ourproducts"element={<OurProduct/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/preference" element={<Preference />} />
          <Route path="/login" element={<Login />} />
          <Route path="/all-students" element={<AllStudents />} />
          <Route path="/edit/:id" element={<EditStudent />} />
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
