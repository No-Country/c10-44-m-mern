import { Router } from "express";
import { authLocalMiddleware, authGoogleMiddleware, authJWTMiddleware } from "../middlewares/auth";

const router: Router = Router();

router.post("/", authLocalMiddleware);
router.post("/token", authJWTMiddleware);
router.post("/google", authGoogleMiddleware);

export { router as authRouter };
