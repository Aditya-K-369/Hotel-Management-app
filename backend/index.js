const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", userRouter);
app.use("/admins", adminRouter);

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(3000, () => {
  console.log("connected");
});
