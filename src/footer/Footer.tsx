import React from 'react';
import style from "./Footer.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import {SocialIcon} from "../common/components/SocialIcon";
import {Line} from "../common/components/Line";
import facebookIcon from "../common/icons/facebook.png"
import instagramIcon from "../common/icons/instagram.png"
import linkindlIcon from "../common/icons/linkindl.png"
import viberIcon from "../common/icons/viber.png"
import telegram from "../common/icons/telegram.png"
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'

const icons = {
    facebook: facebookIcon,
    instagram: instagramIcon,
    linkedin: linkindlIcon,
    telegram: telegram,
    viber: viberIcon
}


const Footer = () => {
    return <div className={style.footerBlock}>
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <Link to={"home"} duration={1500} smooth={true}>
                <div className={style.start_btn}></div>
            </Link>


            <div className={style.socialMediaBlock}>
                <SocialIcon/>
                <SocialIcon/>
                <SocialIcon/>
                <SocialIcon/>
            </div>
            <p className={style.text}>BOHDAN KOROL <span>©2020</span></p>
        </div>
    </div>
}

export default Footer


