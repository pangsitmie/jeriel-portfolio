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
              <p>Create a demo application for Yunlin University Startup competition</p>
            </li>
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
              <p>Redesign and implement cloudprogrammingonline.com using
                figma for UI/UX, and react to create the actual website</p>
            </li>
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
            <h3>Unity Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create a highly scalable marketing app to promote entertainment retail stores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Utilize REST API, GraphQL for connecting front-end and back-end.</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience
