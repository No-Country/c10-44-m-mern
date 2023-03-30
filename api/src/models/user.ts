import { Schema } from "mongoose";
import db from "@/config/db";

export const User = new Schema({
  email: { type: String, unique: true, required: true },
  passwordHash: String,
  displayName: { type: String, required: true },
  firstName: String,
  lastName: String,
  isPremium: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

export const UserModel = db.model("User", User);
