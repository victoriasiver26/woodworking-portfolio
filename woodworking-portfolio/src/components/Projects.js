import React from "react";
import { NavLink } from "react-router-dom";
import './styles.css';

function Projects() {
        return (
        <div class="container">
            <div class="row"><p></p></div>
            
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img
                        src={require(`../assets/project_images/sorter/IMG_1577.jpg`)}
                        class="card-img-top"
                        alt="Sorting Block"
                    />
                    <div class="card-body">
                        <h5 class="card-title">Sorting Block</h5>
                        <p class="card-text">
                        A shape sorting block I made for my niece's first christmas.
                        </p>
                        
                        <NavLink className="nav-link" to="/sorter">
                            <a class="button-tan" >Build Photos</a>
                        </NavLink>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img
                        src={require(`../assets/project_images/crysknife/crysknife_4.jpg`)}
                        class="card-img-top"
                        alt="Fissure in Sandstone"
                    />
                    <div class="card-body">
                        <h5 class="card-title">Dune Crysknife</h5>
                        <p class="card-text">
                        My take on a Crysknife from Dune.
                        </p>
                        
                        <NavLink className="nav-link" to="/crysknife">
                            <a class="button-tan" >Build Photos</a>
                        </NavLink>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img
                        src={require(`../assets/project_images/teddy_bear/teddy_6.jpg`)}
                        class="card-img-top"
                        alt="Fissure in Sandstone"
                    />
                    <div class="card-body">
                        <h5 class="card-title">Teddy Bear</h5>
                        <p class="card-text">
                        My first intarsia project, a teddy bear I made as a mothers day gift.
                        </p>
                        
                        <NavLink className="nav-link" to="/teddy_bear">
                            <a class="button-tan" >Build Photos</a>
                        </NavLink>
                    </div>
                    </div>
                </div>
            </div>
            <div class="row"><p></p></div>

            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img
                        src={require(`../assets/project_images/headboard/headboard_1.jpg`)}
                        class="card-img-top"
                        alt="Sorting Block"
                    />
                    <img
                        src={require(`../assets/project_images/headboard/headboard_2.jpg`)}
                        class="card-img-top"
                        alt="Sorting Block"
                    />
                    <div class="card-body">
                        <h5 class="card-title">Simple Headboard</h5>
                        <p class="card-text">
                        I made a very simple headboard using 1x2s and lots of pocket holes.
                        </p>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img
                        src={require(`../assets/project_images/bear_forest/bear_4.jpg`)}
                        class="card-img-top"
                        alt="Fissure in Sandstone"
                    />
                    <div class="card-body">
                        <h5 class="card-title">Bear in the Forest</h5>
                        <p class="card-text">
                        This was made as a fathers day gift.
                        </p>
                        
                        <NavLink className="nav-link" to="/bear_forest">
                            <a class="button-tan" >Build Photos</a>
                        </NavLink>
                    </div>
                    </div>
                </div>
            </div>
            <div class="row"><p></p></div>
          </div>
        );
    }
export default Projects;