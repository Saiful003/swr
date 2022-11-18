import mongoose from "mongoose";

export const connectToDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Database connected successfully!");
  } catch (e) {
    console.log("Database connection failed!", e.message);
  }
};

//To handle errors after initial connection was established
mongoose.connection.on("error", (err) => {
  console.log(err);
});
