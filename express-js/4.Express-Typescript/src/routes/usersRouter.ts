import express from "express";
import * as usersController from "../controllers/usersController";
import { requiresAuth } from "../middlewares/auth";

const router = express.Router();

router.get("/", requiresAuth, usersController.getAuthUser);
router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.post("/logout", usersController.logout);

export default router;
