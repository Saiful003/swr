import mongoose, { modelNames } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    isVerifiedUser: { type: Boolean, required: true, default: false },
    otp: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
