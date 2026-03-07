import express from "express";
import { requestLogger } from "./middleware/requestLogger";
const app = express();
app.use(requestLogger);
app.get("/users", (req, res) => {
  res.json({ users: [] });
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});