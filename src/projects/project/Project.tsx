import React from 'react';
import style from "./Project.module.scss"
import styleContainer from "./../../common/styles/Container.module.css"
import {CheckLink} from "../../common/components/CheckLink";

type ProjectPropsType = {
    name: string
    description: string
    img: string
}

const Project = (props: ProjectPropsType) => {
    return <div className={`${styleContainer.container} ${style.project}`}>
        <div className={style.projectPhoto} style={{backgroundImage: `url(${props.img})`}}>
            <CheckLink text={"LEARN MORE"}/>
        </div>

        <div className={style.projectDescription}>
            <h4 className={style.projectTitle}>{props.name}</h4>
            <p className={style.description}>{props.description}</p>
        </div>
    </div>
};

export default Project
