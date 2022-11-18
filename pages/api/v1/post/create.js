import dbConnect from "../../../../lib/dbConnect";
import { Post } from "../../../../utils/models";
import { responseHandler } from "../../../../utils/responseHandler";
import { emeFunc } from "../../../../utils/Emebedding";
import { authOptions } from "../../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
const { emebedUser } = emeFunc;

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const { title } = req.body;
  const { method } = req;

  // we will use nextauth server instance to retrive session obj
  // connect to database
  await dbConnect();

  if (method === "POST") {
    try {
      // validation
      if (!title) {
        return responseHandler({
          res,
          message: "Please fill first input field",
          code: 500,
        });
      }

      const newPost = new Post({ title });
      const post = await newPost.save();

      // emebedding stuff start

      // emebed user id to specific post
      await emebedUser(post._id, session?.user?.userId);
      // emebedding stuff end

      responseHandler({
        res,
        message: "Post created Suceessfull",
        code: 200,
      });
    } catch (err) {
      console.log(err);
      responseHandler({
        res,
        message: "There was an error",
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
