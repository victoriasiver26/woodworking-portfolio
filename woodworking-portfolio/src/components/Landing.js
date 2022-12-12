import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'; 
// Template from react-bootstrap

function Landing() {
        return (
          <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../assets/woodwork_1.jpeg`)}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../assets/woodwork_2.png`)}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../assets/woodwork_3.png`)}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        );
    }
export default Landing;