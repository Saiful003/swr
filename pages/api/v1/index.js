import { responseHandler } from "../../../utils/responseHandler";
import { Post } from "../../../utils/models";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  const { method } = req;
  // connect to database
  await dbConnect();

  if (method === "GET") {
    const posts = await Post.find({});

    try {
      responseHandler({
        res,
        message: posts,
        code: 200,
      });
    } catch (err) {
      responseHandler({
        res,
        message: "",
        code: 500,
      });
    }
  } else {
    responseHandler({
      res,
      message: "Incorrect HTTTP Request",
      code: 500,
    });
  }
}
