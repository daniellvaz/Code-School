import bcrypt from "bcrypt";
import { UserDTO } from "./UserDTO";
import { User } from "../../entities/User";
import { PrismaClient } from "@prisma/client";
import { AddressService } from "../AddressServices/AddressServices";

export class UserService {
  constructor(private client: PrismaClient, public address: AddressService) {}

  async findMany(): Promise<Omit<UserDTO[], "password"> | Promise<UserDTO[]>> {
    try {
      const response = await this.client.user.findMany({
        include: {
          AddressesOnUsers: {
            include: {
              address: {
                include: { AddressType: { select: { description: true } } },
              },
            },
          },
          Permissions: true,
        },
        where: {
          active: true,
        },
      });

      const users = response.map((item) => {
        return {
          id: item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          password: item.password,
          active: true,
          permissionsId: item.permissionsId,
          birthday: item.birthday,
          email: item.email,
          phone: item.phone,
          addresses: item.AddressesOnUsers.map(({ address }) => {
            return address;
          }),
          image: item.image,
        };
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
        where: {
          id: userId,
        },
        include: {
          AddressesOnUsers: {
            include: {
              address: {
                include: { AddressType: { select: { description: true } } },
              },
            },
          },
          Permissions: true,
        },
      });

      if (!user || !user.active) {
        return [];
      }

      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.Permissions.fullPrivilegies ? user.password : null,
        active: user.active,
        permissionsId: user.Permissions.description,
        birthday: user.birthday,
        email: user.email,
        phone: user.phone,
        addresses: user.AddressesOnUsers.map(({ address }) => {
          return address;
        }),
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
      const addresses = await this.address.findManyByZipCode(user.addresses);

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
        phone: user.phone,
        email: user.email,
        password: passHash,
        image: user.image,
      });

      console.log(addresses);

      if (!addresses) {
        await this.address.create(user.addresses, newUser.id);
      }

      const addressOnUser = addresses.map((address) => {
        return {
          userId: newUser.id,
          addressesId: address.id,
        };
      });

      await this.client.addressesOnUsers.createMany({
        data: addressOnUser,
      });
      await this.client.user.create({
        data: {
          id: newUser.id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          active: newUser.active,
          birthday: newUser.birthday,
          email: newUser.email,
          phone: newUser.phone,
          password: newUser.password,
          permissionsId: newUser.permissionsId,
          image: newUser.image,
        },
      });

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
      const response = await this.client.user.update({
        data: {
          active: false,
        },
        where: {
          id,
        },
      });

      if (!response) {
        throw new Error(`Error deleting ${id}`);
      }

      return true;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async findWhenIsDeleted(): Promise<UserDTO[]> {
    try {
      console.log("teste");
      const users = await this.client.user.findMany({
        where: {
          active: false,
        },
      });

      return users;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
