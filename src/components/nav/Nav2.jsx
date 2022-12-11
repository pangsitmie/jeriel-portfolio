import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
const Nav2 = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <motion.a whileHover={{ scale: 1.1 }} href="/#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></motion.a>
        </nav>
    );
}

export default Nav2