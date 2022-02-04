export interface UserDTO {
  id?: string;
  firstName: string;
  lastName: string;
  active?: boolean;
  permissionsId: string;
  birthday: string;
  phone: string;
  email: string;
  password?: string;
  image: string;
}
