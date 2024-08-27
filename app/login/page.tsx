'use client'
import GoogleProvider from "next-auth/providers/google"
import {useSession, signIn, signOut} from "next-auth/react"
import { redirect } from "next/navigation";
export default function LoginPage(){
    const { data: session } = useSession();
    if (session){
        redirect("/protected/client");
    }
    return(
        <div>
            <div>
            
            </div>
            <div>
            <button onClick={()=> signIn('google')}>log in with google</button>
            </div>
        </div>
    )
}