'use client'
import Image from "next/image";
import React, {useState, useEffect} from "react";
import styles from "./home.module.css";

export default function Header(){
    const [position, setPosition] = useState(window.screenY)
    const [visible, setVisible] = useState(true);
    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > window.screenY){
                setVisible(false);
            } else {
                setVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll)
        return(()=> {
            window.removeEventListener("scroll", handleScroll);
        }
        )
    }
    )
    const cls = visible?"visible":"hidden";
    return (

        <div>
        <header className={cls}>
        </header>
        <p>
           
        </p>
        </div>
    )
}