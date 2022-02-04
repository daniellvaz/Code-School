import { PrismaClient } from "@prisma/client";
import addressService from "../AddressServices";
import { UserService } from "./UserServices";

const client = new PrismaClient();
const userService = new UserService(client, addressService);

export default userService;
