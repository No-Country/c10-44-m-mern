import { Schema, } from "mongoose";
import db from "@/config/db";

export const Role = new Schema({
  name: { type: String, unique: true, required: true },
  createdAt: Date,
});

export const RoleModel = db.model("Role", Role);
