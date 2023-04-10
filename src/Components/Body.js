import React from 'react';
import Home from './Home';
import './Body.css';
import About from './About';
import Services from './Services';


const Body = () => {
  return (
    <div className='body'>
        <Home/>
        <About/>
        <Services/>
        
    </div>
  )
}

export default Body
