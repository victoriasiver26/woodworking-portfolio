import React from "react";
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
          <div class="col navbar-nav">
              <NavLink to="/aboutme">  <h7 className="footer-text">About Me</h7> </NavLink>
              <NavLink to="/contact">  <h7 className="footer-text">Contact</h7> </NavLink>
          </div>
      </div>
    </div>
  );
}

export default Footer;