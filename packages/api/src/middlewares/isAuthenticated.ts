import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.header("Authorization");

    const decode = jwt.verify(token, "code");

    if (!decode) {
      throw new Error("Invalid token");
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: (error as Error).message });
  }
}
