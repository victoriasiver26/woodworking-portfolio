import React from "react";
import "./styles.css"

function Teddy_Bear() {
        return (  
        <div class="container">
            <h3 className="page-header">Teddy Bear</h3>
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/teddy_bear/teddy_1.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/teddy_bear/teddy_2.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/teddy_bear/teddy_3.jpg`)}/>
                    </div>
                </div>
            </div>

            <div class="row"><p></p></div>
            
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/teddy_bear/teddy_4.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/teddy_bear/teddy_5.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/teddy_bear/teddy_6.jpg`)}/>
                    </div>
                </div>
            </div>

            <div class="row"><p></p></div>

            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/teddy_bear/teddy_7.jpg`)}/>
                    </div>
                </div>
            </div>

            <div class="row"><p></p></div>
        </div>
        );
    }
export default Teddy_Bear;