// Thanks for Florian
// I watched his video and learned many cool stuff backend(express + ts)
// https://youtu.be/FcxjCPeicvU?si=GQKEuWojgL3NGYxN
// Really recommend you to watch!!!

import app from "./app";
import env from "./validateEnv";
import mongoose from "mongoose";

const port = env.PORT;

// Connection to DB 
// To see the result:
// 1. install mongodb compass on your pc
// 2. add your local db in .env
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
