const fs = require('fs');
const multer = require('multer');
const path = require('path');
const moment = require('moment');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '../../public/uploads/items');

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },

  filename: (req, file, cb) => {
    const originalName = file.originalname.replace(/ /g, '');
    const date = moment(new Date()).format('DDMMYYYYHHmmss');

    cb(null, `${date}-${originalName}`);
  },
});

const fileUpload = multer({ storage });

module.exports = fileUpload;
