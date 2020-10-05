import React from 'react';
import style from "./Skill.module.scss"

type SkillPropsType = {
    title: string
    description: string
    icon: string
}

const Skill = (props: SkillPropsType) => {
    return <div className={style.skill}>
        <div className={style.icon}><img src={props.icon}/></div>
        <h4 className={style.title}>{props.title}</h4>
        <p className={style.description}>{props.description}</p>
    </div>
}

export default Skill