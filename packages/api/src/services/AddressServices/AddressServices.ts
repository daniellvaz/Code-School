import { PrismaClient } from "@prisma/client";
import { Addresses } from "../../entities/Addresses";
import { AddressDTO } from "./AddressDTO";

export class AddressService {
  constructor(private client: PrismaClient) {}

  async findManyByZipCode(zipCode: AddressDTO[]): Promise<AddressDTO[]> {
    try {
      const addresses = this.client.addresses.findMany({
        where: {
          zipCode: {
            in: zipCode.map((item) => {
              return item.zipCode;
            }),
          },
        },
      });

      return addresses;
    } catch (error) {
      console.log(error);
    }
  }

  async create(addresses: AddressDTO[], userId: string): Promise<AddressDTO[]> {
    try {
      const newAddresses = await Promise.all(
        addresses.map(async (address) => {
          const newAddress = new Addresses(address);

          await this.client.addressesOnUsers.create({
            data: {
              userId,
              addressesId: newAddress.id,
            },
          });
          return newAddress;
        })
      );

      await this.client.addresses.createMany({ data: newAddresses });
      return newAddresses;
    } catch (error) {}
  }
}
