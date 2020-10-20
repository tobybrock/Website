import React from 'react';
import Nav from './compoments/Nav';
import Header from './compoments/Header';
import About from './compoments/About';
import Skills from './compoments/Skills';
import './App.css';

function App() {

    return(
        <div className="App">
        <Nav />
        <Header />
        <About />
        <Skills />
        </div>  
    )
}

export default App;
