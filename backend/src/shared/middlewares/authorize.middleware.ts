import type { Request, Response, NextFunction } from "express";

export function authorize(...allowedRoles: Array<"ADMIN" | "USER">) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      res.status(403).json({ message: "No tienes permisos para esta acción" });
      return;
    }
    next();
  };
}
