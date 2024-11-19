import express from "express";
import dotenv from "dotenv";
import { appConfig } from "./config/appConfig";
import authRoutes from "../src/app/routes/authRoutes";
import { errorHandler } from "./app/middlewares/errorHandler";
import { StatusCode } from "./app/middlewares/statusCode";

dotenv.config();

const app = express();

app.use(express.json());
app.use(StatusCode);

const PORT = appConfig.server.port;

if (!appConfig.jwt.secret) {
	throw new Error(
		"JWT secret is not configured. Please set JWT_SECRET in your .env file."
	);
}
if (!appConfig.supabase.url || !appConfig.supabase.key) {
	throw new Error(
		"Supabase configuration is missing. Check SUPABASE_URL and SUPABASE_KEY in your .env file."
	);
}

app.use("/api/auth", authRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
