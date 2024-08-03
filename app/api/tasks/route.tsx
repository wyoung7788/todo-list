import connectToDB from "@/libs/mongodb";
import Task from "@/models/taskSchema";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectToDB();
        const tasks = await Task.find();
        return NextResponse.json({ tasks});
    }
    catch(error){
        console.log(error);
    }
}

export async function POST(request){
    try{
        const { name, isChecked} = await request.json();
        await Task.create({ name, isChecked});
        return NextResponse.json({message: "task created"});
    } catch (error){
        console.log(error);
    }
}