import { hashService } from "../../infra/services/hashService";
import { jwtService } from "../../infra/services/jwtService";
import { userRepository } from "../../infra/repositories/userRepository";

export const authUserCase = {
	register: async (email: string, password: string) => {
		const existingUser = await userRepository.findUserByEmail(email);
		if (existingUser) {
			const error = new Error("User already exist");
			(error as any).statusCode = 409;
			throw error;
		}

		const hashedPassword = await hashService.hashPassword(password);
		const user = await userRepository.createUser(email, hashedPassword);
		return user;
	},
	login: async (email: string, password: string) => {
		const user = await userRepository.findUserByEmail(email);
		if (!user) throw new Error("User not found");
		const isPasswordValid = await hashService.comparePassword(
			password,
			user.password
		);
		if (!isPasswordValid) throw new Error("Invalid credentials");
		const token = jwtService.generateToken({
			id: user.id,
			email: user.email,
		});
		return { token, user };
	},
};
