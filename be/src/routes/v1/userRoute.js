const express = require("express");
const {
  signUp,
  login,
  layThongTinUser,
  updateThongTinUser,
  thayAnhDaiDien,
} = require("../../controllers/userController");
const typeFileUpload = require("../../utiliti/upload");

const userRoute = express.Router();

// API sign in
userRoute.post("/dang-ky", signUp);
// API sign up
userRoute.post("/dang-nhap", login);

// GET thông tin user
userRoute.get("/thong-tin-nguoi-dung", layThongTinUser);

// PUT thông tin cá nhân của user
userRoute.put("/update-thong-tin-nguoi-dung/:nguoiDungID", updateThongTinUser);
// POST cập nhập ảnh đại diện
userRoute.post("/thay-doi-anh-dai-dien", typeFileUpload, thayAnhDaiDien);

module.exports = userRoute;
