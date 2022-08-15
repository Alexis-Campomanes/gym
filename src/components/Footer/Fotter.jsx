import './Foter.css'
import React from 'react'
import Github from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Fotter = () => {
  return (
    <div className='Footer-container'>
      <hr />
        <div className='footer'>
          <div className='social-links'>
          <a href='https://github.com/Alexis-Campomanes/gym'><img src={ Github } alt="" /></a>
        <img src={ Linkedin } alt="" />
         </div>
        <div className="logo-f">
          <img src={ Logo } alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2 "></div>

    </div>
  )
}

export default Fotter