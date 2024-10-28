const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
const AdminHotel = require("./models/AdminHotel-model");
const app = express();
const mongooseConnection=require("./config/mongoose-connection");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", userRouter);
app.use("/admins", adminRouter);

// Change GET to POST if you need a request body
app.post("/", async (req, res) => {
  try {
    const { cityName, hotelName, hotelDescription, price } = req.body;
    const hotel = await AdminHotel.create({
      cityName,
      hotelName,
      hotelDescription,
      price,
    });
    res.send(hotel);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while creating the hotel" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
