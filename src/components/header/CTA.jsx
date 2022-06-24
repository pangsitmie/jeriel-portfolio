import React from 'react'
import CV from '../../assets/jeriel_resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Say Hello</a>
    </div>
  )
}

export default CTA