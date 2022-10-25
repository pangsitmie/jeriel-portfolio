import React from 'react'
import './qualification.css'
import { BiCheck } from 'react-icons/bi'
import { GiGraduateCap } from 'react-icons/gi'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { BsFillCalendarRangeFill } from 'react-icons/bs'

// const tabs = document.querySelectorAll('[data-target]'),
//   tabContents = document.querySelectorAll('[data-content]')

// tabs.forEachtab(tab => {
//   tab.addEventListener('click', () => {
//     const target = document.querySelector(tab.dataset.target)

//     tabContents.forEach(tabContent => {
//       tabContent.classList.remove('qualification__active')
//     })
//     target.classList.add('qualification__Active')

//     tab.forEach(tab => {
//       tab.classList.remove('qualification__active')
//     })
//     tab.classList.add('qualification__active')
//   })
// })


const Qualification = () => {
  return (
    <section className='qualification section' id='qualification' >
      <h5 className='text-subtitle'>My Personal Journey</h5>
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
          <div className="qualification__content qualification__active" data-content id="education">
            {/* QUALIFICATION1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer ENgineer</h3>
                <span className="qualification__subtitle">Peru - University</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  2014-2015
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
                {/* <span className='qualification__line'></span> */}
              </div>

              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Spain - University</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  2014-2015
                </div>
              </div>
            </div>
          </div>

          {/* WORK SECTION */}
          <div className="qualification__content" data-content id="work">
            {/* QUALIFICATION1 */}
            <div></div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer ENgineer</h3>
                <span className="qualification__subtitle">Peru - University</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  2014-2015
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
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Spain - University</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  2014-2015
                </div>
              </div>
            </div>

            {/* QUALIFICATION 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Spain - University</span>
                <div className='qualification__calendar'>
                  <BsFillCalendarRangeFill className='calendar__icon' />
                  2014-2015
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
