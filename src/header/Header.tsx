import React from 'react';
import style from "./Header.module.scss"
import Nav from "../nav/Nav";
import styleContainer from "../common/styles/Container.module.css";

const Header = () =>{
    return <div className={style.header}>
        {console.log(  "Header render")}
        <div className={styleContainer.container}>
        <Nav/>
        </div>
    </div>


}

export default Header