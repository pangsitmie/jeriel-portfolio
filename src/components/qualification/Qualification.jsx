import React, { useState } from 'react'
import './qualification.css'
import { GiGraduateCap } from 'react-icons/gi'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { BsFillCalendarRangeFill } from 'react-icons/bs'



const Qualification = () => {
  const [isActive, setActive] = useState(false);
  //true toggles Education, flase toggles work
  const toggleEducation = () => {
    setActive(true);
  };
  const toggleWork = () => {
    setActive(false);
  };


  return (
    <section className='qualification section' id='qualification' >
      <h5 className='text-subtitle'>My Journey</h5>
      <h2 className='text-title'>Qualification</h2>

      <div className='qualification__container container'>
        <div className="qualification__tabs">
          <div className={`qualification__button button--flex ${isActive ? 'qualification_icon_active' : null}`} onClick={toggleEducation} >
            <GiGraduateCap className='qualification__icon' />
            <p>Education</p>
          </div>

          {/* <div className="qualification__button button--flex" data-bs-target="#w"> */}
          <div className={`qualification__button button--flex ${isActive ? null : 'qualification_icon_active'}`} onClick={toggleWork}>
            <BsFillBriefcaseFill className='qualification__icon' />
            <p>Work</p>
          </div>
        </div>

        <div className="qualification__sections">

          {/* =======================QUALIFICATION CONTENT 1 = EDUCATION =======================*/}
          <div className={`qualification__content ${isActive ? 'qualification_active' : 'qualification_hidden'}`}>

            {/* QUALIFICATION1 */}
            <div className="qualification__data">
              <div className='container_left'>
                <h3 className="qualification__title">National Yunlin University</h3>
                <span className="qualification__subtitle">Taiwan - University</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  2019-Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            {/* QUALIFICATION 2 */}
            <div className="qualification__data">
              <div></div>   {/*nbuat spacing*/}

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className="qualification__title">Yunlin University Startup Team</h3>
                <span className="qualification__subtitle">Taiwan - University</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  2022-2023
                </div>
              </div>
            </div>


            {/* QUALIFICATION3 */}
            <div className="qualification__data">
              <div className='container_left'>
                <h3 className="qualification__title">Business Model Canvas Finalist</h3>
                <span className="qualification__subtitle">Indonesia - University</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  2020-Present
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            {/* QUALIFICATION 4 */}
            <div className="qualification__data">
              <div></div>   {/*nbuat spacing*/}

              <div>
                <span className='qualification__rounder'></span>
              </div>

              <div>
                <h3 className="qualification__title">Teaching Assistant</h3>
                <span className="qualification__subtitle">Taiwan - University</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  2020-2021
                </div>
              </div>
            </div>
          </div>


          {/*================================ QUALIFICATION CONTENT 2 = WORK SECTION ========================*/}
          {/* <div className="qualification__content" data-content id="w"> */}
          <div className={`qualification__content ${isActive ? 'qualification_hidden' : 'qualification_active'}`}>
            {/* QUALIFICATION1 */}
            <div></div>
            <div className="qualification__data">
              <div className='container_left'>
                <h3 className="qualification__title">Front-End Software Engineer</h3>
                <span className="qualification__subtitle">陸豪科技｜雲程在線</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  Sep 2022 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            {/* QUALIFICATION 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className="qualification__title">Android Developer</h3>
                <span className="qualification__subtitle">Personal project, Freelance, and Startup Competition</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  2020-Present
                </div>
              </div>
            </div>

            {/* QUALIFICATION 3 */}
            <div className="qualification__data">
              <div className='container_left'>
                <h3 className="qualification__title">Wordpress Engineer</h3>
                <span className="qualification__subtitle">Design, Implement, Mantaining other client's website</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  2020-Present
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
