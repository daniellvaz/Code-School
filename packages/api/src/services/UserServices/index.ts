import { PrismaClient } from "@prisma/client";
import { UserService } from "./UserServices";

const client = new PrismaClient();
const userService = new UserService(client);

export default userService;
