import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>JERIEL ISAIAH LAYANTARA</a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiencve</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jeriel-isaiah-layantara/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/pangsitmie" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="https://www.instagram.com/jerielisaiah/" target='_blank' rel="noreferrer"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jeriel Isaiah Layantara</small>
      </div>
    </footer>
  )
}

export default Footer