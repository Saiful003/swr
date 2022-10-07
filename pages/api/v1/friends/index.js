import dbConnect from "../../../../lib/dbConnect";
import Friend from "../../../../Model/friendsModel";
import { responseHandler } from "../../../../utils/responseHandler";
import { authOptions } from "../../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  const { method, query } = req;
  // connect to database
  await dbConnect();

  if (method === "GET") {
    try {
      // paginate logic
      // page 1 ===> limit 2 , content 1-2 , skip = 0;
      // page 2 ===> limit 2 , content 3-4 , skip = 2;
      // page 3 ===> limit 2 , content 5-6 , skip = 4;
      // page 4 ===> limit 2 , content 7-8 , skip = 6;
      // page 5 ===> limit 2 , content 9-10 , skip = 8;
      // number of friends = 6

      // const limit = req.query.limit * 1 ?? 8;
      // const pageNumber = req.query.page * 1 ?? 1;
      // const skip = (pageNumber - 1) * limit;

      // if (req.query.limit && req.query.page) {
      //   const totalFriends = await Friend.countDocuments();
      //   // do pagination stuff ..
      //   if (skip >= totalFriends) {
      //     return;
      //   }
      // }

      const allFriends = await Friend.find({
        user_id: session.user.user_id,
        gender: query.gender,
      });

      responseHandler({
        res,
        message: allFriends,
        code: 200,
      });
    } catch (err) {
      // console.log(err);
      responseHandler({
        res,
        message: "Failed to get all friends",
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
