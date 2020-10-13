import style from "./SocialIcon.module.scss";
import React from "react";



export function SocialIcon({info}:{info:{icon:string, link:string}}) {
    return <div className={style.icon}>
        <div className={style.flex}>
            <img src={info.icon} alt=""/>
            <a href={info.link}></a>
        </div>

    </div>
}