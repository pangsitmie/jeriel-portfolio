import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mascot1.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jeriel Isaiah Layantara</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={ME} className="me__content" alt="me" />
        </div>


        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header