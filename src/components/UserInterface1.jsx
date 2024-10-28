import React from "react";
import Navbar from "./Navbar";
import "../index.css";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image from "./images/image.png";
import image7 from "./images/image7.png";
import image6 from "./images/image6.png";

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
              <div className="UserInterface1-body1-left">
                <img
                  className="UserInterface1-body1-left-img"
                  src={image4}
                  alt=""
                />
                <h3 className="UserInterface1-body1-left-img-name">
                  New Delhi
                </h3>
              </div>
              <div className="UserInterface1-body1-right">
                <img
                  className="UserInterface1-body1-left-img"
                  src={image5}
                  alt=""
                />
                <h3 className="UserInterface1-body1-left-img-name">Banglore</h3>
              </div>
            </div>
          </div>
          <div className="UserInterface1-body1-innerdiv">
            <div className="UserInterface1-body1-div">
              <div className="UserInterface1-body1-one">
                <img
                  className="UserInterface1-body1-left-img"
                  alt=""
                  src={image}
                />
                <h3 className="UserInterface1-body1-left-img-name">Mumbai</h3>
              </div>
              <div className="UserInterface1-body1-two">
                <img
                  className="UserInterface1-body1-left-img"
                  alt=""
                  src={image6}
                />
                <h3 className="UserInterface1-body1-left-img-name">Hydrebad</h3>
              </div>
              <div className="UserInterface1-body1-three">
                <img
                  className="UserInterface1-body1-left-img"
                  alt=""
                  src={image7}
                />
                <h3 className="UserInterface1-body1-left-img-name">Banglore</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="UserInterface1-types-heading1" ><b>Types of hotels available</b></div>
        <div className="UserInterface1-types-heading2" >Stay in style for your next trip</div>
        <div className="UserInterface1-types">
          <div className="UserInterface-types-div"><img src="https://cf2.bstatic.com/xdata/images/hotel/square600/569032231.jpg?k=e52bf65eb1c7a09c8ad18de5551cec778d0ff92d3f548d73755598c9201ce2b1&o=" alt="" />Luxury villas </div>
          <div className="UserInterface-types-div"><img src="https://cf2.bstatic.com/xdata/images/hotel/square600/594785259.jpg?k=a77faf2327a775dbc8a1b9576016314ac02e4b7c7d3e57f4b7132d89da3fc97e&o=" alt="" />Eco-friendly Resort</div>
          <div className="UserInterface-types-div"><img src="https://cf2.bstatic.com/xdata/images/hotel/square600/574626356.jpg?k=9f72b4f1baa860790e1252f5ae4f7560f2b9fb894f70f79f66266d86cbb3c8be&o=" alt="" />Gampling Site</div>
          <div className="UserInterface-types-div"><img src="https://cf2.bstatic.com/xdata/images/hotel/square600/569032460.jpg?k=9ede47531b5d8b3f80f0ef87ff8d32afae2f5b239dec80b0a686c897eca50b32&o=" alt="" />Riverside-Cottage</div>
        </div>
      </div>
    </div>
  );
};

export default UserInterface1;
