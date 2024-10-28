const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb://127.0.0.1:27017/Hotel-Management-App");
} catch (err) {
  console.log(err.message);
}
mongoose.exports = mongoose.connection;
