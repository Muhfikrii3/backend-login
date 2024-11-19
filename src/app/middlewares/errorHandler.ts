import { Request, Response, NextFunction } from "express";

export const errorHandler = (
	err: any,
	_: Request,
	res: Response,
	__: NextFunction
) => {
	const statusCode = err.statusCode || 500;
	res.status(statusCode).json({
		message: err.message || "Internal Server Error",
	});
};
