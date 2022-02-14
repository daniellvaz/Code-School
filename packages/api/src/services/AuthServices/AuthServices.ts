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
          AddressesOnUsers: { include: { address: true } },
          Permissions: true,
        },
      });

      if (!user || !user.active) {
        throw new Error("Check the information and try again.");
      }

      const compare = await bcrypt.compare(data.password, user.password);

      if (!compare) {
        throw new Error("Check the information and try again.");
      }

      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        process.env.SECRET
      );

      return {
        token,
        user,
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
