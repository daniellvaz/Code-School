import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { Addresses, AddressType, PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
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
    email: "adm@codeschool.com.br",
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
    addressTypeId: Business.id,
    userId: Administrator.id,
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
  const permissions = await client.permissions.create({ data: Permissions });
  const administrator = await client.user.create({ data: Administrator });
  const addressType = await client.addressType.createMany({
    data: [Residential, Business],
  });
  const addresses = await client.addresses.create({ data: Addresses });
  const actions = await client.actions.createMany({ data: Actions });

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
}

main().finally(() => client.$disconnect());
