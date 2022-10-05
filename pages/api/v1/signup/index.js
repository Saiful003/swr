import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../Model/userModel";
import { responseHandler } from "../../../../utils/responseHandler";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const { method, body } = req;

  // connect to database
  await dbConnect();

  if (method === "POST") {
    const { firstname, lastname, email, password, confirmPassword } = body;

    // ====> validation
    if (password !== confirmPassword)
      return responseHandler({
        res,
        message: "Password and Confirm Did not match!",
        code: 500,
      });
    // ====> validation

    try {
      // encrypt password
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        firstname,
        lastname,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      responseHandler({
        res,
        message: "User Created Successfully",
        code: 200,
      });
    } catch (err) {
      responseHandler({
        res,
        message: "User Created Failed",
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
