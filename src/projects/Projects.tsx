import React from 'react';
import style from "./Projects.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Project from "./project/Project";
import socialImg from "./../common/img/social-network.png"
import messengerImg from "./../common/img/messenger.png"
import todolistImg from "./../common/img/todolist.png"
import counterImg from "./../common/img/counter.png"
import {Line} from "../common/components/Line";
import facebookIcon from "../common/icons/facebook.png"
import instagramIcon from "../common/icons/instagram.png"
import linkindlIcon from "../common/icons/linkindl.png"
import viberIcon from "../common/icons/viber.png"


const socialNetwork = {
    name: "Social network",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae sed totam ullam! Debitis earum re",
    img: socialImg
}

const todoList = {
    name: "Todolist",
    img: todolistImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae sed totam ullam! Debitis earum re"
}


const messenger = {
    name: "Messenger",
    img: messengerImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae sed totam ullam! Debitis earum re"
}


const counter = {
    name: "Counter",
    img: counterImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae sed totam ullam! Debitis earum re"
}

const Projects = () => {
    return <div className={style.projectsBlock}>
        <div className={`${styleContainer.container} ${style.projectContainer}`}>
            <h2 className={style.title}>Projects</h2>
            <Line/>
            <div className={style.projectBlock}>
                <Project name={socialNetwork.name} description={socialNetwork.description} img={socialImg}/>
                <Project name={todoList.name} description={todoList.description} img={todolistImg}/>
                <Project name={messenger.name} description={messenger.description} img={messengerImg}/>
                <Project name={counter.name} description={counter.description} img={counterImg}/>
            </div>

        </div>
    </div>


}

export default Projects