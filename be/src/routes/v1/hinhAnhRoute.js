const express = require("express");
const hinhAnhRoute = express.Router();

const {
  uploadHinhAnh,
  layTatCaHinhAnh,
  timHinhAnh,
  getHinhAnhOne,
  layHinhAnhTao,
  xoaHinhAnh,
} = require("../../controllers/hinhAnhController");
const typeFileUpload = require("../../utiliti/upload");
const { verifyToken } = require("../../utiliti/jwtoken");

// upload hinh anh
hinhAnhRoute.post("/upload", verifyToken, typeFileUpload, uploadHinhAnh);

// GET danh sách ảnh về
hinhAnhRoute.get("/lay-tat-ca-hinh-anh", layTatCaHinhAnh);

// GET tìm kiếm danh sánh ảnh theo tên
hinhAnhRoute.get("/tim-hinh", timHinhAnh);

// GET thông tin ảnh và người tạo ảnh bằng id ảnh
hinhAnhRoute.get("/chi-tiet-hinh/:hinhAnhID", getHinhAnhOne);

// GET danh sách ảnh đã tạo theo user
hinhAnhRoute.get("/hinh-da-tao", verifyToken, layHinhAnhTao);

// DELETE xóa ảnh đã tạo theo id ảnh
hinhAnhRoute.delete("/xoa-hinh-anh/:hinhAnhID", verifyToken, xoaHinhAnh);

module.exports = hinhAnhRoute;
