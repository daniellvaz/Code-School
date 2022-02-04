import bcrypt from "bcrypt";
import { UserDTO } from "./UserDTO";
import { User } from "../../entities/User";
import { PrismaClient } from "@prisma/client";

export class UserService {
  constructor(private client: PrismaClient) {}

  async findMany(): Promise<Omit<UserDTO[], "password"> | Promise<UserDTO[]>> {
    try {
      const users = await this.client.user.findMany({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          active: true,
          password: false,
          birthday: true,
          permissionsId: true,
          email: true,
          phone: true,
          Addresses: true,
          image: true,
        },
      });

      return users;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async findOne(
    userId: string
  ): Promise<Omit<UserDTO, "password"> | Promise<UserDTO> | []> {
    try {
      const user = await this.client.user.findUnique({
        where: { id: userId },
        include: {
          permissions: true,
        },
      });

      if (!user) {
        return [];
      }

      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        active: user.active,
        permissionsId: user.permissions.description,
        birthday: user.birthday,
        email: user.email,
        phone: user.phone,
        password: user.permissions.fullPrivilegies ? user.password : null,
        image: user.image,
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async create(user: UserDTO): Promise<User> {
    try {
      const userAlreadyExists = await this.client.user.findUnique({
        where: {
          email: user.email,
        },
      });

      if (!user || userAlreadyExists) {
        throw new Error("Check the information and try again!");
      }

      const passHash = bcrypt.hashSync(user.password, 10);

      const newUser = new User({
        firstName: user.firstName,
        lastName: user.lastName,
        active: true,
        permissionsId: user.permissionsId,
        birthday: user.birthday,
        Addresses: [
          {
            id: "",
            address: "",
            addressTypeId: "",
            number: 0,
            zipCode: "",
            userId: "",
          },
        ],
        phone: user.phone,
        email: user.email,
        password: passHash,
        image: user.image,
      });

      console.log(newUser);

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
        active: data.active,
        permissionsId: data.permissionsId,
        birthday: data.birthday,
        email: data.email,
        phone: data.phone,
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
