import React from 'react'
import './qualification.css'
import { GiGraduateCap } from 'react-icons/gi'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { BsFillCalendarRangeFill } from 'react-icons/bs'




const Qualification = () => {

  const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target)

      tabContents.forEach(tabContent => {
        tabContent.classList.remove('qualification__active')
        console.log(tabContent.classList)
      })
      target.classList.add('qualification__active')

      tabs.forEach(tab => {
        tab.classList.remove('qualification__active')
        console.log("clicked")
      })
      tab.classList.add('qualification__active')
    })
  })

  return (
    <section className='qualification section' id='qualification' >
      <h5 className='text-subtitle'>My Journey</h5>
      <h2 className='text-title'>Qualification</h2>

      <div className='qualification__container container'>
        <div className="qualification__tabs">
          <div className="qualification__button button--flex qualification__active" data-target='#education'>
            <GiGraduateCap className='qualification__icon' />
            Education
          </div>

          <div className="qualification__button button--flex" data-target='#work'>
            <BsFillBriefcaseFill className='qualification__icon' />
            Work
          </div>
        </div>

        <div className="qualification__sections">

          {/* =======================QUALIFICATION CONTENT 1 = EDUCATION =======================*/}
          <div className="qualification__content qualification__active" data-content id="education">

            {/* QUALIFICATION1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SMA Gloria 1</h3>
                <span className="qualification__subtitle">Indonesia - High School</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  2016-2019
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
                {/* <span className='qualification__line'></span> */}
              </div>

              <div>
                <h3 className="qualification__title">National Yunlin University</h3>
                <span className="qualification__subtitle">Taiwan - University</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  2019-Present
                </div>
              </div>

            </div>
          </div>


          {/*================================ QUALIFICATION CONTENT 2 = WORK SECTION ========================*/}
          <div className="qualification__content" data-content id="work">
            {/* QUALIFICATION1 */}
            <div></div>
            <div className="qualification__data">
              <div>
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
              <div>
                <h3 className="qualification__title">Wordpress Engineer</h3>
                <span className="qualification__subtitle">Design, Implement, Mantaining other companies website</span>
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
