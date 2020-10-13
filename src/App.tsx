import React from 'react';

import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import {Element} from "react-scroll";
import socialImg from "./common/img/social-network.png";
import todolistImg from "./common/img/todolist.png";
import counterImg from "./common/img/counter.png";

export type ProjectType = {
    type: string
    name: string
    description: string
    img: string
}

function App() {
    const projects:Array<ProjectType> = [
        {
            type: "React",
            name: "Social network",
            description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae",
            img: socialImg
        },
        {
            type: "JS",
            name: "Todolist",
            img: todolistImg,
            description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
        },
        {
            type: "React",
            name: "Messenger",
            img: "https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png",
            description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
        },
        {
            type: "JS",
            name: "Counter",
            img: counterImg,
            description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
        },
        {
            type: "JS",
            name: "JS EXAMPLE",
            img: "https://astwellsoft.com/assets/images/blog/xjavascript.jpg.pagespeed.ic.08u3EZ_AsW.jpg",
            description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
        },
        {
            type: "React",
            name: "REACT EXAMPLE",
            img: "https://onextrapixel.com/wp-content/uploads/2016/04/reactjs-thumb.jpg",
            description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
        },
        {
            type: "JS",
            name: "Counter",
            img: "https://www.awesomeandrew.ru/wp-content/uploads/2020/02/1566556486_1_js.jpg",
            description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
        },
    ]

    return (
        <div className="App">
            <Element name="home">
                <Main/>
            </Element>
            <Header/>
            <Element name="about">
                <Skills/>
            </Element>
            <Element name="projects">
                <Projects projects={projects}/>
            </Element>
            <Element name="contact">
                <Contacts/>
            </Element>
            <Footer/>
        </div>
    );
}

export default App;
