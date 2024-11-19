import { Router } from "express";
import { authController } from "../controllers/authController";
import { validateInput } from "../middlewares/validateInput";
import { z } from "zod";

const router = Router();

const authSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

router.post("/register", validateInput(authSchema), authController.register);
router.post("/login", validateInput(authSchema), authController.login);

export default router;
