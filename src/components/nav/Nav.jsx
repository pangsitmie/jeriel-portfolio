import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <motion.a whileHover={{ scale: 1.1 }} href="/#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></motion.a>
      <motion.a whileHover={{ scale: 1.1 }} href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></motion.a>
      <motion.a whileHover={{ scale: 1.1 }} href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><RiServiceLine /></motion.a>
      <motion.a whileHover={{ scale: 1.1 }} href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><BiBook /></motion.a>
      <motion.a whileHover={{ scale: 1.1 }} href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiOutlineMail /></motion.a>
    </nav>
  );
};

export default Nav;
