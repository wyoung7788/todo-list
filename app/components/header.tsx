'use client';
import React from "react";
import getQuote from "./getquote";
import { useQuery} from "@tanstack/react-query";
import Loading from "../protected/client/loading";

interface Quote {
    quote: string;
    author: string;
}
export default function Header(){
    const { data, isLoading, isError } = useQuery<Quote[]>({
        queryFn: getQuote,
        queryKey: ['quote']
    });

    if (isLoading) return <Loading/>;
    if (isError) return <div>There was an error</div>;
    
    const quoted = data?.[0];

    return(
        <div className="container mx-auto">
            <div>
                <h1>
                {quoted ? (
                    <div title= {quoted.author}>
                        <p className="text-l font-semibold text-gray-500 text-center">
                            {quoted.quote}
                        </p>
                        <p className="text-md text-gray-600 font-semibold text-center">
                            {quoted.author}
                        </p>
                        </div>
                ):(
                    <div className="h-20 w-10">No quote</div>
                )}

                </h1>
            </div>
        </div>
    )
}