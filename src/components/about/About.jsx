import React from 'react'
import './about.css'
import ME from '../../assets/jeriel_profile.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiCheck } from 'react-icons/bi'



const About = () => {
  return (
    <section id='about'>
      <h5 className='text-subtitle'>Get To Know</h5>
      <h2 className='text-title'>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About Jeriel" />
          </div>
        </div>

        <div className="about__content">
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

          <p className='description'>
            Hello! My name is Jeriel and
            I love to create and something that make people's life easier while still making the product as attractive as possible

            My interest in Web & App Development started back in 2020 when I decided to try creating app to help manage my crypto transactions —
            turns out it was so much fun and this project taught me a lot about android app developemtn, app Architecture and many more.
            <br /><br />
            Fast-forward to today, and I’ve had the privilege of working at an a <em>start-up, intern at a well known company, and
              joined a business with my friends.</em> My main focus these days is building beautiful, accessible, and highly scalebale
            products and digital experiences for clients.
            <br /><br />
            I launched an android app that I created to organize crypto transactions in a more user-friendly way called Tucope,
            and I also completely redesigned my company's website from scratch to boost their brand image and engagement.
            <br /><br />
            Here are a few technologies I’ve been working with recently:
          </p>

          <ul className="tech__list">
            <li>
              <BiCheck className='tech__list-icon' />
              <p>Android</p>
            </li>
            <li>
              <BiCheck className='tech__list-icon' />
              <p>Java</p>
            </li>
            <li>
              <BiCheck className='tech__list-icon' />
              <p>Python</p>
            </li>
            <li>
              <BiCheck className='tech__list-icon' />
              <p>React</p>
            </li>
            <li>
              <BiCheck className='tech__list-icon' />
              <p>MySQL</p>
            </li>
            <li>
              <BiCheck className='tech__list-icon' />
              <p>Unity</p>
            </li>
          </ul>

          {/* <a href="#contact" className='btn btn-primary'>Let's talk</a> */}

        </div>
      </div>

    </section>

  )
}

export default About