import React from 'react'
import MOONZ_LOGO from '../../assets/moonz_logo.png'
import APP_SS1 from '../../assets/app_ss1.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './moonz.css'
import Nav2 from '../../components/nav/Nav2'
const Moonz = () => {
    return (
        <div className='container_black'>
            <Nav2 />
            <div className='moonz_container'>
                <div className='moonz_img_container'>
                    <img src={MOONZ_LOGO} alt="" />
                </div>
                <h1>Moonz</h1>
                <h2>Technical analysis and Machine Learning trading bot which provides you with
                    the best trading opportunities in the cryptocurrency market.
                </h2>
            </div>

            {/* Intro */}
            <div className='container moonz_intro'>
                <div className='moonz_about'>
                    <h3>ABOUT THIS PROJECT</h3>
                    <p>
                        Moonz is my University final year project.
                        <br /><br />
                        It is a cryptocurrency trading bot which analyses the market with
                        various of indicatiors and provide you with useful informations through our app and website.
                        <br /><br />
                    </p>
                </div>
                <div className='moonz_app'>
                    <img src={APP_SS1} alt="" />
                </div>
            </div>

            {/* automate indicators */}
            <div className='container'>
                <h4>We automate indicator calculations</h4>
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icon' />
                        <h5>Experience</h5>
                        <small>2+ Years</small>
                    </article>
                    <article className='about__card'>
                        <FiUsers className='about__icon' />
                        <h5>Websites</h5>
                        <small>4+ Managed</small>
                    </article>
                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon' />
                        <h5>Projects</h5>
                        <small>10+ Completed</small>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Moonz