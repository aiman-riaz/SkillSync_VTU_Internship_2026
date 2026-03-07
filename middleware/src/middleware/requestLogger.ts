import { Request, Response, NextFunction } from "express";
export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const time = new Date().toLocaleTimeString("en-US", { hour12: false });
  console.log(`${time} ${req.method} ${req.url}`);
  next();
};