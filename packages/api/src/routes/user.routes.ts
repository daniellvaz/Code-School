import { Router } from "express";
import userController from "../controllers/UserController";
import isAuthenticated from "../middlewares/isAuthenticated";

const userRoutes = Router();

userRoutes
  .get("/", (req, res) => userController.findMany(req, res))
  .get("/:id", (req, res) => userController.findOne(req, res))
  .get("/find/deleted", (req, res) =>
    userController.findWhenIsDeleted(req, res)
  )
  .post("/create", isAuthenticated, (req, res) =>
    userController.create(req, res)
  )
  .put("/update/:id", isAuthenticated, (req, res) =>
    userController.update(req, res)
  )
  .delete("/delete/:id", isAuthenticated, (req, res) =>
    userController.delete(req, res)
  );

export default userRoutes;
