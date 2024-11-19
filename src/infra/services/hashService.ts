import bcrypt, { compare } from "bcrypt";
import { appConfig } from "../../config/appConfig";

export const hashService = {
	hashPassword: async (password: string): Promise<string> => {
		return bcrypt.hash(password, appConfig.bcrypt.saltRounds);
	},
	comparePassword: async (
		password: string,
		hash: string
	): Promise<boolean> => {
		return bcrypt.compare(password, hash);
	},
};
