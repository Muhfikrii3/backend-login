import dotenv from "dotenv";

dotenv.config();

export const appConfig = {
	server: {
		port: process.env.PORT || 3000,
	},
	supabase: {
		url: process.env.SUPABASE_URL!,
		key: process.env.SUPABASE_KEY!,
	},
	jwt: {
		secret: process.env.JWT_SECRET!,
		expiresIn: "1h",
	},
	bcrypt: {
		saltRounds: 10,
	},
};
