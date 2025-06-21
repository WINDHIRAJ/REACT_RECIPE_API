import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gmail: { 
    type: String, 
    required: true, 
    unique: true,          // <-- Add this to enforce uniqueness
    lowercase: true,       // optional but recommended for consistent email storage
    trim: true             // optional, removes leading/trailing spaces
  },
  password: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);
