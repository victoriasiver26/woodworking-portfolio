import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AboutMe from "./AboutMe";
import './styles.css';

function Footer() {
  return (
    <div className="footer">
      <div class="row"><p></p></div>
      <div class="row">
          <div class="col align-self-center">
          <img src={require(`../assets/placeholder_logo.png`)} width="50" height="50" alt="Logo"/>
              <p>Victoria Siver's Woodworking Portfolio</p>
          </div>
          <div class="col">
              <h4> <NavLink to="/aboutme"> About Me</NavLink> </h4>
              <h4> <NavLink to="/contact"> Contact </NavLink> </h4> 
          </div>
      </div>
    </div>
  );
}

export default Footer;