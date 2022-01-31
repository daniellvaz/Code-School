import { Courses } from "../../@types/courses";
import { Users } from "../../@types/users";
import { courses } from "../data/courses";
import { users } from "../data/users";

interface Response<R> {
  data: R;
  status: number;
}

const api = {
  get<T>(url: string, data: T) {
    switch (url) {
      case "/users":
        return new Promise<Response<T>>((resolve) => {
          setTimeout(() => {
            resolve({ data, status: 200 });
          }, 5000);
        });
      case "/courses":
        return new Promise<Response<T>>((resolve) => {
          setTimeout(() => {
            resolve({ data, status: 200 });
          }, 5000);
        });
      default:
        break;
    }
  },
};

export default api;
