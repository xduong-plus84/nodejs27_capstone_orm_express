const express = require("express");

const app = express();

app.use(express.json()); // cho phép server backend đọc được chuỗi json ~ middleware

app.use(express.static(".")); // định vị nơi đang đứng

const cors = require("cors"); //cấp phép cho front end truy cập server API BE
app.use(cors());

const port = 8080;

const rootRoute = require("./routes/rootRoute");
app.use("/api", rootRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
