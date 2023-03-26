// const User = require("../models/user");
const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const modelSequelize = initModels(sequelize);
const { Op } = require("sequelize");

// upload hinh anh
const uploadHinhAnh = (req, res) => {
  // try {
  // luu vao database
  let { ten_hinh, mo_ta, nguoi_dung_id } = req.body;

  let model = {
    ten_hinh,
    duong_dan: req.file.filename,
    mo_ta,
    nguoi_dung_id: parseInt(nguoi_dung_id),
  };

  modelSequelize.hinh_anh.create(model);

  // upload
  let fs = require("fs");
  fs.readFile(
    process.cwd() + "/public/img/" + req.file.filename,
    (err, data) => {
      let fileName = `"data:${req.file.mimetype};base64,${Buffer.from(
        data
      ).toString("base64")}"`;
      //xoa hình vừa up
      // fs.unlinkSync(process.cwd() + "/public/img/" + req.file.filename);

      // res.send(fileName);
    }
  );
  // res.send("Upload thanh cong");
  res.status(200).send("Thêm hình ảnh thành công");
  // } catch (error) {
  //   res.status(500).send("Backend error");
  // }
};
const layTatCaHinhAnh = async (req, res) => {
  // try {
  let dataAll = await modelSequelize.hinh_anh.findAll({
    include: ["nguoi_dung"],
  });

  res.status(200).send(dataAll);
  // } catch (error) {
  //   res.status(500).send("Backend error");
  // }
};
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
// POST Lưu ảnh
const luuAnh = async (req, res) => {
  try {
    let { nguoi_dung_id, hinh_anh_id } = req.body;
    let model = {
      nguoi_dung_id,
      hinh_anh_id,
      ngay_luu: new Date(),
    };

    modelSequelize.hinh_anh.create(model);
    res.status(200).send("Thêm hình ảnh thành công");
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const updateRestaurant = async (req, res) => {
  try {
    let { id } = req.params;
    let restaurantOne = await modelSequelize.restaurant.findOne({
      where: {
        res_id: id,
      },
    });

    if (restaurantOne) {
      let { res_name, image, desc } = req.body;
      let model = { res_name, image, desc };

      await modelSequelize.restaurant.update(model, {
        where: {
          res_id: id,
        },
      });

      res.status(200).send("Update Restaurant thành công");
    } else {
      res.status(400).send("Restaurant không tồn tại");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const deleteRestaurant = async (req, res) => {
  try {
    let { id } = req.params;

    let restaurantOne = await modelSequelize.restaurant.findOne({
      where: {
        res_id: id,
      },
    });

    if (restaurantOne) {
      await modelSequelize.restaurant.destroy({
        where: {
          res_id: id,
        },
      });

      res.status(200).send("Delete Restaurant thành công");
    } else {
      res.status(400).send("Restaurant không tồn tại");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

const getOneRestaurantAndUserLike = async (req, res) => {
  try {
    let { id } = req.params;

    let dataOne = await modelSequelize.restaurant.findOne({
      where: {
        res_id: id,
      },
    });

    if (dataOne) {
      res.status(200).send(dataOne);
    } else {
      res.status(400).send("Restaurant not found");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// GET xác định ảnh có lưu hay không
const trangThaiLuu = async (req, res) => {
  try {
    let { nguoi_dung_id, hinh_anh_id } = req.body;
    let dataExit = await modelSequelize.luu_anh.findAll({
      where: {
        nguoi_dung_id,
        hinh_anh_id,
      },
    });
    console.log(dataExit);
    dataExit.length != 0
      ? res.status(200).send("Save")
      : res.status(200).send("Unsave");
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// POST lưu hình ảnh
const luuHinhAnh = async (req, res) => {
  try {
    let { nguoi_dung_id, hinh_anh_id } = req.body;
    let model = {
      nguoi_dung_id,
      hinh_anh_id,
      ngay_luu: new Date(),
    };

    await modelSequelize.luu_anh.create(model);
    res.status(200).send("Lưu ảnh thành công");
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// DELETE bỏ lưu ảnh
const boLuuHinhAnh = async (req, res) => {
  try {
    let { nguoi_dung_id, hinh_anh_id } = req.body;

    let dataOne = await modelSequelize.luu_anh.findOne({
      where: {
        nguoi_dung_id,
        hinh_anh_id,
      },
    });

    if (dataOne) {
      await modelSequelize.luu_anh.destroy({
        where: {
          nguoi_dung_id,
          hinh_anh_id,
        },
      });
      res.status(200).send("Bỏ lưu ảnh thành công");
    } else {
      res.status(400).send("Hình ảnh này chưa lưu");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// GET danh sách ảnh đã lưu theo user id
const hinhAnhArr = async (req, res) => {
  try {
    let { nguoi_dung_id } = req.body;

    let dataAll = await modelSequelize.luu_anh.findAll({
      where: {
        nguoi_dung_id,
      },
      include: ["hinh_anh"],
      // include: ["hinh_anh", "nguoi_dung"],
    });
    if (dataAll.length != 0) {
      res.status(200).send(dataAll);
    } else {
      res.status(200).send("Ông này chưa lưu ảnh nào");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

module.exports = {
  luuHinhAnh,
  boLuuHinhAnh,
  trangThaiLuu,
  hinhAnhArr,
};
