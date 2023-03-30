import { Schema, model } from 'mongoose'

export const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  passwordHash: String,
  displayName: { type: String, required: true },
  firstName: String,
  lastName: String,
  isPremium: Boolean,
  createdAt: Date,
  updatedAt: Date,
})

export const userModel = model('User', userSchema)
