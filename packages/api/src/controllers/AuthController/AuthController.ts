import { Request, Response } from "express";
import { AuthServices } from "../../services/AuthServices/AuthServices";

export class AuthController {
  constructor(private authServices: AuthServices) {}

  async authenticate(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const response = await this.authServices.execute({ email, password });

      return res.status(200).json({ message: "ok", data: response });
    } catch (error) {
      return res.status(401).json({ message: (error as Error).message });
    }
  }
}
