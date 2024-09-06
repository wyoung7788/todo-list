'use client'

import React from "react"
import {useRouter} from "next/navigation";


export default function Page(){
   const router = useRouter();
    return(
        
        //log in with mongodb or google authentication 
        <div className="bg-gradient-to-r from-orange-200 to-amber-300 h-screen shadow-sm">
        <div className="container">
        <div className="grid grid-cols-1">
        <div className = "center gap-y-10 text-red-400 font-extrabold text-2xl">welcome to your to-do list</div>
        <div className="center">stay on track</div>
        <div className="box-border h-32 w-34 bg-blue-300">
            <div className="center h-20">
            <div></div>
            <button type="button" onClick={()=> router.push('/login')}
            className="rounded-sm bg-blue-500 text-white">log in
            </button>
            </div>
            <div className="center">
            <button type="button"
            className="rounded-sm bg-blue-500 text-white"
            onClick={()=> router.push('/signup')}>sign up</button>
            </div>
            </div>
        <div>
        </div>
        </div>
        </div>
        </div>
    );
}
