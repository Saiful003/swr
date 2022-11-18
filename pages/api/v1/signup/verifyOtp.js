import { User } from "../../../../utils/models";
import { responseHandler } from "../../../../utils/responseHandler";
import bcrypt from "bcrypt";
import dbConnect from "../../../../lib/dbConnect";

export default async function handler(req, res) {
  const { method, body } = req;

  // connect to database
  await dbConnect();

  if (method === "POST") {
    const { email, otp } = body;

    try {
      // ====> validation start

      if (!email || !otp) {
        return responseHandler({
          res,
          message: "Please given necessary data",
          code: 500,
        });
      }

      const user = await User.findOne({ email, isVerifiedUser: false });
      const {
        otp: { otpcode, expiresIn },
      } = user;

      const isValidOtp = await bcrypt.compare(otp, otpcode);

      if (!isValidOtp || Date.now() > expiresIn) {
        return responseHandler({
          res,
          message: "Invalid OTP",
          code: 500,
        });
      }

      // ====> validation end

      // General work flow start

      await User.updateOne(
        { email, isVerifiedUser: false },
        { $set: { isVerifiedUser: true } }
      );
      responseHandler({
        res,
        message: "User (verified) Created Successfully",
        code: 200,
      });

      // General work flow end
    } catch (err) {
      responseHandler({
        res,
        message: "OTP Vailidation Failed",
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
