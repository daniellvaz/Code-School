import { v4 as uuid } from "uuid";

export class Addresses {
  public readonly id: string;
  public address: string;
  public zipCode: string;
  public number: number;
  public type: string;

  constructor(props: Omit<Addresses, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
