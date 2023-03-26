const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `${process.cwd()}/public/img`);
  },
  filename: (req, file, callback) => {
    const date = new Date();
    const newName = date.getTime() + "_" + file.originalname;
    callback(null, newName);
  },
});

const upload = multer({ storage });

const typeFileUpload = upload.single("file");

module.exports = typeFileUpload;
