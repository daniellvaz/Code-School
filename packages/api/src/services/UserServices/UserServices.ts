import bcrypt from "bcrypt";
import { UserDTO } from "./UserDTO";
import { User } from "../../entities/User";
import { PrismaClient } from "@prisma/client";

export class UserService {
  constructor(private client: PrismaClient) {}

  async findMany(): Promise<UserDTO[]> {
    try {
      const users = await this.client.user.findMany();

      return users;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async findOne(
    userId: string
  ): Promise<Omit<UserDTO, "password" | "passwordConfirmation"> | []> {
    try {
      const user = await this.client.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        return [];
      }

      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
        image: user.image,
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async create(user: UserDTO): Promise<UserDTO> {
    try {
      const userAlreadyExists = await this.client.user.findUnique({
        where: {
          email: user.email,
        },
      });

      if (!user || userAlreadyExists) {
        throw new Error("Check the information and try again!");
      }

      if (user.password !== user.passwordConfirmation) {
        throw new Error("Password confirmation dont match!");
      }

      const passHash = bcrypt.hashSync(user.password, 10);

      const newUser = new User({
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
        image: user.image,
        password: passHash,
        passwordConfirmation: passHash,
      });

      await this.client.user.create({ data: newUser });

      return newUser;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async update(
    userId: string,
    data: UserDTO
  ): Promise<Omit<UserDTO, "password" | "passwordConfirmation">> {
    try {
      const user = await this.client.user.update({
        where: { id: userId },
        data,
      });

      if (!user) {
        throw new Error(`User ${userId} does not exist!`);
      }

      return {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        email: data.email,
        image: data.image,
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const response = await this.client.user.delete({
        where: { id },
      });

      if (!response) {
        throw new Error(`Error deleting ${id}`);
      }

      return true;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
