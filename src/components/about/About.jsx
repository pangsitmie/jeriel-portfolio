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
            As a web developer, I specialize in creating visually appealing and highly scalable digital products and experiences.
            I have gained valuable experience through an internship at a well-known company and by freelancing in the field, where I have honed my skills in building beautiful and accessible products for clients.
            <br /><br />
            I am committed to delivering high-quality work and innovative solutions that exceed my clients' expectations. With my expertise in developing visually appealing and scalable digital products, including websites and mobile apps, I help clients establish a strong and engaging online presence.
            <br /><br />
            Recently, I have been working with various cutting-edge technologies to provide the best possible results.
          </p>

          <ul className="tech__list">
            <li>
              <BiCheck className='tech__list-icon' />
              <p>React</p>
            </li>
            <li>
              <BiCheck className='tech__list-icon' />
              <p>TypeScript</p>
            </li>
            <li>
              <BiCheck className='tech__list-icon' />
              <p>Styled Componenets</p>
            </li>
            <li>
              <BiCheck className='tech__list-icon' />
              <p>Tailwind</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About