import React from "react";
import "./styles.css"

function Sorter() {
        return (  
        <div class="container">
            <h3 className="page-header">Sorting Block</h3>
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/sorter/IMG_1501.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/sorter/IMG_1550.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/sorter/IMG_1552.jpg`)}/>
                    </div>
                </div>
            </div>

            <div class="row"><p></p></div>
            
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/sorter/IMG_1553.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/sorter/IMG_1581.jpg`)}/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="card">
                    <img src={require(`../assets/project_images/sorter/IMG_1577.jpg`)}/>
                    </div>
                </div>
            </div>

            <div class="row"><p></p></div>
        </div>
        );
    }
export default Sorter;