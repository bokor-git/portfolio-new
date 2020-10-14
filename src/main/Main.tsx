import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import {Link} from 'react-scroll'
import arrow from  "../common/icons/arrow.svg"


const Main = () => {
    return <div className={style.main}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <p className={style.top}>Hello, I'm <span className={style.highlight}>Bohdan Korol</span>. <br/>
                        I'm a front-end web developer.</p>
                </div>
                <Link to={"about"} spy={true} offset={10} duration={500} smooth={true}>
                <div className={style.button}>View my work <img src={arrow} className={style.arrow}/></div>
                </Link>
            </div>
        </div>

}

export default Main