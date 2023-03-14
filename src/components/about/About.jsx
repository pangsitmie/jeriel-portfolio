import React from 'react'
import './about.css'
import ME from '../../assets/jeriel_profile.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiCheck } from 'react-icons/bi'
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100, triggerOnce: true });
  return (
    <section id='about' className={`hidden ${inView ? 'show' : ' '}`} ref={ref}>
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
            As a web developer I specialize in developing visually appealing and highly scalable digital products and experiences.
            My experience includes an internship at a well-known company and freelancing in the field,
            where I have gained expertise in building beautiful and accessible products for clients.
            <br /><br />
            With a commitment to delivering high-quality work and a strong focus on innovation, I am dedicated to exceeding my clients' expectations and ensuring that their digital presence is both engaging and user-friendly.
            <br /><br />
            Whether you need a stunning website, a powerful mobile app, or a range of other digital solutions, I have the skills and expertise to deliver results that truly make a difference.
            <br /><br />
            Technologies I've been working with recently:
          </p>

          <ul className="tech__list">
            <li>
              <BiCheck className='tech__list-icon' />
              <p>React</p>
            </li>
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
              <p>Java Script</p>
            </li>
            <li>
              <BiCheck className='tech__list-icon' />
              <p>MySQL & GQL</p>
            </li>
            <li>
              <BiCheck className='tech__list-icon' />
              <p>Unity</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About