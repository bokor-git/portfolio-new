import React from 'react';
import style from "./Projects.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Project from "./project/Project";
import socialImg from "./../common/img/social-network.png"
import messengerImg from "./../common/img/messenger.png"
import todolistImg from "./../common/img/todolist.png"
import counterImg from "./../common/img/counter.png"
import {Line} from "../common/components/Line";
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';


const socialNetwork = {
    name: "Social network",
    description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae",
    img: socialImg
}

const todoList = {
    name: "Todolist",
    img: todolistImg,
    description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
}


const messenger = {
    name: "Messenger",
    img: messengerImg,
    description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
}


const counter = {
    name: "Counter",
    img: counterImg,
    description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
}

const Projects = () => {
    return <div className={style.projectsBlock}>
        <div className={`${styleContainer.container} ${style.projectContainer}`}>
            <Fade delay={500} duration={1000} distance={"30%"} right>
                <h2 className={style.title}>PROJECTS</h2>
            </Fade>
            <Fade delay={1000} duration={1000} distance={"70%"} right>
                <Line/>
            </Fade>
            <div className={style.filter}>
                <Fade delay={500} duration={2000}>
                    <div className={style.flex}>
                        <div className={style.itemActive}>ALL</div>
                        <div className={style.item}>REACT-JS</div>
                        <div className={style.item}>JAVASCRIPT</div>
                        <div className={style.item}>VUE-JS</div>
                    </div>
                </Fade>
            </div>
            <div className={style.projectBlock}>
                <Zoom distance={"50%"}  >
                    <Project name={socialNetwork.name} description={socialNetwork.description} img={socialImg}/>
                </Zoom>
                <Zoom distance={"50%"} delay={250} >
                    <Project name={todoList.name} description={todoList.description} img={todolistImg}/>
                </Zoom>
                <Zoom distance={"30%"} delay={500} >
                    <Project name={messenger.name} description={messenger.description} img={messengerImg}/>
                </Zoom>
                <Zoom distance={"30%"} delay={750} >
                    <Project name={counter.name} description={counter.description} img={counterImg}/>
                </Zoom>
            </div>

        </div>
    </div>


}

export default Projects