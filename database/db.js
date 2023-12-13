import mongoose from "mongoose";
import { config } from "dotenv";
config();

const MONGODB_URL = process.env.MONGODB_URL;

export async function connect() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}
