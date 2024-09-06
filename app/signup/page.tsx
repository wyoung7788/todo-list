"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage(){
    const router = useRouter();
    return(
        <div>
        <div>
            Sign up 
            <div>
                <div>
                    Sign up button
                </div>

            </div>
            <div>
            <button  onClick={()=>router.push("/")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                </button>
            </div>
        </div>
        </div>
    )
}