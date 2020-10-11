import React from 'react';

import style from "./Nav.module.scss"
import {Link} from "react-scroll";

const Nav = () => {
    return <div className={style.nav}>
        <Link spy={true} activeClass={style.active} to={"home"} duration={1000} smooth={true}>
           <span>HOME</span>
        </Link>
        <Link spy={true}  activeClass={style.active} to={"about"} duration={1000} smooth={true}>
            <span>ABOUT</span>
        </Link>
        <Link spy={true}   activeClass={style.active} to={"projects"} duration={1000} smooth={true}>
            <span>PROJECTS</span>
        </Link>
        <Link spy={true} offset={15} activeClass={style.active} to={"contact"} duration={1000} smooth={true}>
          <span>CONTACT</span>
        </Link>
    </div>
};

export default Nav