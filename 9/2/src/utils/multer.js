import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/public');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

export const uploader = multer({ storage });
