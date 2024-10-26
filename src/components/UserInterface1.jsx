import React from "react";
import Navbar from "./Navbar";
import "../index.css";
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image from './images/image.png'
import image7 from './images/image7.png'
import image6 from './images/image6.png'

const UserInterface1 = () => {
  return (
    <div>
      <Navbar />
      <div className="UserInterface1">
        <div className="UserInterface1-body1-outerdiv">
          <div className="UserInterface1-body1-heading">
            <h2>
              <b>Trending Places</b>
            </h2>
          </div>
          <div className="UserInterface1-body1-innerdiv">
            <div className="UserInterface1-body1-div">
              <div className="UserInterface1-body1-left"><img className="UserInterface1-body1-left-img" src={image4} alt="" /><h3 className="UserInterface1-body1-left-img-name">New Delhi</h3></div>
              <div className="UserInterface1-body1-right"><img className="UserInterface1-body1-left-img" src={image5} alt="" /><h3 className="UserInterface1-body1-left-img-name">Banglore</h3></div>
            </div>
          </div>
          <div className="UserInterface1-body1-innerdiv">
            <div className="UserInterface1-body1-div">
              <div className="UserInterface1-body1-one"><img className="UserInterface1-body1-left-img" alt="" src={image} /><h3 className="UserInterface1-body1-left-img-name">Mumbai</h3></div>
              <div className="UserInterface1-body1-two"><img className="UserInterface1-body1-left-img" alt="" src={image6} /><h3 className="UserInterface1-body1-left-img-name">Hydrebad</h3></div>
              <div className="UserInterface1-body1-three"><img className="UserInterface1-body1-left-img" alt="" src={image7} /><h3 className="UserInterface1-body1-left-img-name">Banglore</h3></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInterface1;
