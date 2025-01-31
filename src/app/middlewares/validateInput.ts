import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateInput =
	(schema: z.Schema) => (req: Request, res: Response, next: NextFunction) => {
		try {
			schema.parse(req.body);
			next();
		} catch (error) {
			if (error instanceof z.ZodError) {
				res.status(400).json({ error: error.errors });
			} else {
				res.status(500).json({ error: "Internal Server Error" });
			}
		}
	};
