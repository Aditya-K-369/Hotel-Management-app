const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  cityName: String,
  hotelName: String,
  hotelDescription: String,
  price: Number,
});

module.exports = mongoose.model("hotel",hotelSchema)
