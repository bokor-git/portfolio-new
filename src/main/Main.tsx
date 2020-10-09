import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'


const Main = () => {
    return <div className={style.main}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <p className={style.top}>Hello, I'm <span className={style.highlight}>Bohdan Korol</span>. <br/>
                        I'm a front-end web developer.</p>
                </div>
                <Link to={"projects"} spy={true} offset={10} duration={1000} smooth={true}>
                <div className={style.button}>View my work <span className={style.arrow}></span></div>
                </Link>
            </div>
        </div>

}

export default Main