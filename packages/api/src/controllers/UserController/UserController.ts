import { Request, Response } from "express";
import { UserService } from "../../services/UserServices/UserServices";

export class UserController {
  constructor(private userService: UserService) {}

  async findMany(req: Request, res: Response): Promise<Response> {
    try {
      const response = await this.userService.findMany();

      return res.status(200).json({ message: "Ok", users: response });
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const response = await this.userService.findOne(id);

      return res.status(200).json({ message: "Ok", user: response });
    } catch (error) {}
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const user = req.body;

      const { firstName, lastName, email } = await this.userService.create(
        user
      );

      return res
        .status(201)
        .json({ message: "Ok", user: { firstName, lastName, email } });
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const user = req.body;
      const { id } = req.params;

      const response = await this.userService.update(id, user);

      return res.status(201).json({ message: "ok", user: response });
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      await this.userService.delete(id);

      res.status(200).json({ message: "ok" });
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}
