import app from "./app";
import env from "./validateEnv";
import mongoose from "mongoose";

const port = env.PORT;

mongoose
    .connect(env.DATABASE_URL)
    .then(() => {
        console.log("Database connected");
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch(() => {
        console.log("Could not connect to database");
    });
