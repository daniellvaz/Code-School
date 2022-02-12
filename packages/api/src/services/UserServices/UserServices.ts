import bcrypt from "bcrypt";
import { UserDTO } from "./UserDTO";
import { User } from "../../entities/User";
import { PrismaClient } from "@prisma/client";
import { AddressService } from "../AddressServices/AddressServices";

export class UserService {
  constructor(private client: PrismaClient, public address: AddressService) {}

  /**
   * Method to return many Users
   * @return {Array}
   */
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

  /**
   * Method to return on User
   * @param  userId {string}
   * @return {Array}
   */
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

  /**
   * Method to create an User
   * @param  user {UserDTO}
   * @return {Promise<UserDTO>}
   */
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
        image: user.image
          ? user.image
          : `https://ui-avatars.com/api/?name=${user.firstName}}&background=B83280&color=fff&size=400`,
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

      if (!addresses) {
        await this.address.create(user.addresses, newUser.id);

        return newUser;
      }

      const addressOnUser = addresses.map((address) => {
        return {
          user_id: newUser.id,
          address_id: address.id,
        };
      });

      await this.client.addressesOnUsers.createMany({
        data: addressOnUser,
      });

      return newUser;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Method to update an user
   * @param  userId  {string}
   * @param  data    {UserDTO}
   * @return {UserDTO}
   */
  async update(userId: string, data: UserDTO): Promise<{ message: string }> {
    try {
      const currentUserData = await this.client.user.findUnique({
        where: { id: userId },
        include: {
          Addresses: true,
        },
      });

      const passHash = data.password
        ? bcrypt.hashSync(data.password, 10)
        : null;

      const user = await this.client.user.update({
        where: { id: userId },
        data: {
          firstName: data.firstName
            ? data.firstName
            : currentUserData.firstName,
          lastName: data.lastName ? data.lastName : currentUserData.lastName,
          birthday: data.birthday ? data.birthday : currentUserData.birthday,
          active: data.active ? data.active : currentUserData.active,
          email: data.email ? data.email : currentUserData.email,
          phone: data.phone ? data.phone : currentUserData.phone,
          image: data.image ? data.image : currentUserData.image,
          password: data.password ? passHash : currentUserData.password,
        },
        include: { Addresses: true },
      });

      const addresses = data.addresses
        ? await this.address.update(data.addresses, user.id)
        : null;

      if (!user) {
        throw new Error(`User ${userId} does not exist!`);
      }

      return { message: "ok" };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Method to delete an user
   * @param  id {string}
   * @return {boolean}
   */
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

  /**
   * Method to retun an deleted user
   * @return {UserDTO[]}
   */
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
