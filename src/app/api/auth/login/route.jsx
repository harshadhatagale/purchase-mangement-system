import mongoose from "mongoose";
import connectDb from "../../../../../lib/mongodb";
import { Role } from "../../../../../models/Role";
import { User } from "../../../../../models/User";
import { NextResponse } from "next/server";
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
export async function POST(req) {
    const { username, password, role } = await req.json()
    try {
        await connectDb()
        const user = await User.findOne({ username })
        if (!user) {
            return NextResponse.json({ message: "User does not exists" }, { status: 400 })
        }
        // const isPasswordCorrect = await bcrypt.compare(password, user.password)

       
        // if (!isPasswordCorrect) {
        //     return NextResponse.json({ message: "Please enter valid credentials" }, { status: 400 })
        // }
        const token = jwt.sign(
            { id: user._id }, process.env.JSON_WEB_SECRET, { expiresIn: "1h" }
        )

        return NextResponse.json({ message: "Login successfully", token }, { status: 201 })
    }
    catch (error) {
        return NextResponse.json({ message: "Server Errror", error }, { status: 500 })
    }
}