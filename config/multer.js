import multer from "multer";
import path from "path";

//file upload with multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "public", "uploads"));
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname);
    const fileName = file.originalname.replace(fileExt, "").toLowerCase();
    cb(null, fileName + fileExt);
  },
});

const upload = multer({ storage: storage });
export default upload;
