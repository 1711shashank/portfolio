import React from 'react';
import Home from './Home';
import './Body.css';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Contact from './Contact';


const Body = () => {
  return (
    <div className='body'>
        <Home/>
        <About/>
        <Services/>
        <Skills/>
        <Contact/>
        
    </div>
  )
}

export default Body
