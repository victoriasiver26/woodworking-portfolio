import React from "react";
import "./styles.css"

function Bear_Forest() {
        return (  
        <div class="container">
            <h3 className="page-header">Bear in the Forest</h3>
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/bear_forest/bear_1.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/bear_forest/bear_2.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/bear_forest/bear_3.jpg`)}/>
                    </div>
                </div>
            </div>

            <div class="row"><p></p></div>
            
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/bear_forest/bear_4.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/bear_forest/bear_5.jpg`)}/>
                    </div>
                </div>
            </div>

            <div class="row"><p></p></div>
        </div>
        );
    }
export default Bear_Forest;