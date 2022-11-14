import { Router } from "express";
import authController from "../controllers/AuthController";

const authRouter = Router();

authRouter.post("/", (req, res) => authController.authenticate(req, res));

export default authRouter;
