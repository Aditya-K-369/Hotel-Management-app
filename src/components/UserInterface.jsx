import React from "react";
import "../index.css";
import Navbar from "./Navbar";
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
const UserInterface = () => {
  return (
    <div className="UserInterface">
        <Navbar/>
      <div className="UserInterface-body">
      <div className="UserInterface-body-main">
        <div className="UserInterface-body-main-card">
        <div className="UserInterface-body-main-card-left">
            <img  className="UserInterface-body-main-card-left-img"src={image1} alt="" />
        </div>
        <div className="UserInterface-body-main-card-right">
            <div className="UserInterface-body-main-card-right-heading">
            <b>Super Hotel O Sholinganallur Near Anjaneya Temple</b>
            </div>
            <div className="UserInterface-body-main-card-right-data">
            Conveniently set in New Delhi, Hotel O Paharganj Near Railway Station formerly Chand Palace provides air-conditioned rooms, a shared lounge, free WiFi and a restaurant.
            </div>
            <div className="UserInterface-body-main-card-right-footer">
            <div className="UserInterface-body-main-card-right-footer-price">
                Price:2000/day
            </div>
            <div className="UserInterface-body-main-card-right-footer-location">
            📍 New Delhi
            </div>

            </div>
        </div>
        </div> <div className="UserInterface-body-main-card">
        <div className="UserInterface-body-main-card-left">
            <img  className="UserInterface-body-main-card-left-img"src={image2} alt="" />
        </div>
        <div className="UserInterface-body-main-card-right">
            <div className="UserInterface-body-main-card-right-heading">
            <b>
Super Collection O Tilak Nagar Near Pacific Mall formerly Key RoomsOpens in new window
</b>
            </div>
            <div className="UserInterface-body-main-card-right-data">
           Located within 13 km of Gurudwara Bangla Sahib and 15 km of Rashtrapati Bhavan, Super Collection O Tilak Nagar Near Pacific Mall formerly Key Rooms provides rooms with air conditioning and a private...
            </div>
            <div className="UserInterface-body-main-card-right-footer">
            <div className="UserInterface-body-main-card-right-footer-price">
                Price:1800/day
            </div>
            <div className="UserInterface-body-main-card-right-footer-location">
            📍 Gurudwara
            </div>

            </div>
        </div>
        </div>
       <div className="UserInterface-body-main-card">
        <div className="UserInterface-body-main-card-left">
            <img  className="UserInterface-body-main-card-left-img"src={image3} alt="" />
        </div>
        <div className="UserInterface-body-main-card-right"></div>
        </div> 
      </div>
      </div>
    </div>
  );
};

export default UserInterface;
