import { Schema, model } from "mongoose"

export const roleSchema = new Schema({
  name: String,
  createdAt: Date,
})

export const roleModel = model('Role', roleSchema)
