import style from "./Link.module.scss";
import React from "react";


export function CheckLink({text,link}:{text:string, link:string}) {
    return  <a className={style.link} href={link}>{text}</a>
}