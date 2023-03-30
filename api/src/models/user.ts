import { Model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import db from "@/config/db";

/**
 * Interface to model the User Schema
 */
interface IUser {
  email: string;
  passwordHash: string;
  displayName: string;
  firstName: string;
  lastName: string;
  isPremium: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Interface to model the methods of the User Schema
 */
interface IUserMethods {
  validatePassword: (candidatePassword: string) => Promise<boolean>;
}

/**
 * The return type of the User model
 */
type UserModel = Model<IUser, {}, IUserMethods>;

export const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  email: { type: String, unique: true, required: true },
  passwordHash: String,
  displayName: { type: String, required: true },
  firstName: String,
  lastName: String,
  isPremium: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

// Hash user password before saving to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("passwordHash")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.passwordHash = await bcrypt.hash(this.passwordHash!, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// To compare incoming password with the hashed password in the database
userSchema.method('validatePassword', async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.passwordHash);
});

export const User = db.model<IUser, UserModel>("User", userSchema);
