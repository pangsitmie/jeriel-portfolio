import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/jeriel_about.png";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";
import {
  batch,
  FadeIn,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Sticky(), Move());

const header = () => {
  return (
    <header>
      <div className="container header__container">

        <h1>Jeriel Isaiah</h1>
        <h5 className="text-light">Software Engineer & Designer</h5>
        <CTA />
        <HeaderSocials />

        <motion.div className="me" animation={ZoomInScrollOut}>
          <img src={ME} className="me__content" alt="me" />
        </motion.div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>



    </header>
  );
};

export default header;
