import { NextResponse } from "next/server";
import connectDb from "../../../../lib/mongodb";
import { Role } from "../../../../models/Role";

export async function GET(req) {
    try
    {
        connectDb()
        const newRole= new Role({name:"hod", permissions: ["read"]})
        await newRole.save()
        return NextResponse.json({message: "Ok"}, {status: 201})
    }
    catch(error)
    {
        return NextResponse.json({message: "Server Error",error}, {status: 500})
    }
}