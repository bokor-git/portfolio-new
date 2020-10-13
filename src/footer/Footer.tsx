import React from 'react';
import style from "./Footer.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import {SocialIcon} from "../common/components/SocialIcon";
import {Link} from 'react-scroll'
import linkedin from "../common/icons/linkedin-in-brands.svg"
import facebook from "../common/icons/facebook-logo.svg"
import telegram from "../common/icons/telegram.svg"
import instagram from "../common/icons/instagram.svg"

const info = [
    {icon:linkedin, link:"https://uk-ua.facebook.com/bogdan.korol.750"},
    {icon:facebook,link:"https://uk-ua.facebook.com/bogdan.korol.750"},
    {icon:telegram,link:"https://t.me/bokor1"},
    {icon:instagram,link:"https://www.instagram.com/bohdan.korol/"},
]
const Footer = () => {
    return <div className={style.footerBlock}>
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <Link to={"home"} duration={1500} smooth={true}>
                <div className={style.start_btn}/>
            </Link>
            <div className={style.socialMediaBlock}>
                {info.map(i=> <SocialIcon info={i}/>)}
            </div>
            <p className={style.text}>BOHDAN KOROL <span>©2020</span></p>
        </div>
    </div>
}

export default Footer


