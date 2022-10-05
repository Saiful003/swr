import nc from "next-connect";
import dbConnect from "../../../../../lib/dbConnect";
import upload from "../../../../../config/multer";
import cloudinary from "../../../../../config/cloudinary";
import Friend from "../../../../../Model/friendsModel";
import { responseHandler } from "../../../../../utils/responseHandler";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(upload.single("file"))
  .put(async (req, res) => {
    const { body, file } = req;
    const { id } = req.query;
    // connect to database
    await dbConnect();

    // save image to cloudinary
    const { url } = await cloudinary.uploader.upload(
      `D:\\learn-supabase\\Next-Boilerplate\\public\\uploads\\${file.filename}`,
      { public_id: "friends" }
    );

    try {
      await Friend.findByIdAndUpdate(
        { _id: id },
        {
          ...body,
          image: {
            url,
          },
        },
        { new: true }
      );
      responseHandler({
        res,
        message: "Update Friend Successfull",
        code: 200,
      });
    } catch (err) {
      console.log(err);
      responseHandler({
        res,
        message: "Failed to update friend",
        code: 500,
      });
    }
  });

export default handler;
