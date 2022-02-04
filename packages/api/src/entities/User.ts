import { v4 as uuid } from "uuid";
import { Addresses } from "./Addresses";

export class User {
  public readonly id: string;
  public firstName: string;
  public lastName: string;
  public active: boolean;
  public permissions: string;
  public birthday: string;
  public phone: string;
  public addresses?: Addresses[];
  public email: string;
  public password: string;
  public image: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
