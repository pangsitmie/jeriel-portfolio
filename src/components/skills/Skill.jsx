import React from 'react'
import './skill.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Skill = () => {
  return (
    <section id='skill' className="skill-bg">
      <h5 className='text-subtitle'>My Field of</h5>
      <h2 className='text-title'>Expertise</h2>

      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}
        <div className="skill__android">
          <h3>Android Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Android Studio</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>JAVA</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>XML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Utilizing API</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF ANDROID */}
        <div className="skill__python">
          <h3>Data Science</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Matplotlib</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Pandas</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Pattern Recognition</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF PYTHON */}
      </div>

    </section>
  )
}

export default Skill