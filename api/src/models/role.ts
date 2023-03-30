import { Schema, } from "mongoose";
import db from "@/config/db";

export const RoleDocument = new Schema({
  name: { type: String, unique: true, required: true },
  createdAt: Date,
});

export const Role = db.model("Role", RoleDocument);
