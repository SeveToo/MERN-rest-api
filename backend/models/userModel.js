import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      min: [6, "Password must be at least 6 characters"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);