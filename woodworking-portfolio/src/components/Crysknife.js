import React from "react";
import "./styles.css"

function Crysknife() {
        return (  
        <div class="container">
            <h3 className="page-header">Crysknife</h3>
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/crysknife/crysknife_1.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/crysknife/crysknife_2.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/crysknife/crysknife_3.jpg`)}/>
                    </div>
                </div>
            </div>

            <div class="row"><p></p></div>
            
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/crysknife/crysknife_4.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/crysknife/crysknife_5.jpg`)}/>
                    </div>
                </div>
            </div>

            <div class="row"><p></p></div>
        </div>
        );
    }
export default Crysknife;