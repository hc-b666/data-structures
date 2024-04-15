import express from "express";
import * as tasksController from "../controllers/tasksController";

const router = express.Router();

router.get("/", tasksController.getTasks);
router.get("/:taskId", tasksController.getTask);
router.post("/", tasksController.postTask);
router.patch("/:taskId", tasksController.patchTask);
router.delete("/:taskId", tasksController.deleteTask);

export default router;
