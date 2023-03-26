const express = require("express");
const {
  taoBinhLuan,
  layBinhLuanTheoHinhAnh,
} = require("../../controllers/binhLuanController");
const typeFileUpload = require("../../utiliti/upload");
const binhLuanRoute = express.Router();

// const { verifyToken } = require("../../utiliti/jwtoken");

// 5 phuowng thức CRUD

// hinhAnhRoute.get("/getFoodAll", verifyToken, getFoodAll);
// hinhAnhRoute.get("/getFoodOne/:id", getFoodOne);
// hinhAnhRoute.post("/createFood", createFood);
// hinhAnhRoute.put("/updateFood/:id", updateFood);
// hinhAnhRoute.delete("/deleteFood/:id", deleteFood);

// lấy thức ăn kèm theo loại thức ăn
// hinhAnhRoute.get("/getAllFoodAndType", getAllFoodAndType);
// hinhAnhRoute.get("/getOneFoodAndType/:foodID", getOneFoodAndType);

// upload
// hinhAnhRoute.post("/upload", uploadHinhAnh);

binhLuanRoute.post("/tao-binh-luan", taoBinhLuan);
binhLuanRoute.get("/lay-binh-luan-theo-anh/:hinhAnhID", layBinhLuanTheoHinhAnh);

module.exports = binhLuanRoute;
