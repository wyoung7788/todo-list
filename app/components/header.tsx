'use client'
import Image from "next/image";
import React, {useState, useEffect} from "react";
import styles from "./home.module.css";



export default function Header(){

    return(
        <div>
             <div className="bg-hero bg-contain bg-cover font-sans text-center text-fuchsia-800 h-52">
            <h1 className="align-middle pt-12 rounded-sm font-extrabold text-5xl">
            TO DO
            </h1>
            </div>
        </div>
    )
}