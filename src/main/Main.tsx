import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.css"

const Main = () => {
    return <div className={style.main}>
        <div className={styleContainer.container}>
            <div className={style.text}>
                <p className={style.top}>Hi There!</p>
                <h1>I am<br/> Bohdan Korol</h1>
                <p className={style.bottom}>Front-End Developer</p>
            </div>
            <div className={style.photo}> </div>
        </div>
    </div>
}

export default Main