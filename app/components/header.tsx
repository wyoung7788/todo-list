'use client';
import Image from "next/image";
import React from "react";
import getQuote from "./getquote";
import { useQuery} from "@tanstack/react-query";
import Loading from "../dashboard/loading";

export default function Header(){
    const { data, isLoading, isError } = useQuery({
        queryFn: async() => await getQuote(),
        queryKey: ['quote'],
    });

    if (isLoading) return <Loading/>;
    if (isError) return <div>There was an error</div>;
    

    return(
        <div>
            <Image src="/mountains.jpg"/>
             <div className="bg-hero bg-cover text-center text-slate-700 h-60">
            <h1 className="align-middle pt-12 rounded-sm font-extrabold text-5xl">
            to do list
            </h1>
            <h1>
                <div>
                    
                {data?.results?.map
                ((quoted, index) => (
                            <div key={index}
                            title={quoted.author}>
                                <p className="text-xl font-semibold">
                                {quoted.quote}</p>
                            </div>
                        ))}
                    </div>
                </h1>
            </div>
        </div>
    )
}