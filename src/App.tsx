import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import {Element} from "react-scroll";
import network from "./common/img/network.png";

import counterImg from "./common/img/counter.png";
import speed from "../src/common/icons/speed.svg"
import gadget from "../src/common/icons/gadget.svg"
import paper from "../src/common/icons/paper.svg"
import atom from "../src/common/icons/atom.svg"


export type ProjectType = {
    type: string
    name: string
    description: string
    img: string
}
export type SkillsType = {
    title: string
    description: string
    icon: string
    delay: number
}
export type TechnologiesType = {
    done: string
    title: string
}

function App() {

    const projects: Array<ProjectType> = [
        {
            type: "React",
            name: "Messenger",
            img: network,
            description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
        },
        {
            type: "JS",
            name: "Counter",
            img: network,
            description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
        },
        {
            type: "JS",
            name: "JS EXAMPLE",
            img: network,
            description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
        },
        {
            type: "React",
            name: "REACT EXAMPLE",
            img: network,
            description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
        },
        {
            type: "JS",
            name: "Counter",
            img: network,
            description: "Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae"
        },
    ]
    const skills: Array<SkillsType> = [
        {
            title: "Fast",
            description: "Fast load times and lag free interaction, my highest priority.",
            icon: speed,
            delay: 0
        },
        {
            title: "Responsive",
            description: "My layouts will work on any device, big or small.",
            icon: gadget,
            delay: 250
        },
        {
            title: "Intuitive",
            description: "Strong preference for easy to use, intuitive UX/UI.",
            icon: paper,
            delay: 500
        },
        {
            title: "Dynamic",
            description: "Websites don't have to be static, I love making pages come to life.",
            icon: atom,
            delay: 750
        },
    ]
    const technologies: Array<TechnologiesType> = [
        {done: "90", title: "HTML"},
        {done: "90", title: "CSS"},
        {done: "80", title: "JavaScript"},
        {done: "80", title: "React"},
        {done: "70", title: "TypeScript"},
        {done: "60", title: "Redux"},
        {done: "60", title: "Jest"},
        {done: "30", title: "NodeJs"},
    ]

    return (
        <div className="App">
            <Element name="home">
                <Main/>
            </Element>
            <Header/>
            <Element name="about">
                <Skills technologies={technologies} skills={skills}/>
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
