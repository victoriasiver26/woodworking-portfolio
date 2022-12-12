import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css"
import {
  Landing,
  Navbar,
  Project1,
  Project2,
} from "./components";

function App() {
  return (
    <Router>
      <div class="page-container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="*" element={<h1> ERROR 404: PAGE NOT FOUND </ h1>} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
