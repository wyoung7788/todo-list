'use client';

import { useRouter } from "next/navigation";
export function SignInForm(){
    const router = useRouter();
    const handleSubmit = async(event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
        });
        if (res?.error){
            setError(res.error as string);
        }
        if(res?.ok) {
            return router.push("/")
        }
    }
    return(
        <div>
        <form onSubmit={handleSubmit} autoComplete="off"/>
        <input type="text"
            id="identifier"
            placeholder="username or email"
            className= "w-full h-10 text-center border border-solid rounded p-2 gap-y-7"
            autoComplete="off"
            />
        <input type="password"
            name="password"
            placeholder="*****"
            autoComplete="off"
            className="w-full h-8 border flex text-center border-solidrounded p-2 gap-y-7"
            />
            <div className="text-center py-3">
        <button type="button" onClick={()=>handleLogin)}
            className="rounded-sm gap-y-5 text-red-400 font-semibold">log in
            </button>
            </div>
            </div>
    )
}