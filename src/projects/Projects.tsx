import React from 'react';
import style from "./Projects.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Project from "./project/Project";
import socialImg from "./../common/img/social-network.png"
import messengerImg from "./../common/img/messenger.png"
import todolistImg from "./../common/img/todolist.png"
import counterImg from "./../common/img/counter.png"
import {Line} from "../common/components/Line";


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
            <h2 className={style.title}>PROJECTS</h2>
            <Line/>
            <div className={style.filter}>
                <div className={style.flex}>
                    <div className={style.itemActive}>ALL</div>
                    <div className={style.item}>REACT-JS</div>
                    <div className={style.item}>JAVASCRIPT</div>
                    <div className={style.item}>VUE-JS</div>
                </div>
            </div>
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