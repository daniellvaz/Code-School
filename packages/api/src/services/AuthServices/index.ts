import { PrismaClient } from "@prisma/client";
import { AuthServices } from "./AuthServices";

const client = new PrismaClient();
const authServices = new AuthServices(client);

export default authServices;
