const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const modelSequelize = initModels(sequelize);

const bcrypt = require("bcrypt");
const { successCode, failCode, errorCode } = require("../config/response");
const { createToken } = require("../utiliti/jwtoken");

const signUp = async (req, res) => {
  try {
    let { email, mat_khau, ho_ten, tuoi } = req.body;
    let checkUser = await modelSequelize.nguoi_dung.findOne({
      where: {
        email,
      },
    });
    if (checkUser) {
      failCode(res, "Email đã tồn tại");
    } else {
      let model = {
        email,
        mat_khau: bcrypt.hashSync(mat_khau, 10),
        ho_ten,
        tuoi,
      };
      await modelSequelize.nguoi_dung.create(model);
      successCode(res, "Đăng ký thành công");
    }
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};
const login = async (req, res) => {
  try {
    let { email, mat_khau } = req.body;

    let checkUser = await modelSequelize.nguoi_dung.findOne({
      where: {
        email,
      },
    });

    console.log("user", checkUser);
    if (!checkUser) {
      failCode(res, "Email khong ton tai");
    } else {
      let checkPassWord = bcrypt.compareSync(mat_khau, checkUser.mat_khau);
      checkPassWord
        ? successCode(res, "Login thanh cong", createToken(checkUser))
        : failCode(res, "Mat khau khong dung");
    }
  } catch (error) {
    errorCode(res, "Backend error");
  }
};

// GET thông tin user
const layThongTinUser = async (req, res) => {
  try {
    let { nguoi_dung_id } = req.body;

    let dataOne = await modelSequelize.nguoi_dung.findOne({
      where: {
        nguoi_dung_id: nguoi_dung_id,
      },
    });

    if (dataOne) {
      res.status(200).send(dataOne);
    } else {
      res.status(400).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// PUT thông tin cá nhân của user
const updateThongTinUser = async (req, res) => {
  try {
    let { nguoiDungID } = req.params;
    let dataOne = await modelSequelize.nguoi_dung.findOne({
      where: {
        nguoi_dung_id: nguoiDungID,
      },
    });

    if (dataOne) {
      let { email, mat_khau, ho_ten, tuoi } = req.body;
      let model = { email, mat_khau, ho_ten, tuoi };

      await modelSequelize.nguoi_dung.update(model, {
        where: {
          nguoi_dung_id: nguoiDungID,
        },
      });

      res.status(200).send("Update User thành công");
    } else {
      res.status(400).send("User không tồn tại");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
// POST thay đổi ảnh đại diện
const thayAnhDaiDien = async (req, res) => {
  let { nguoi_dung_id } = req.body;
  let model = {
    duong_dan: req.file.filename,
    nguoi_dung_id: parseInt(nguoi_dung_id),
  };
  try {
    await modelSequelize.hinh_anh.create(model);

    await modelSequelize.nguoi_dung.update(model, {
      where: {
        nguoi_dung_id: nguoi_dung_id,
      },
    });
    res.status(200).send("Thêm hình ảnh thành công");
  } catch {
    let fs = require("fs");
    fs.readFile(
      process.cwd() + "/public/img/" + req.file.filename,
      (err, data) => {
        let fileName = `"data:${req.file.mimetype};base64,${Buffer.from(
          data
        ).toString("base64")}"`;
        //xoa hình vừa up
        fs.unlinkSync(process.cwd() + "/public/img/" + req.file.filename);
        // res.send(fileName);
      }
    );
    res.status(200).send("Thêm hình ảnh bị lỗi");
  }
  res.status(400).send("Cập nhập ảnh đại diện");
};

module.exports = {
  signUp,
  login,
  layThongTinUser,
  updateThongTinUser,
  thayAnhDaiDien,
};
