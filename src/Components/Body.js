import React from 'react';
import Home from './Home';
import './Body.css';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';


const Body = () => {
  return (
    <div className='body'>
        <Home/>
        <About/>
        <Services/>
        <Portfolio/>
        <Skills/>
        <Testimonials/>
        <Contact/>
        
    </div>
  )
}

export default Body
