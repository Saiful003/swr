import dbConnect from "../../../../lib/dbConnect";
import Friend from "../../../../Model/friendsModel";
import { responseHandler } from "../../../../utils/responseHandler";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export default async function handler(req, res) {
  const { id } = req.query;
  const { method, body } = req;

  // connect to database
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const singleFriend = await Friend.findOne({ _id: id });
        responseHandler({
          res,
          message: singleFriend,
          code: 200,
        });
      } catch {
        responseHandler({
          res,
          message: "Failed to get a friend",
          code: 500,
        });
      }
      break;

    case "PUT":
      try {
        await Friend.findByIdAndUpdate({ _id: id }, { ...body }, { new: true });
        responseHandler({
          res,
          message: "Update Friend Successfull",
          code: 200,
        });
      } catch {
        responseHandler({
          res,
          message: "Failed to update friend",
          code: 500,
        });
      }
      break;

    case "DELETE":
      try {
        const { deletedCount } = await Friend.deleteOne({ _id: id });
        //  ====> validation
        if (!deletedCount)
          return responseHandler({
            res,
            message: "Friend not found",
            code: 500,
          });

        //  ====> validation

        responseHandler({
          res,
          message: "Delete Friend Successfull",
          code: 200,
        });
      } catch {
        responseHandler({
          res,
          message: "Failed to delete friend",
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
