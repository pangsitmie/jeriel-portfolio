import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/jeriel_about.png";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import {
  batch,
  FadeIn,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Sticky(), Move());

const Header = () => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });
  return (
    <header>

      <div className={`container header__container hidden ${inView ? 'show' : ' '}`} ref={ref}>

        <h1>Jeriel Isaiah</h1>
        <h4 className="text-light">Web developer & designer</h4>
        <CTA />
        <HeaderSocials />



        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>



    </header>
  )
}

export default Header
