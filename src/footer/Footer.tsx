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


const icons = {
    facebook: facebookIcon,
    instagram: instagramIcon,
    linkedin: linkindlIcon,
    telegram: telegram,
    viber:viberIcon
}


const Footer = () => {
    return <div className={style.footerBlock}>
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <h2 className={style.title}>Bohdan Korol</h2>
            <Line/>
            <div className={style.socialMediaBlock}>
                <SocialIcon icon={icons.facebook}/>
                <SocialIcon icon={icons.instagram}/>
                <SocialIcon icon={icons.linkedin}/>
                <SocialIcon icon={icons.telegram}/>
                <SocialIcon icon={icons.viber}/>
            </div>
            <p className={style.text}>©2020 All rights reserved</p>
        </div>
    </div>
}

export default Footer


