import "dotenv/config"

import express from "express";
import cors from "cors";

// routes import
import userRoutes from "./src/routes/user.routes";
import authRoutes from "./src/routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(
  process.env.PORT, () => 
  console.log(`server is running ${process.env.PORT}`)
);
