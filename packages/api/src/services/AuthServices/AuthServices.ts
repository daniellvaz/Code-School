import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthDTO } from "./AuthDTO";
import { PrismaClient } from "@prisma/client";

interface Response {
  token: string;
  user: {
    id: string;
    name: string;
    lastName: string;
    age: number;
    email: string;
    image: string;
  };
}

export class AuthServices {
  constructor(private client: PrismaClient) {}

  async execute(data: AuthDTO): Promise<Response> {
    try {
      const user = await this.client.user.findUnique({
        where: {
          email: data.email,
        },
      });

      if (!user) {
        throw new Error("Check the information and try again.");
      }

      const compare = await bcrypt.compare(data.password, user.password);

      console.log(compare);

      if (!compare) {
        throw new Error("Check the information and try again.");
      }

      const token = jwt.sign("code", "code");

      return {
        token,
        user: {
          id: user.id,
          name: user.firstName,
          lastName: user.lastName,
          age: user.age,
          email: user.email,
          image: user.image,
        },
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
