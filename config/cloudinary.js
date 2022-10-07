import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// file upload core function
// we do not use this because this only upload the image cloudinary
export const cloudinaryUpload = (file) => cloudinary.uploader.upload(file);
