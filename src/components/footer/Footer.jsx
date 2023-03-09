import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <motion.a href="/#" whileHover={{ scale: 1.1 }} className='footer__logo'>JERIEL ISAIAH LAYANTARA</motion.a>

      <ul className='permalinks'>
        <motion.li whileHover={{ scale: 1.1 }}><a href="/#">Home</a></motion.li>
        <motion.li whileHover={{ scale: 1.1 }}><a whileHover={{ scale: 1.1 }} href="#experience">Work</a></motion.li>
        <motion.li whileHover={{ scale: 1.1 }}><a whileHover={{ scale: 1.1 }} href="#contact">Contact</a></motion.li>
      </ul>

      <div className="footer__socials">
        <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/jeriel-isaiah-layantara/" target='_blank' rel="noreferrer"><BsLinkedin /></motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/pangsitmie" target='_blank' rel="noreferrer"><BsGithub /></motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="https://www.instagram.com/jerielisaiah/" target='_blank' rel="noreferrer"><BsInstagram /></motion.a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jeriel Isaiah Layantara</small>
      </div>
    </footer>
  )
}

export default Footer