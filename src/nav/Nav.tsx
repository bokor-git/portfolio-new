import React from 'react';

import style from "./Nav.module.scss"

const Nav = () =>{
    return <div className={style.nav}>
        <a href="">HOME</a>
        <a href="">ABOUT</a>
        <a href="">PROJECTS</a>
        <a href="">CONTACT</a>
    </div>
};

export default Nav