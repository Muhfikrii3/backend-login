import { Request, Response, NextFunction } from "express";
import { authUserCase } from "../../core/usecases/authUseCase";

export const authController = {
	register: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { email, password } = req.body;
			const user = await authUserCase.register(email, password);
			const result = {
				id: user.id,
				email: user.email,
				created_at: user.created_at,
				updated_at: user.updated_at,
			};
			res.status(201).json({
				message: "User registered successfully",
				user: result,
			});
		} catch (error) {
			next(error);
		}
	},
	login: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { email, password } = req.body;
			const { token, user } = await authUserCase.login(email, password);
			const result = {
				id: user.id,
				email: user.email,
			};
			res.status(200).json({
				message: "Login successful",
				user: result,
				token,
			});
		} catch (error) {
			next(error);
		}
	},
};
