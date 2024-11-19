import { Request, Response, NextFunction } from "express";

export const StatusCode = (req: Request, res: Response, next: NextFunction) => {
	const originalJson = res.json;

	res.json = function (body: any) {
		if (body && typeof body === "object" && !body.status) {
			body = {
				status: res.statusCode,
				...body,
			};
		}
		return originalJson.call(this, body);
	};

	next();
};
