'use client';

import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import Header from "@/app/components/header";
import ListofItems from "@/app/components/listofitems";
import Background from "@/app/components/background";

const Client = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login');
        }
    })


  return (
    <div>
    <div className="relative grid grid-cols-1  justify-center">
        <div className= "justify-right place-content-end">
        </div>
        <Background/>
        <div className="relative z-10 bg-slate-200">
            <Header/>
        </div>
        <div className="relative z-10">
            <div className="text-center grid grid-cols-3 gap-4  bg-slate-50">
            <div>metrics
                longest uncompleted todo:
                current average:
                graph 
            </div>
            <div className="justify-center">
            <ListofItems/>
            </div>
            <div>completed todos</div>
        </div>
        
        </div>
        </div>
            <button type="button" className="bg-blue-200 p-3"
            onClick={()=> signOut()}
            >Sign out
            </button>
    </div>
    );


}

export default Client;
