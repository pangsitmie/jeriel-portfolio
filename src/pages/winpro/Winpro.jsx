import React from 'react'
import "./winpro.css";
import REACT_IMG from "../../assets/REACT_IMG.png";
import FIGMA_IMG from "../../assets/FIGMA_IMG.png";
import WINPRO_LOGO_IMG from "../../assets/WINPRO_LOGO_IMG.png";
import ME from '../../assets/jeriel_profile.jpg'
import YoutubeEmbed from '../../components/youtubeEmbed/YoutubeEmbed'
import { motion } from "framer-motion";
import Nav2 from "../../components/nav/Nav2";

const Winpro = () => {
    return (

        <div>
            <Nav2 />
            <div className='winpro_container'>
                <div className='winpro_hero'>
                    <a href="https://cloudprogrammingonline.com/"><h2>cloudprogrammingonline.com</h2></a>
                    <h1>雲程在線 <br /> Website Redesign</h1>
                    <p>Single-handedly redesign & implement this website from scratch to make it more aestetic & user friendly </p>
                </div>

                <div className='winpro_content1'>
                    <h3>ABOUT THIS PROJECT</h3>
                    <p>During my internship period I realize that our company's website was not desgined & developed properly. So after I've finished my tasks
                        I took an initiative to redesign this website from scratch and make it more user friendly.
                        <br />
                        <span>I've used React.js as the main framework and I've used Figma for the UI design.</span>
                    </p>
                    <div className='winpro_col_50_50'>
                        <div className="winpro_tools">
                            <div className='winpro_tools-image'>
                                <a href="https://www.figma.com/file/x3fxGmem6Ucd1QHZGY6Pv6/cloudprogrammingonline.com?node-id=0%3A1">
                                    <img src={FIGMA_IMG} alt="About Jeriel" />
                                </a>
                            </div>
                        </div>
                        <div className="winpro_tools">
                            <div className='winpro_tools-image'>
                                <a href="https://cloudprogrammingonline.com">
                                    <img src={WINPRO_LOGO_IMG} />
                                </a>
                            </div>
                        </div>
                        <div className="winpro_tools">
                            <div className='winpro_tools-image'>
                                <img src={REACT_IMG} alt="About Jeriel" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="winpro_highlights">
                <h3>Before</h3>
                <div className="App">
                    <YoutubeEmbed embedId="wV-AOqiAuuU" />
                </div>
                <br /><br />
                <h3>After</h3>
                <div className='winpro_after_btn'>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn btn-primary"
                    >
                        <a href="https://cloudprogrammingonline.com" >
                            Visit Website
                        </a>
                    </motion.button>
                </div>
                <div className='frame_div'>
                    <iframe src="https://cloudprogrammingonline.com" className='iframe'></iframe>
                </div>
            </div>

            <div className='winpro_ending'>
                <h1>This website is still under development</h1>
                <p>There might be some bugs that still have not been resolved </p>
            </div>

        </div>
    )
}

export default Winpro