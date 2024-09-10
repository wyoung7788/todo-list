"use client";
import { FormEvent, useRef, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "../actions/register";
import User from "../models/User";

export default function SignUpPage(){
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) =>{
        e.preventDefault();

        const formData = new FormData(ref.current as HTMLFormElement);
        const r = await register({
            email: formData.get('email') as string,
            password: formData.get('password') as string, 
            name: formData.get('name') as string
        });

        ref.current?.reset();
        if(r?.error){
            setError(r.error);
            return;
        } else{
            return router.push('/login');
        }
    };

    return(

        <div className="bg-gradient-to-r from-amber-200 to-purple-200 h-screen flex items-center justify-center shadow-sm">
        <div>
            <button  onClick={()=>router.push("/")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                </button>
            <form ref={ref} onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Name" required/>
                <input name="email" type="email" placeholder="Email" required/>
                <input name="password" type="password" placeholder="Password" required/>
                <button type="submit" className="bg-slate-200">Sign up</button>
            </form>
            </div>
        </div>

    )
}