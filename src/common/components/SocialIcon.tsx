import style from "./SocialIcon.module.scss";
import React from "react";


export function SocialIcon(props: { icon: string }) {
    return <div className={style.icon}>
        <img src={props.icon}/>
    </div>
}