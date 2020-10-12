import React, {useState} from 'react';
import style from "./Projects.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Project from "./project/Project";
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
    const showAll = () => setFilteredProjects(allProjects)
    const showReact = () => setFilteredProjects(allProjects.filter(p => p.type == "React"))
    const showJS = () => setFilteredProjects(allProjects.filter(p => p.type == "JS"))


    const [width, setWidth] = useState<number>(0)
    const [left, setLeft] = useState<number>(0)
    const [selector, setSelector] = useState<any>("#all")

    React.useEffect(() => {
        setWidth(document.querySelector(selector).offsetWidth);
        setLeft(document.querySelector(selector).offsetLeft);
    }, [selector]);

    return <div className={style.projectsBlock}>
        <div className={`${styleContainer.container} ${style.projectContainer}`}>
            <Fade delay={500} duration={1000} distance={"30%"} right>
                <h2 className={style.title}>PROJECTS</h2>
            </Fade>
            <Fade delay={1000} duration={1000} distance={"70%"} right>
                <Line/>
            </Fade>
            <div className={style.filter}>
                <Fade left  delay={500} duration={1000}>
                    <div className={style.marker} style={{width: `${width}px`, left: `${left}px`}}></div>
                </Fade>
                <Fade delay={500} duration={2000}>
                    <ul className={style.flex}>
                        <li id={"all"} onClick={async () => {
                            setSelector("#all")
                            await showNone();
                            await showAll()
                        }} className={style.item}>ALL
                        </li>
                        <li id={"react"} onClick={async () => {
                            setSelector("#react")
                            await showNone();
                            await showReact()
                        }} className={style.item}>REACT-JS
                        </li>
                        <li id={"js"} onClick={async () => {
                            setSelector("#js")
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