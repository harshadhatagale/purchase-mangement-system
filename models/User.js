import mongoose, { mongo } from "mongoose";

const userScema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
    password: { type: String, required: true },
    department: { type: String, required: true },
}, { timestamps: true })
export const User = mongoose.models.users || mongoose.model("users", userScema)