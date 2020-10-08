import React from "react";
import style from "./Progress.module.scss";


export const ProgressNew = ({done, title,start}:{done:string, title:string, start:boolean})=>{
    const [styleProgress, setStyleProgress] = React.useState({});

    if(start){setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyleProgress(newStyle);
    }, 0);}
    return  <div className={style.bar}>
        <span className={style.span}>{done}%</span>

        <div className={style.fill} style={styleProgress}>

            <div className={style.tag}>{title}</div>
        </div>

    </div>
}

