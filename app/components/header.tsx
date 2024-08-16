'use client'
import Image from "next/image";
import React, {useState, useEffect} from "react";
import Quote from "./quote";


export default function Header(){

    return(
        <div>
             <div className="bg-hero bg-cover text-center text-slate-700 h-60">
            <h1 className="align-middle pt-12 rounded-sm font-extrabold text-5xl">
            to do list
            </h1>
            <h1>
                <Quote/>
            </h1>
            </div>
        </div>
    )
}