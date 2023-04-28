import { resolve } from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, resolve('src/public'));
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

export const uploader = multer({ storage });
