import { Post } from "../utils/models";
export const emeFunc = {
  emebedUser: async (postId, userId) => {
    return Post.findByIdAndUpdate(
      { _id: postId },
      {
        $set: {
          user: userId,
        },
      },
      { new: true, useFindAndModify: false }
    );
  },
  createComment: (postId, comment) => {
    return Post.findByIdAndUpdate(
      { _id: postId },
      {
        $push: {
          comments: comment,
        },
      },
      { new: true, useFindAndModify: false }
    );
  },
};
