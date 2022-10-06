import mongoose from "mongoose";

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log("Usign Existing mongoose connection");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    const password = process.env.DATABASE_PASSWORD;

    cached.promise = mongoose
      .connect(
        `mongodb+srv://saiful003:${password}@fms.mtgpkxl.mongodb.net/?retryWrites=true&w=majority`,
        opts
      )
      .then((mongoose) => {
        console.log("Database connection successfully done!");
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    console.log("Database connection failed");
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
