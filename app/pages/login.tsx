import React, { FormEvent } from "react"
import { useRouter } from "next/router"

export default function Login(){
    const router = useRouter()

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
    }
    return (
        <div>
            login
        </div>
    )
}