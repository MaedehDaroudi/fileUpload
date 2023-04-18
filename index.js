let app = express();
let upload = multer();
let _fs = require("fs");
let multer = require("multer");
let express = require("express");
let bodyParser = require("body-parser");
const res = require("express/lib/response");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  console.log("connect");
  res.send("wellcom");
});

app.post("/api/files", upload.any(), function (req, res) {
  let i = 0;
  let files = req.files;
  let allFieldname = [];
  let allBody = req.body;
  let allOriginalname = {};
  if (files) {
    files.forEach(function (file) {
      allFieldname[i] = { name: file.fieldname, maxCount: 1 };
      allOriginalname[i] = file.originalname;
      i++;
    });
  }

  console.log("allFieldname=>", allFieldname);
  console.log("alloriginalname=>", allOriginalname);
  console.log("body=>", allBody);
  res.send("end");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
