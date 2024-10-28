import React from "react";
import Navbar from "./Navbar";

const AdminCreate = () => {
  return (
    <div>
      <Navbar />
      <h2 className="AdminCreate-body-heading">Create a new Hotel now!</h2>
      <div className="AdminCreate-body"> 
        <div className="AdminCreate-body-form">
        <form action="">
        <input className="AdminCreate-body-form-input" type="text" name="city" placeholder="Enter the city name" required />
        <input className="AdminCreate-body-form-input" type="text" name="hotelName" placeholder="Enter the hotel name"  required/>
        <input className="AdminCreate-body-form-input" type="text" name="description" placeholder="Enter the hotel description" required />
        <input className="AdminCreate-body-form-input" type="number" name="price" id="" placeholder="Enter the price per day" />
        <input className="AdminCreate-body-form-file" type="file" name="image" required />
        <input className="AdminCreate-body-form-submit" type="submit" value="submit"/>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AdminCreate;
