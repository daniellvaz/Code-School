import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export default function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authorization = req.header("Authorization");

    if(!authorization) {
      throw new Error("Unautorized");
    }

    const [_, token] = authorization.split(" ")

    const decode = jwt.verify(token, process.env.SECRET);

    if (!decode) {
      throw new Error("Invalid token");
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: (error as Error).message });
  }
}
