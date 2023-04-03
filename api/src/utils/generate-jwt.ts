import jwt from "jsonwebtoken";
import { IUser } from "../models/user";

export default function generateJWT(user: IUser) {
  return jwt.sign(
    {
      user
    },
    process.env.AUTH_JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
}