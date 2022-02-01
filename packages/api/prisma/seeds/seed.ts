import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  const pass = bcrypt.hashSync("123456", 10);

  const user = {
    id: uuid(),
    firstName: "Code",
    lastName: "school",
    age: 0,
    email: "adm@codeschool.com.br",
    password: pass,
    passwordConfirmation: pass,
    image: `https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=Platinum&clotheType=ShirtCrewNeck&clotheColor=Red&eyeType=Cry&eyebrowType=UnibrowNatural&mouthType=Twinkle&skinColor=Light'`,
  };

  const administrator = await client.user.create({ data: user });

  console.log(administrator);
}

main().finally(() => client.$disconnect());
