import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import createHttpError, { isHttpError } from "http-errors";
import TasksRouter from "./routes/tasksRouter";

const app = express();
app.use(express.json());

app.use("/tasks", TasksRouter);

// Endpoints that does not exist
app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint is not found"));
});

// Error handler middleware
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "An unknown error occured";
    let statusCode = 500;

    if (isHttpError(error)) {
        errorMessage = error.message;
        statusCode = error.status;
    }

    res.status(statusCode).json({ error: errorMessage });
});

export default app;
