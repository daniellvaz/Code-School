import { AuthController } from "./AuthController";
import authServices from "../../services/AuthServices";

const authController = new AuthController(authServices);

export default authController;
