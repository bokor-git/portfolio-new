import React from 'react';
import style from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./Skill/Skill";
import {Line} from "../common/components/Line";

const description = "Lorem ipsum dolor sit amet, consectetur adipisicing, sit amet, consectetur adipisicing, sit amet, consectetur adipisicing "


const Skills = () => {
    return <div className={style.skillsBlock}>
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <h2 className={style.title}>Skills</h2>
            <Line/>
            <div className={style.skills}>
                <Skill title="HTML" description={description}
                       icon={"https://pngimage.net/wp-content/uploads/2018/06/html-icon-png-6.png"}/>
                <Skill title="CSS" description={description}
                       icon={"https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/9939568401548330925-512.png"}/>
                <Skill title="JS" description={description} icon={"https://img.icons8.com/all/500/javascript.png"}/>
                <Skill title="ReactJS" description={description}
                       icon={"https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png"}/>
                <Skill title="Redux" description={description} icon={"https://img.icons8.com/all/500/redux.png"}/>
                <Skill title="NodeJS" description={description}
                       icon={"https://cdn.onlinewebfonts.com/svg/img_189697.png"}/>
            </div>
        </div>
    </div>
}

export default Skills