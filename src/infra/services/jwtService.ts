import jwt from "jsonwebtoken";
import { appConfig } from "../../config/appConfig";

export const jwtService = {
	generateToken: (
		payload: object,
		expiresIn: string = appConfig.jwt.expiresIn
	): string => {
		return jwt.sign(payload, appConfig.jwt.secret, { expiresIn });
	},
	verifyToken: (token: string): object | string => {
		return jwt.verify(token, appConfig.jwt.secret);
	},
};
