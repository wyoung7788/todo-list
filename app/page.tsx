"use client"
import React from "react";
import Home from "./pages/loggedin";
import Login from "./pages/login";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";


export default function App({ Component, pageProps}){
    return(
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps}/>
        </SessionProvider>
    
    );
}