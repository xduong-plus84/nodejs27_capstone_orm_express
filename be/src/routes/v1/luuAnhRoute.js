const express = require("express");
const {
  luuHinhAnh,
  boLuuHinhAnh,
  trangThaiLuu,
  hinhAnhArr,
} = require("../../controllers/luuAnhController");
const luuAnhRoute = express.Router();

const { verifyToken } = require("../../utiliti/jwtoken");

// GET xác định ảnh có lưu hay không
luuAnhRoute.get("/save-or-unsave", trangThaiLuu);

// POST lưu hình ảnh
luuAnhRoute.post("/luu", verifyToken, luuHinhAnh);

// DELETE bỏ lưu ảnh
luuAnhRoute.delete("/bo-luu", verifyToken, boLuuHinhAnh);

// GET danh sách ảnh đã lưu theo user id
luuAnhRoute.get("/hinh-anh-da-luu", verifyToken, hinhAnhArr);

module.exports = luuAnhRoute;
