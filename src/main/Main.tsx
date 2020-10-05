import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.css"

const Main = () => {
    return <div className={style.main}>
        <div className={styleContainer.container}>
            <div className={style.text}>
                <p className={style.top}>Hello, I'm <span className={style.highlight}>Bohdan Korol </span>. <br/>
                 I'm a front-end web developer.</p>
            </div>
            <div className={style.button}>View my work </div>
        </div>
    </div>
}

export default Main