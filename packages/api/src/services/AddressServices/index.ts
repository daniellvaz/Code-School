import { PrismaClient } from "@prisma/client";
import { AddressService } from "./AddressServices";

const client = new PrismaClient();
const addressService = new AddressService(client);

export default addressService;
