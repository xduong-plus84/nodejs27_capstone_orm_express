const jwt = require("jsonwebtoken");

const secret_key_token_create = "something";
const secret_key_token_check = "something";

// tạo token
const createToken = (data) => {
  let token = jwt.sign({ content: data }, secret_key_token_create, {
    algorithm: "HS256",
    expiresIn: "1d",
  });
  return token;
};

// kiểm tra token
const checkToken = (token) => {
  let check = jwt.verify(token, secret_key_token_check);
  return check;
};

// verify token
const verifyToken = (req, res, next) => {
  try {
    // kiem tra token
    let { tokenUser } = req.headers;
    let kiemTraToken = checkToken(tokenUser.replace("Bearer ", ""));
    // let kiemTraToken = checkToken(tokencybersoft);
    if (kiemTraToken) {
      next();
    }
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = {
  createToken,
  checkToken,
  verifyToken,
};
