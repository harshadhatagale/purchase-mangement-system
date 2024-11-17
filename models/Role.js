import mongoose from "mongoose";

const roleSchema=new mongoose.Schema({
    name: {type: String, required:true, unique:true},
    permissions: {type: [String], default: []}
})
export const Role=mongoose.models.roles || mongoose.model("roles", roleSchema)