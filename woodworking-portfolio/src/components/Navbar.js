import React from "react";
import { NavLink } from "react-router-dom";
import './styles.css';

function Navbar() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark navbar-color">
                 <NavLink to="/">
                    <a class="navbar-brand" href="#">Vic's Woodworking</a>
                 </NavLink>
               
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ">
                        <NavLink className="nav-link" to="/">
                            <h5>Home </h5>
                            <span className="sr-only">(current)</span>
                        </NavLink>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Projects
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/projects">
                                        <a class="dropdown-item">All Projects</a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/intarsia">
                                        <a class="dropdown-item">Intarsia</a>
                                    </NavLink>
                                </li>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
export default Navbar;