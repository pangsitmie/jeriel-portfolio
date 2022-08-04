import React from "react";
import CV from "../../assets/jeriel_resume.pdf";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="cta">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="btn"
      >
        <a href={CV}>Download Resume</a>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="btn btn-primary"
      >
        <a href="#contact">Say Hello</a>
      </motion.button>
    </div>
  );
};

export default CTA;
