import React from 'react';
import Nav from './compoments/Nav';
import Header from './compoments/Header';
import About from './compoments/About';
import Skills from './compoments/Skills';
import Project from './compoments/Projects';
import Contact from './compoments/Contact'
import './App.css';

function App() {

    return(
        <div className="App">
             <div id="top"></div>
        <Nav />
        <Header />
        <About />
        <Skills />
        <Project />
        <Contact />
        </div>  
    )
}

export default App;
