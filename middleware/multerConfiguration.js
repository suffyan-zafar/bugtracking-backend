const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("in storage destination");
    const destinationPath = path.join(__dirname, '../images/');
    console.log(destinationPath);
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now().toString() + " - " + file.originalname)
  }
});

const filterFile = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  }
  else {
    cb(new Error("PLease upload jpeg/png files"), false);
  }

}
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024, },
  fileFilter: filterFile
})

module.exports = upload;