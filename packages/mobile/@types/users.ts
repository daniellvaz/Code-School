export interface Users {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UserInfomation {
  message: string;
  response: {
    token: string;
    user: {
      id: string;
      name: string;
      lastName: string;
      age: number;
      email: string;
      image: string;
    };
  };
}

export interface UserData {
  token: string;
  user: {
    id: string;
    name: string;
    lastName: string;
    age: number;
    email: string;
    image: string;
  };
}
