import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css"
import {
  Landing,
  Navbar,
  Projects,
  Intarsia,
  Footer,
  AboutMe,
  Contact,
  Sorter,
  Bear_Forest,
  Teddy_Bear,
  Crysknife,
} from "./components";

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/intarsia" element={<Intarsia />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sorter" element={<Sorter />} />
            <Route path="/bear_forest" element={<Bear_Forest />} />
            <Route path="/teddy_bear" element={<Teddy_Bear />} />
            <Route path="/crysknife" element={<Crysknife />} />
            <Route path="*" element={<h1>PAGE NOT FOUND </ h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
       
    </Router>
   
  );
}

export default App;
