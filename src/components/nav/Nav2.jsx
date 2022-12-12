import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import { useState } from "react";
import { motion } from "framer-motion";

const Nav2 = (props) => {
    var nexLink = props.nextLink;
    var prevLink = props.prevLink;
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <motion.a whileHover={{ scale: 1.1 }} href={prevLink} onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><GrFormPreviousLink /></motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="/" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href={nexLink} onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><GrFormNextLink /></motion.a>
        </nav>
    );
}

export default Nav2