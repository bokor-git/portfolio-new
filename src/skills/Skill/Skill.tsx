import React from 'react';
import style from "./Skill.module.scss"
// @ts-ignore
import Flip from "react-reveal/Flip";
import {SkillsType} from "../../App";



const Skill = (props: SkillsType) => {
    return <Flip fraction={0.6} duration={1000} delay={props.delay} left>
        <div className={style.skill}>
            <div className={style.icon}><img src={props.icon}/></div>
            <h4 className={style.title}>{props.title}</h4>
            <p className={style.description}>{props.description}</p>
        </div>
    </Flip>
}

export default Skill