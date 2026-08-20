import type { Request, Response, NextFunction } from "express";
import type { ZodType } from "zod";

export function validate(schema: ZodType) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res
        .status(400)
        .json({ message: "Datos inválidos", errors: result.error.issues });
      return;
    }

    req.body = result.data;
    next();
  };
}
