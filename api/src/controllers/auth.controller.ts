import { Request, Response } from "express";
import { create as createUser } from "../services/users.service";
import { IUser } from "../models/user";
import generateJWT from "../utils/generate-jwt";

/**
 * Creates a new user and returns the user and a signed JWT
 * @param req Contains the body of the request
 * @param res Contains the response to the request
 */
export const signUp = async (req: Request, res: Response) => {
  try {
    const bodyUser: IUser = {
      ...req.body,
      passwordHash: req.body.password,
    };

    const newUser = await createUser(bodyUser);
    newUser.removePassword()

    const jwt = generateJWT(newUser);

    res.status(201).json({ user: newUser, token: jwt });
  } catch (error) {
    res.status(400).json({
      errors: [
        {
          code: error.code,
          message: error.message,
        },
      ],
    });
  }
};
