// 200
const successCode = (res, message, data) => {
  res.status(200).json({
    message,
    content: data,
  });
};

//400
const failCode = (res, message) => {
  res.status(400).json({
    message,
  });
};

//500
const errorCode = (res, message) => {
  res.status(500).json({
    message,
  });
};

module.exports = {
  successCode,
  failCode,
  errorCode,
};
