import React from 'react'
import { useInView } from 'react-intersection-observer';
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import MOONZ_LOGO from '../../assets/moonz_logo.png'
import APP_SS1 from '../../assets/app_ss1.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './moonz.css'
import Nav2 from '../../components/nav/Nav2'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MOONZ_SS1 from '../../assets/moonz_ss1.png'
import MOONZ_SS2 from '../../assets/moonz_ss2.png'
import MOONZ_PDF from "../../assets/MOONZ_PDF.pdf";

const Moonz = () => {
    const { ref: visibleRef, inView: elementIsVisible } = useInView();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    variableWidth: true,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 345,
                settings: {
                    arrows: true,
                    variableWidth: true,
                    swipeToSlide: true,
                }
            }
        ],

    };
    return (
        <div className='container_black'>
            <Nav2 nextLink="/winpro" prevLink="/winpro" />
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
                    <button className="btn glow-on-hover xiaodi_btn">
                        <a href="#/" className='btn_a_playstore'>
                            <li><IoLogoGooglePlaystore className='button_icon' /></li>Play Store
                        </a>
                    </button>
                </div>
                <div className='moonz_app'>
                    <div className='carousel_container'>
                        <div className='carousel_img'>
                            <div>
                                <Slider {...settings}>
                                    <div >
                                        <img src={MOONZ_SS1} alt="" />
                                    </div>
                                    <div>
                                        <img src={MOONZ_SS2} alt="" />
                                    </div >
                                </Slider>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* automate indicators */}
            <div className='container moonz_indicators'>
                <h4>We automate indicator calculations</h4>
                <div className="about__cards ">
                    <article className='about__card moonz_card'>
                        <FaAward className='about__icon moonz_icon' />
                        <h5>SMA</h5>
                        <small>Simple Moving Average</small>
                    </article>
                    <article className='about__card moonz_card'>
                        <FiUsers className='about__icon moonz_icon' />
                        <h5>RSI</h5>
                        <small>Relative Strenght Index</small>
                    </article>
                    <article className='about__card moonz_card'>
                        <VscFolderLibrary className='about__icon moonz_icon' />
                        <h5>ML</h5>
                        <small>LSTM Machine Learning</small>
                    </article>
                </div>
            </div>

            {/* ANDROID APP */}
            <div className='container moonz_app_container'>
                <h3>Android MVVM</h3>
                <p>In this project we wanted to apply MVVM architecture for our
                    Android app.
                    We used Room for local database and Firebase as our remote database.
                    Lastly we use Live Data to update our UI list and make sure it is in sync with our alerts database.
                    <br /><br />
                    Combining chaquopy to run some of our python scripts in the app and also
                    utilizing Binance API to get the latest market data and user's balance.
                </p>
            </div>

            {/* moonz presentation */}
            {/* <div className='container moonz_presentation'>
                <h3>MOONZ PRESENTATION</h3>
            </div> */}

            {/* moonz more info */}
            <div className='container moonz_more_info'>
                <h3>MORE INFO</h3>
                <div className='moonz_more_info_btncontainer'>
                    <button className={`btn glow-on-hover xiaodi_btn hidden ${elementIsVisible ? 'show' : ''}`} ref={visibleRef}>
                        <a href="#/" className='btn_a_playstore'>
                            <li><IoLogoGooglePlaystore className='button_icon' /></li>Play Store
                        </a>
                    </button>
                    <button className={`btn glow-on-hover xiaodi_btn hidden ${elementIsVisible ? 'show' : ''}`} ref={visibleRef}>
                        <a href="https://moonz.studio/">
                            Visit Website
                        </a>
                    </button>
                    <button className={`btn glow-on-hover xiaodi_btn hidden ${elementIsVisible ? 'show' : ''}`} ref={visibleRef}>
                        <a href={MOONZ_PDF}>
                            Presentation
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Moonz