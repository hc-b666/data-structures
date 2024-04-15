import { InferSchemaType, Schema, model } from "mongoose";

const taskScheme = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
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
