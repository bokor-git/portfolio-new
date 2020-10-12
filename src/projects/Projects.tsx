import React, {useEffect, useRef, useState} from 'react';
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
import {ProjectType} from "../App";


const Projects = ({projects}: { projects: Array<ProjectType> }) => {

    const [allProjects, setAllProjects] = useState<Array<ProjectType>>(projects)
    const [filteredProjects, setFilteredProjects] = useState<Array<ProjectType>>(allProjects)

    const showNone = () => setFilteredProjects([])
    const showAll = () => {
        setFilteredProjects(allProjects)
    }
    const showReact = () => {
        setFilteredProjects(allProjects.filter(p => p.type == "React"))
    }
    const showJS = () => {
        setFilteredProjects(allProjects.filter(p => p.type == "JS"))
    }


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
                    <ul className={style.flex}>
                        <li onClick={async () => {
                            await showNone();
                            await showAll()
                        }} className={style.item}>ALL
                        </li>
                        <li onClick={async () => {
                            await showNone();
                            await showReact()

                        }} className={style.item}>REACT-JS
                        </li>
                        <li onClick={async () => {
                            await showNone();
                            await showJS()
                        }} className={style.item}>JAVASCRIPT
                        </li>
                    </ul>
                </Fade>
            </div>
            <div className={style.projectBlock}>
                {filteredProjects.map(p =>
                    <Zoom distance={"50%"}>
                        <Project key={p.img} name={p.name} description={p.description} img={p.img}/>
                    </Zoom>
                )}
            </div>

        </div>
    </div>
}

export default Projects