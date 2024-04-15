import { InferSchemaType, Schema, model } from "mongoose";

const taskScheme = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
);

type Task = InferSchemaType<typeof taskScheme>;

export default model<Task>("Task", taskScheme);
