import { RequestHandler } from "express";
import mongoose from "mongoose";
import createHttpError from "http-errors";
import Task from "../models/task";
import { Params, TaskBody } from "../types/types";
import { assertIsDefined } from "../assertIsDefined";

/**
 * GET - All Tasks
 */
export const getTasks: RequestHandler = async (req, res, next) => {
    const authenticateUserId = req.session.userId;

    try {
        assertIsDefined(authenticateUserId);

        const tasks = await Task.find({ userId: authenticateUserId }).exec();

        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
};

/**
 * GET by Id
 */
export const getTask: RequestHandler = async (req, res, next) => {
    const { taskId } = req.params;
    const authenticateUserId = req.session.userId;

    try {
        assertIsDefined(authenticateUserId);

        if (!mongoose.isValidObjectId(taskId)) {
            throw createHttpError(400, "Invalid task id");
        }

        const task = await Task.findById(taskId).exec();

        if (!task) {
            throw createHttpError(404, "Task not found!");
        }

        if (!task.userId.equals(authenticateUserId)) {
            throw createHttpError(401, "You cannot access to this task!");
        }

        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

/**
 * POST
 */
export const postTask: RequestHandler<
    unknown,
    unknown,
    TaskBody,
    unknown
> = async (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const authenticateUserId = req.session.userId;

    try {
        assertIsDefined(authenticateUserId);

        if (!title) {
            throw createHttpError(400, "Title cannot be empty!");
        }

        const newTask = await Task.create({
            userId: authenticateUserId,
            title,
            description,
        });

        res.status(201).json(newTask);
    } catch (error) {
        next(error);
    }
};

/**
 * PATCH
 */
export const patchTask: RequestHandler<
    Params,
    unknown,
    TaskBody,
    unknown
> = async (req, res, next) => {
    const { taskId } = req.params;
    const updatedTitle = req.body.title;
    const updatedDescription = req.body.description;
    const authenticateUserId = req.session.userId;

    try {
        assertIsDefined(authenticateUserId);

        if (!mongoose.isValidObjectId(taskId)) {
            throw createHttpError(400, "Invalid task Id");
        }

        if (!updatedTitle) {
            throw createHttpError(400, "Title must not be empty!");
        }

        const task = await Task.findById(taskId).exec();

        if (!task) {
            throw createHttpError(404, "Task not found!");
        }

        if (!task.userId.equals(authenticateUserId)) {
            throw createHttpError(401, "You cannot access to this task!");
        }

        task.title = updatedTitle;
        task.description = updatedDescription;

        const updatedTask = await task.save();
        res.status(200).json(updatedTask);
    } catch (error) {
        next(error);
    }
};

/**
 * DELETE
 */
export const deleteTask: RequestHandler<
    Params,
    unknown,
    unknown,
    unknown
> = async (req, res, next) => {
    const taskId = req.params.taskId;
    const authenticateUserId = req.session.userId;

    try {
        assertIsDefined(authenticateUserId);

        if (!mongoose.isValidObjectId(taskId)) {
            throw createHttpError(400, "Invalid task Id");
        }

        const task = await Task.findById(taskId).exec();

        if (!task) {
            throw createHttpError(404, "Task is not found!");
        }

        if (!task.userId.equals(authenticateUserId)) {
            throw createHttpError(401, "You cannot access to this task!");
        }

        await Task.deleteOne({ _id: taskId });
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        next(error);
    }
};
