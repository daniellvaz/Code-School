import { UserController } from "./UserController";
import userService from "../../services/UserServices";

const userController = new UserController(userService);

export default userController;
