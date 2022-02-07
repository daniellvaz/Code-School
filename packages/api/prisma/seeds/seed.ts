import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  try {
    const pass = bcrypt.hashSync("123456", 10);

    /**
     * Creating Data
     */
    const Permissions = {
      id: uuid(),
      description: "Administrator",
      active: true,
      fullPrivilegies: true,
    };

    const Administrator = {
      id: uuid(),
      firstName: "Code",
      lastName: "school",
      active: true,
      permissionsId: Permissions.id,
      birthday: "10/07/1992",
      phone: "3333-3333",
      email: "adm.contato@codeschool.com.br",
      password: pass,
      image: `https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=Platinum&clotheType=ShirtCrewNeck&clotheColor=Red&eyeType=Cry&eyebrowType=UnibrowNatural&mouthType=Twinkle&skinColor=Light'`,
    };

    const Residential = {
      id: uuid(),
      description: "Residential",
    };

    const Business = {
      id: uuid(),
      description: "Business",
    };

    const Addresses = {
      id: uuid(),
      address: "Rua das Laranjeiras",
      zipCode: "88888-888",
      number: 88,
      addressTypeId: Permissions.id,
    };

    const AddressOnUser = {
      user_id: Administrator.id,
      address_id: Addresses.id,
    };

    const Actions = [
      { id: uuid(), description: "can_update", permissionsId: Permissions.id },
      { id: uuid(), description: "can_delete", permissionsId: Permissions.id },
      { id: uuid(), description: "can_find", permissionsId: Permissions.id },
      {
        id: uuid(),
        description: "can_see_password",
        permissionsId: Permissions.id,
      },
    ];

    /**
     * Insert data into Database
     */
    await client.permissions.create({ data: Permissions });
    await client.user.create({ data: Administrator });
    await client.addressType.createMany({
      data: [Residential, Business],
    });
    await client.addresses.create({ data: Addresses });
    await client.actions.createMany({ data: Actions });
    await client.addressesOnUsers.create({ data: AddressOnUser });

    console.log({
      Administrator,
      AddressType: {
        Residential,
        Business,
      },
      Addresses,
      Permissions,
      Actions,
    });
  } catch (error) {
    console.log(error);
  }
}

main().finally(() => client.$disconnect());
