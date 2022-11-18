import mongoose from "mongoose";
const { Schema } = mongoose;
const postSchema = new Schema(
  {
    title: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
    },
    comments: [],
  },
  { timestamps: true }
);
export default mongoose.models.Post || mongoose.model("Post", postSchema);
