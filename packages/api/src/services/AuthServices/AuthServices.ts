import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthDTO } from "./AuthDTO";
import { PrismaClient } from "@prisma/client";
import { User } from "../../entities/User";

interface Response {
  token: string;
  user: User | Omit<User, "password">;
}

export class AuthServices {
  constructor(private client: PrismaClient) {}

  async execute(data: AuthDTO): Promise<Response> {
    try {
      const user = await this.client.user.findUnique({
        where: {
          email: data.email,
        },
        include: {
          Permissions: true,
          Addresses: true,
        },
      });

      if (!user) {
        throw new Error("Check the information and try again.");
      }

      const compare = await bcrypt.compare(data.password, user.password);

      if (!compare) {
        throw new Error("Check the information and try again.");
      }

      const token = jwt.sign("code", "code");

      return {
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          active: user.active,
          permissionsId: user.Permissions.description,
          birthday: user.birthday,
          password:
            user.Permissions.fullPrivilegies ||
            user.Permissions.description === "can_see_password"
              ? user.password
              : null,
          email: user.email,
          phone: user.phone,
          Addresses: user.Addresses,
          image: user.image,
        },
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
