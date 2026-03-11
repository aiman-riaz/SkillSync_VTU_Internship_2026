import { Request, Response } from "express";
let students = [
  { id: 1, name: "AA", grade: "A" },
  { id: 2, name: "BB", grade: "B" },
];
export const getStudents = (req: Request, res: Response) => {
  res.json(students);
};
export const createStudent = (req: Request, res: Response) => {
  const student = { id: Date.now(), ...req.body };
  students.push(student);
  res.status(201).json(student);
};
export const deleteStudent = (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  students = students.filter((s) => s.id !== id);
  res.json({ message: "Student deleted" });
};