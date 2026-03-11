import { Router } from "express";
import { getStudents, createStudent, deleteStudent } from "../controllers/studentController";
const router = Router();
router.get("/students", getStudents);
router.post("/students", createStudent);
router.delete("/students/:id", deleteStudent);
export default router;