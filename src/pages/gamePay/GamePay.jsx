import React from 'react'
import "./gamePay.css"
import { BiLinkExternal } from "react-icons/bi";
import IMG from "../../assets/gamepay.png";
import IMG1 from "../../assets/gamepay1.png";
import IMG2 from "../../assets/gamepay2.png";
import IMG3 from "../../assets/gamepay.png";
import IMG4 from "../../assets/gamepay4.png";
import IMG5 from "../../assets/gamepay5.png";
import ImageBoxHover from '../../components/image/ImageBoxHover';
const GamePay = () => {

    return (
        <div>
            <div className={"gamepay_hero"}>
                <div>
                    <h1>
                        SaaS web app that helps claw machine
                        brands and stores manage
                        <br />
                        their business.
                    </h1>
                    <h4 >
                        GAME PAY
                    </h4>
                    <h4>
                        WEB APP
                    </h4>
                </div>
            </div>


            {/* CURVE DIV */}
            <div className="curve_container">
                <div className="curved-overlay-top">
                </div>
                <div className="curved">
                    <div className='gamepay_intro_container'>
                        <div className='gamepay_intro'>
                            <div>
                                <h4>
                                    INTRO
                                </h4>
                                <h2>
                                    Game Pay is a <span> mobile payment solution for playing claw machines.</span>
                                    While business owners can also manage and analyse their business more efficiently
                                    through our <span>SaaS web app.</span>
                                    <a href="https://market-test-backstage.cloudprogrammingonline.com/">
                                        <h4>
                                            Visit website <BiLinkExternal />
                                        </h4>
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>



                    {/* row2 */}
                    <div className='gamepay_image_row2'>
                        {/* col1 */}
                        <div>
                            <div >
                                <ImageBoxHover props={{
                                    image: IMG1,
                                    text: "Game Pay",
                                }} />
                            </div>
                            <div className='problem_solution_container'>
                                <div className='problem_card'>
                                    <h3>Problem</h3>
                                    <p>How to reinvent claw machine business management & payment solution</p>
                                </div>
                                <div className='solution_card'>
                                    <h3>Solution</h3>
                                    <p>Utilizing IoT to monitor real-time machine data, and create a mobile payment solution</p>
                                </div>
                            </div>
                        </div>
                        {/* col2 */}
                        <div >
                            <ImageBoxHover props={{
                                image: IMG2,
                                text: "Game Pay"
                            }} />
                        </div>
                    </div>
                    <div className="curved-overlay">
                    </div>
                </div>
            </div>

            {/* ENDING */}
            <div >
                <div className='gamepay_ending'>
                    <div>
                        <h4>
                            EXPANDING REACH
                        </h4>
                        <h2>
                            Illustration & color
                        </h2>
                    </div>
                    <div>
                        <h4>
                            To bring the site to life, we extended Ubers illustration library to communicate key messaging throughout the experience.
                            <br />
                            The eats-specific color palette and distinct illustrative style give life to ideas and sets an inviting, helpful tone.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GamePay