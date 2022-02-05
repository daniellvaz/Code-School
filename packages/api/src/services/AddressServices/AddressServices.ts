import { PrismaClient } from "@prisma/client";
import { Addresses } from "../../entities/Addresses";
import { AddressDTO } from "./AddressDTO";

export class AddressService {
  constructor(private client: PrismaClient) {}

  async findManyByZipCode(zipCode: AddressDTO[]): Promise<AddressDTO[]> {
    try {
      const addresses = await this.client.addresses.findMany({
        where: {
          zipCode: {
            in: zipCode.map((item) => {
              return item.zipCode;
            }),
          },
        },
      });

      if (addresses.length <= 0) {
        return null;
      }

      return addresses;
    } catch (error) {
      console.log(error);
    }
  }

  async create(addresses: AddressDTO[], userId: string): Promise<AddressDTO[]> {
    try {
      let newAddresses: Addresses[] = [];

      for await (const address of addresses) {
        const newAddress = new Addresses(address);

        await this.client.addresses.create({ data: newAddress });
        await this.client.addressesOnUsers.create({
          data: {
            addressesId: newAddress.id,
            userId,
          },
        });

        newAddresses.push(newAddress);
      }

      return newAddresses;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
