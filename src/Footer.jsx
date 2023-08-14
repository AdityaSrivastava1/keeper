import React from 'react';
import './index.css'



const Footer = () => {

    const  year = new Date().getFullYear();
  return (
    <>
      <footer className='Footer'>
        <p>Made by Aditya Srivastava @ {year}</p>

      </footer>
    </>
  )
}
export default Footer;
