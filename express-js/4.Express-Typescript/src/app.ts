import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import session from "express-session";
import createHttpError, { isHttpError } from "http-errors";
import MongoStore from "connect-mongo";
import env from "./validateEnv";
import TasksRouter from "./routes/tasksRouter";
import UsersRouter from "./routes/usersRouter";
import { requiresAuth } from "./middlewares/auth";

const app = express();
app.use(express.json());

// Sessions and cookies
app.use(
    session({
        secret: env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60 * 60 * 1000,
        },
        rolling: true,
        store: MongoStore.create({
            mongoUrl: env.DATABASE_URL,
        }),
    })
);

// Routes
app.use("/tasks", requiresAuth, TasksRouter);
app.use("/users", UsersRouter);

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
