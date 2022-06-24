import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/tucope.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/coin_toss_kmeans.jpg'
import IMG4 from '../../assets/MRI_kmeans.jpg'
import IMG5 from '../../assets/coming_soon.jpg'
import IMG6 from '../../assets/coming_soon.jpg'


const data = [
  {
    id:1,
    image: IMG1,
    title: 'Tucope Android App',
    github: 'https://github.com/pangsitmie/Tucope',
    demo: 'https://play.google.com/store/apps/details?id=com.roundbytes.myportfolio'
  },
  {
    id:2,
    image: IMG2,
    title: 'Food Rescue App',
    github: 'https://github.com/pangsitmie/Ustart',
    demo: 'https://github.com/pangsitmie/Ustart'
  },
  {
    id:3,
    image: IMG3,
    title: 'Coin Toss Distribution Analysis',
    github: 'https://github.com/pangsitmie/Pattern-Recognition/tree/main/PROJECTS',
    demo: 'https://github.com/pangsitmie/Pattern-Recognition/tree/main/PROJECTS'
  },
  {
    id:4,
    image: IMG4,
    title: 'MRI K-Means Analysis',
    github: 'https://github.com/pangsitmie/Pattern-Recognition/tree/main/PROJECTS/project_4',
    demo: 'https://github.com/pangsitmie/Pattern-Recognition/tree/main/PROJECTS/project_4'
  },
  {
    id:5,
    image: IMG5,
    title: 'Wait For The Next Update :)',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:6,
    image: IMG6,
    title: 'Wait For The Next Update :)',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image,title,github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div> 
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">See More</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio