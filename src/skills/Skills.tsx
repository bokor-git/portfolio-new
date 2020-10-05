import React from 'react';
import style from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./Skill/Skill";
import {Line} from "../common/components/Line";


const description = "Fast load times and lag free interaction, my highest priority."


const Skills = () => {
    return <div className={style.skillsBlock}>
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <h2 className={style.title}>ABOUT</h2>
            <Line/>
            <div className={style.skills}>
                <Skill title="HTML" description={description}
                       icon={"https://pngimage.net/wp-content/uploads/2018/06/html-icon-png-6.png"}/>
                <Skill title="CSS" description={description}
                       icon={"https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/9939568401548330925-512.png"}/>
                <Skill title="ReactJS" description={description}
                       icon={"https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png"}/>
                <Skill title="NodeJS" description={description}
                       icon={"https://cdn.onlinewebfonts.com/svg/img_189697.png"}/>
            </div>
            <div className={style.about}>
                <div className={style.profile}>
                    <img src="http://findmatthew.com/img/me.png" alt="profile photo" className={style.photo}/>
                    <div className={style.title}>Who's this guy?</div>
                    <div className={style.description}>
                        <div>I'm a Front-End Developer from Ukraine <br/>
                            I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                        </div>
                    </div>
                </div>
                <div className={style.info}>
                    <div className={style.bar}>
                        <span className={style.span}>90%</span>
                        <div className={style.fill}>
                            <div className={style.tag}>CSS</div>
                        </div>

                    </div>
                    <div className={style.bar}>
                        <span className={style.span}>90%</span>
                        <div className={style.fill}>
                            <div className={style.tag}>CSS</div>
                        </div>

                    </div>
                    <div className={style.bar}>
                        <span className={style.span}>90%</span>
                        <div className={style.fill}>
                            <div className={style.tag}>HTML</div>
                        </div>

                    </div>
                    <div className={style.bar}>
                        <span className={style.span}>90%</span>
                        <div className={style.fill}>
                            <div className={style.tag}>JavaScript</div>
                        </div>

                    </div>
                    <div className={style.bar}>
                        <span className={style.span}>90%</span>
                        <div className={style.fill}>
                            <div className={style.tag}>CSS</div>
                        </div>

                    </div>
                    <div className={style.bar}>
                        <span className={style.span}>90%</span>
                        <div className={style.fill}>
                            <div className={style.tag}>CSS</div>
                        </div>

                    </div>
                    <div className={style.bar}>
                        <span className={style.span}>90%</span>
                        <div className={style.fill}>
                            <div className={style.tag}>CSS</div>
                        </div>

                    </div>
                    <div className={style.bar}>
                        <span className={style.span}>90%</span>
                        <div className={style.fill}>
                            <div className={style.tag}>CSS</div>
                        </div>

                    </div>
                    <div className={style.bar}>
                        <span className={style.span}>90%</span>
                        <div className={style.fill}>
                            <div className={style.tag}>CSS</div>
                        </div>

                    </div>
                    <div className={style.bar}>
                        <span className={style.span}>90%</span>
                        <div className={style.fill}>
                            <div className={style.tag}>CSS</div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
}

export default Skills