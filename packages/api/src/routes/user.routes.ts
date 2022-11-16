import { Router } from "express";
import userController from "../controllers/UserController";
import ensureAuthenticate from "../middlewares/ensureAuthenticate";

const userRoutes = Router();

userRoutes
  .get("/", ensureAuthenticate, (req, res) => userController.findMany(req, res))
  .get("/:id", (req, res) => userController.findOne(req, res))
  .get("/find/deleted", (req, res) =>
    userController.findWhenIsDeleted(req, res)
  )
  .post("/create", (req, res) =>
    userController.create(req, res)
  )
  .put("/update/:id", (req, res) =>
    userController.update(req, res)
  )
  .delete("/delete/:id", (req, res) =>
    userController.delete(req, res)
  );

export default userRoutes;
