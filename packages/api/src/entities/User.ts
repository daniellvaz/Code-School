import { v4 as uuid } from "uuid";

export class User {
  public readonly id: string;
  public firstName: string;
  public lastName: string;
  public age: number;
  public email: string;
  public password: string;
  public passwordConfirmation: string;
  public image: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
