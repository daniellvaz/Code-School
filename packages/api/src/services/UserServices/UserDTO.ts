import { Addresses } from "../../entities/Addresses";

export interface UserDTO {
  id?: string;
  firstName: string;
  lastName: string;
  active?: boolean;
  permissionsId: string;
  birthday: string;
  phone: string;
  addresses?: Addresses[];
  email: string;
  password?: string;
  image: string;
}
