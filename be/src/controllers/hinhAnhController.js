// const User = require("../models/user");
const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const modelSequelize = initModels(sequelize);
const { Op } = require("sequelize");

const uploadHinhAnh = async (req, res) => {
  try {
    // luu vao database
    let { ten_hinh, mo_ta, nguoi_dung_id } = req.body;

    let model = {
      ten_hinh,
      duong_dan: req.file.filename,
      mo_ta,
      nguoi_dung_id: parseInt(nguoi_dung_id),
    };
    try {
      await modelSequelize.hinh_anh.create(model);
      res.status(200).send("Thêm hình ảnh thành công");
    } catch {
      let fs = require("fs");
      fs.readFile(
        process.cwd() + "/public/img/" + req.file.filename,
        (err, data) => {
          let fileName = `"data:${req.file.mimetype};base64,${Buffer.from(
            data
          ).toString("base64")}"`;
          fs.unlinkSync(process.cwd() + "/public/img/" + req.file.filename);
        }
      );
      res.status(200).send("Thêm hình ảnh bị lỗi");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// GET danh sách ảnh về
const layTatCaHinhAnh = async (req, res) => {
  try {
    let dataAll = await modelSequelize.hinh_anh.findAll({
      include: ["nguoi_dung"],
    });

    res.status(200).send(dataAll);
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// GET tìm kiếm danh sánh ảnh theo tên
const timHinhAnh = async (req, res) => {
  try {
    let { tenHinh } = req.query;
    console.log(tenHinh);
    let dataAll = await modelSequelize.hinh_anh.findAll({
      where: {
        ten_hinh: { [Op.like]: `%${tenHinh}%` },
      },
      include: ["nguoi_dung"],
    });

    res.status(200).send(dataAll);
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// GET thông tin ảnh và người tạo ảnh bằng id ảnh
const getHinhAnhOne = async (req, res) => {
  try {
    let { hinhAnhID } = req.params;

    let dataOne = await modelSequelize.hinh_anh.findOne({
      where: {
        hinh_anh_id: hinhAnhID,
      },
      include: ["nguoi_dung"],
    });

    if (dataOne) {
      res.status(200).send(dataOne);
    } else {
      res.status(400).send("Not found");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// GET danh sách ảnh đã tạo theo user
const layHinhAnhTao = async (req, res) => {
  try {
    let { nguoi_dung_id } = req.body;

    let dataArr = await modelSequelize.hinh_anh.findAll({
      where: {
        nguoi_dung_id,
      },
    });

    if (dataArr) {
      res.status(200).send(dataArr);
    } else {
      res.status(400).send("Not found");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// DELETE xóa hình ảnh đã tạo theo id ảnh
const xoaHinhAnh = async (req, res) => {
  try {
    let { hinhAnhID } = req.params;
    console.log(hinhAnhID);

    let dataOne = await modelSequelize.hinh_anh.findOne({
      where: {
        hinh_anh_id: hinhAnhID,
      },
    });
    if (dataOne) {
      await modelSequelize.hinh_anh.destroy({
        where: {
          hinh_anh_id: hinhAnhID,
        },
      });
      let fs = require("fs");
      fs.readFile(
        process.cwd() + "/public/img/" + dataOne.dataValues.duong_dan,
        (err, data) => {
          fs.unlinkSync(
            process.cwd() + "/public/img/" + dataOne.dataValues.duong_dan
          );
        }
      );

      res.status(200).send("Xóa hình ảnh thành công");
    } else {
      res.status(400).send("Hình ảnh không tồn tại");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

module.exports = {
  uploadHinhAnh,
  layTatCaHinhAnh,
  timHinhAnh,
  getHinhAnhOne,
  layHinhAnhTao,
  xoaHinhAnh,
};
