'use client'

import React from "react"
import {useRouter} from "next/navigation";


export default function Page(){
   const router = useRouter();
    return(
        //log in with mongodb or google authentication 
        <div>
        <div className="">welcome to your to-do list</div>
        <div>
            <div>
            log in here: 
            <button type="button" onClick={()=> router.push('/login')}
            className="rounded-sm bg-slate-500">log in
            </button>
            </div>
            <div>
            sign up here:
            <button type="button"
            onClick={()=> router.push('/signup')}>sign up</button>
            </div>
        </div>
        </div>
    );
}
