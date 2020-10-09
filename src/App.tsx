import React from 'react';

import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import {Element} from "react-scroll";

function App() {
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
                <Projects/>
            </Element>
            <Element name="contact">
                <Contacts/>
            </Element>
            <Footer/>
        </div>
    );
}

export default App;
