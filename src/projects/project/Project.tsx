import React from 'react';
import style from "./Project.module.scss"
import styleContainer from "./../../common/styles/Container.module.css"
import {CheckLink} from "../../common/components/CheckLink";

// @ts-ignore
import Fade from 'react-reveal/Fade';

type ProjectPropsType = {
    name: string
    description: string
    img: string
}

const Project = (props: ProjectPropsType) => {
    return <div className={`${styleContainer.container} ${style.project}`}>
        <div className={style.projectPhoto}>
            <img src={props.img} alt=""/>

            <div className={style.hover_container}>
                <Fade duration={300} top>
                    <div className={style.projectDescription}>
                        <h4 className={style.projectTitle}>{props.name}</h4>
                        <p className={style.description}>{props.description}</p>
                    </div>
                </Fade>
                <Fade duration={300} bottom>
                    <div className={style.link_container}>
                        <CheckLink text={"LEARN MORE"}/>
                    </div>
                </Fade>
            </div>
        </div>


    </div>
};

export default Project
