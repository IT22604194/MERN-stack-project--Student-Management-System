import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; // assuming you have a Header component
import AddStudent from './Components/AddStudent'; // assuming you have an AddStudent component
import AllStudents from './Components/AllStudents';
import EditStudent from './Components/EditStudent';
import Home from './Components/Home';


function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/' element={<AllStudents/>} />
          <Route path="/edit/:id" element={<EditStudent />} />
          <Route path="/add" element={<AddStudent />} />
          
          

          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
