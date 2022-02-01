import express from "express";
import cors from "cors";

// routes import
import userRoutes from "./src/routes.ts/user.routes";
import authRoutes from "./src/routes.ts/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(8081, () => console.log("server is running"));
