const express = require("express");
const binhLuanRoute = require("./v1/binhLuanRoute");
const hinhAnhRoute = require("./v1/hinhAnhRoute");
const luuAnhRoute = require("./v1/luuAnhRoute");
const userRoute = require("./v1/userRoute");
const rootRoute = express.Router();

rootRoute.use("/quan-ly-nguoi-dung", userRoute);
rootRoute.use("/hinh-anh", hinhAnhRoute);
rootRoute.use("/binh-luan", binhLuanRoute);
rootRoute.use("/luu-anh", luuAnhRoute);

rootRoute.use("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = rootRoute;
