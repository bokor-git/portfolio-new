import React from 'react';
import style from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./Skill/Skill";
import {Line} from "../common/components/Line";
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Flip from 'react-reveal/Flip';

const description = "Fast load times and lag free interaction, my highest priority."


const Skills = () => {
    return <div className={style.skillsBlock}>
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <Fade delay={500} duration={1000} distance={"30%"} left>
                <h2 className={style.title}>ABOUT</h2>
            </Fade>
            <Fade delay={1000} duration={1000} distance={"70%"} left>
                <Line/>
            </Fade>

            <div className={style.skills}>
                <Flip duration={500} left>
                    <Skill title="HTML" description={description}
                           icon={"https://pngimage.net/wp-content/uploads/2018/06/html-icon-png-6.png"}/>
                </Flip>
                <Flip duration={500} delay={250} left>
                    <Skill title="CSS" description={description}
                           icon={"https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/9939568401548330925-512.png"}/>
                </Flip>
                <Flip duration={500} delay={500} left>
                    <Skill title="ReactJS" description={description}
                           icon={"https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png"}/>
                </Flip>
                <Flip duration={500} delay={750} left>
                    <Skill title="NodeJS" description={description}
                           icon={"https://cdn.onlinewebfonts.com/svg/img_189697.png"}/>
                </Flip>


            </div>

            <div className={style.about}>
                <Fade distance={"30%"} left>
                    <div className={style.profile}>
                        <img src="http://findmatthew.com/img/me.png" alt="profile photo" className={style.photo}/>
                        <div className={style.title}>Who's this guy?</div>
                        <div className={style.description}>
                            <div>I'm a Front-End Developer from Ukraine <br/>
                                I have serious passion for UI effects, animations and creating intuitive, dynamic user
                                experiences.
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade distance={"30%"} right>
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
                </Fade>
            </div>

        </div>
    </div>
}

export default Skills