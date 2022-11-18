import dbConnect from "../../../../lib/dbConnect";
import { Post } from "../../../../utils/models";
import { responseHandler } from "../../../../utils/responseHandler";
import { unstable_getServerSession } from "next-auth";
import { emeFunc } from "../../../../utils/Emebedding";
import { authOptions } from "../../auth/[...nextauth]";
const { createComment } = emeFunc;

export default async function handler(req, res) {
  const { method, query } = req;
  const { id } = query;
  const session = await unstable_getServerSession(req, res, authOptions);

  // connect to database
  await dbConnect();

  switch (method) {
    case "DELETE": {
      try {
        await Post.deleteOne({ _id: id });
        responseHandler({
          res,
          message: "Successfully Deleted",
          code: 500,
        });
      } catch {
        responseHandler({
          res,
          message: "Error",
          code: 500,
        });
      }
    }
    case "GET":
      try {
        // ==> validation start
        const post = await Post.findOne({ _id: id });
        if (!post) {
          return responseHandler({
            res,
            message: "founded no post with this post id",
            code: 200,
          });
        }
        // ==> validation end
        // ==> General workflow start
        responseHandler({
          res,
          message: post,
          code: 200,
        });
        // ==> General workflow end
      } catch {
        responseHandler({
          res,
          message: "Failed to get post",
          code: 500,
        });
      }
      break;
    case "PUT":
      const { comment } = req.body;
      try {
        // ==> validation start
        if (!comment) {
          return responseHandler({
            res,
            message: "Please input comment",
            code: 500,
          });
        }
        // ==> validation end

        // ==> General workflow start

        // create comments

        await createComment(id, {
          comment,
          username: session?.user?.name,
        });
        responseHandler({
          res,
          message: "",
          code: 200,
        });
        // ==> General workflow end
      } catch {
        responseHandler({
          res,
          message: "Failed to update post with comments",
          code: 500,
        });
      }
      break;
    default:
      responseHandler({
        res,
        message: "Incorrect HTTTP Request",
        code: 500,
      });
      break;
  }
}
