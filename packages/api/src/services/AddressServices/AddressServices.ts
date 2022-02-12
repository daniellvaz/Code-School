import { v4 as uuid } from "uuid";
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
            user_id: userId,
            address_id: newAddress.id,
          },
        });

        newAddresses.push(newAddress);
      }

      return newAddresses;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async update(addresses: AddressDTO[], userId: string): Promise<AddressDTO[]> {
    if (addresses.length <= 0) {
      console.log("aqui");

      const currentAddress = await this.client.addressesOnUsers.findMany({
        include: {
          address: {
            include: {
              user: {
                where: {
                  id: userId,
                },
              },
              AddressType: true,
            },
          },
        },
        where: {
          user_id: userId,
        },
      });

      const address = currentAddress.map(({ address: addresses }) => {
        return {
          id: addresses.id,
          address: addresses.address,
          number: addresses.number,
          zipCode: addresses.zipCode,
          addressTypeId: addresses.AddressType.description,
        };
      });

      return address;
    }

    try {
      let newAddresses: AddressDTO[] = [];

      for await (const address of addresses) {
        const result = await this.client.addresses.upsert({
          where: { id: address.id, zipCode: address.zipCode },
          update: address,
          create: {
            id: uuid(),
            address: address.address,
            number: address.number,
            zipCode: address.zipCode,
            addressTypeId: address.addressTypeId,
          },
        });

        await this.client.addressesOnUsers.create({
          data: {
            address_id: result.id,
            user_id: userId,
          },
        });

        newAddresses.push(result);
      }

      return newAddresses;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
