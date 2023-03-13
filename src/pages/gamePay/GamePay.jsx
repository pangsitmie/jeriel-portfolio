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
                <h1>Helping restaurants, and retail
                    stores attract customers with
                    Uber Eats
                </h1>
                <h4 >
                    GAME PAY
                </h4>
                <h4>
                    WEB APP
                </h4>
            </div>


            {/* CURVE DIV */}
            <div className="curve_container">
                <div className="curved-overlay-top">
                </div>
                <div className="curved">
                    <div className='gamepay_intro_container'>
                        <div>
                            <h1>
                                Game Pay
                            </h1>
                            <a href="https://market-test-backstage.cloudprogrammingonline.com/">
                                <h4>
                                    Visit website <BiLinkExternal />
                                </h4>
                            </a>
                        </div>
                        <div className='gamepay_intro'>
                            <div>
                                <h4>
                                    MANAGE CLAW MACHINE BUSINESS
                                </h4>
                                <h3>
                                    To bring the site to life, we extended Ubers illustration library to communicate key messaging throughout the experience.
                                    <br />
                                    The eats-specific color palette and distinct illustrative style give life to ideas and sets an inviting, helpful tone.
                                </h3>
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
                                    <p>This should give you a quick overview This should give you a quick</p>
                                </div>
                                <div className='solution_card'>
                                    <h3>Solution</h3>
                                    <p>This should give you a quick overview This should give you a quick</p>
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