'use client'
import GoogleProvider from "next-auth/providers/google"
import {useSession, signIn, signOut} from "next-auth/react"
export default function LoginPage(){
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