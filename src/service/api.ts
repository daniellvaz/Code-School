import { Users } from "../../@types/users";
import { users } from "../data/users";

const api = {
  get(url: string) {
    switch (url) {
      case "/users":
        return new Promise<Users[]>((resolve) => {
          setTimeout(() => {
            resolve(users);
          }, 5000);
        });
      default:
        break;
    }
  },
};

export default api;
