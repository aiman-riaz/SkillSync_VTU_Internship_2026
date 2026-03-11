import express from "express";
import { requestLogger } from "./middleware/requestLogger";
import studentRoutes from "./routes/studentRoutes";
const app = express();
app.use(express.json());
app.use(requestLogger);
app.use("/api", studentRoutes);
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/api/students");
});