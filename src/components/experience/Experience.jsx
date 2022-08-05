import React from 'react'
import './experience.css'
import { BiCheck } from 'react-icons/bi'



const Experience = () => {
  return (
    <section id='experience' >
      <h5 className='text-subtitle'>Where I've Worked</h5>
      <h2 className='text-title'>Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Android Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design and implementing UI/UX for my own android app </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Utilize Coinmarketcap.com API to analyze crypto transaction PnL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Published Tucope App to Google Play Store</p>
            </li>

          </ul>
        </article>
        {/* END of UI */}


        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designed, Create, and Manage Pahamfilm.com</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designed, Create, and Manage twindofurniture.com</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designed, Create, and Manage rafahl.com</p>
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Other Opportunities</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Under Maintenance</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience
