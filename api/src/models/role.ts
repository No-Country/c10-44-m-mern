import { Schema, } from "mongoose";
import db from "@/config/db";

export const roleSchema = new Schema({
  name: { type: String, unique: true, required: true },
  createdAt: Date,
});

export const roleModel = db.model("Role", roleSchema);
