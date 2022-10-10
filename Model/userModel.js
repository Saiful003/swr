import mongoose, { modelNames } from "mongoose";
const { Schema } = mongoose;

const otpSchema = new Schema(
  {
    otpcode: {
      type: String,
      required: true,
    },
    expiresIn: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    isVerifiedUser: { type: Boolean, required: true, default: false },
    otp: otpSchema,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
