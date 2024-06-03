import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI || "your_mongodb_connection_string";
const MONGODB_URI =
  "mongodb+srv://sanbedan:P14vaXVvwEw9p2N5@landing.uixmtmu.mongodb.net/?retryWrites=true&w=majority&appName=landing";
// P14vaXVvwEw9p2N5
// sanbedan

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
