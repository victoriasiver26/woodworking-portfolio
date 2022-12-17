import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css"
import {
  Landing,
  Navbar,
  Project1,
  Project2,
  Footer,
  AboutMe,
  Contact,
} from "./components";

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>PAGE NOT FOUND </ h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
       
    </Router>
   
  );
}

export default App;
