import React, {useState} from 'react';
import style from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./Skill/Skill";
import {Line} from "../common/components/Line";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import {ProgressNew} from "../common/progress-bar/Progress";
import photo from "../common/img/me.png"
import photoWebp from "../common/img/me.png"
import {SkillsType, TechnologiesType} from "../App";


const Skills =React.memo( ({skills, technologies}: { skills: Array<SkillsType> , technologies:Array<TechnologiesType>}) => {
    const [start, setStart] = useState<boolean>(false)
    return <div className={style.skillsBlock}>
        {console.log(  "Skills render")}
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <Fade fraction={0.6} delay={500} duration={1000} distance={"30%"} left>
                <h2 className={style.title}>ABOUT</h2>
            </Fade>
            <Fade fraction={0.6} delay={1000} duration={1000} distance={"70%"} left>
                <Line/>
            </Fade>
            <div className={style.skills}>
                {skills.map(i => <Skill title={i.title} description={i.description}
                                        icon={i.icon} delay={i.delay}/>)}
            </div>
            <div className={style.about}>
                <Fade fraction={0.9} distance={"30%"} left>
                    <div className={style.profile}>
                        <img src={photo} alt="profile photo" className={style.photo}/>
                        <div className={style.title}>Who's this guy?</div>
                        <div className={style.description}>
                            <div>I'm a Front-End Developer from Ukraine <br/>
                                I have serious passion for web development,
                                animations and creating intuitive, dynamic user interfaces.
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade onReveal={() => setStart(true)} fraction={0.9} distance={"30%"} right>
                    <div className={style.info}>
                        {technologies.map(i=> <ProgressNew start={start} done={i.done} title={i.title}/>)}
                    </div>
                </Fade>
            </div>

        </div>
    </div>
})

export default Skills