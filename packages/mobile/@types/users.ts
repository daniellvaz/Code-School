export interface Addresses {
  id: string;
  address: string;
  zipCode: string;
  number: number;
  addressTypeId: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  active: boolean;
  birthday: string;
  email: string;
  phone: string;
  addresses: Addresses[];
  image: string;
}
