import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AboutMe from "./AboutMe";
import './styles.css';

function Footer() {
  return (
    <div className="footer">
        <div class="row">
            <div class="col align-self-center">
            <img src={require(`../assets/placeholder_logo.png`)} width="50" height="50" alt="Logo"/>
               <p>Victoria Siver's Woodworking Portfolio</p>
            </div>
            <div class="col">
                <div> <NavLink to="/aboutme"> About Me</NavLink> </div>
                <div> <NavLink to="/contact"> Contact </NavLink> </div> 
            </div>
        </div>
            
            
    </div>

    
  );
}

export default Footer;