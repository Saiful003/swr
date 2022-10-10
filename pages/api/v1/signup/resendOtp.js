import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../Model/userModel";
import { responseHandler } from "../../../../utils/responseHandler";
import bcrypt from "bcrypt";
import { sendOtpViaMail } from "../../../../lib/sendOtpMail";
import { generateOtp } from "../../../../utils/generateOtp";

export default async function handler(req, res) {
  const { method, body } = req;

  // connect to database
  await dbConnect();

  if (method === "POST") {
    const { email } = body;

    try {
      // ====> validation start
      if (!email) {
        return responseHandler({
          res,
          message: "Please given necessary data",
          code: 500,
        });
      }

      const user = await User.findOne({ email, isVerifiedUser: false });

      if (!user) {
        return responseHandler({
          res,
          message: "User not found",
          code: 500,
        });
      }
      // ====> validation end

      // OTP resend workflow

      // create a new OTP
      const otp = generateOtp();

      // hashed this otp
      const hashedOtp = await bcrypt.hash(otp.toString(), 10);

      // update user with this otp
      await User.updateOne(
        { email },
        { $set: { otp: { otpcode: hashedOtp, expiresIn: Date.now() + 30000 } } }
      );

      // send otp via mail
      await sendOtpViaMail(email, otp);

      responseHandler({
        res,
        message: `Resend new otp successfully ${otp} `,
        code: 200,
      });
      // General work flow end
    } catch (err) {
      responseHandler({
        res,
        message: "OTP Resend Failed",
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
