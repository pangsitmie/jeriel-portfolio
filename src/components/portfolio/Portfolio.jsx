import React from "react";
import "./portfolio.css";
import { motion } from "framer-motion";
import IMG1 from "../../assets/yuncheng.png";
import IMG2 from "../../assets/tucope.jpg";
import IMG3 from "../../assets/moonz_thumbnail.png";
import IMG4 from "../../assets/foodable_thumbnail.png";
import IMG5 from "../../assets/coin_toss_kmeans.jpg";
import IMG6 from "../../assets/MRI_kmeans.jpg";
import { useInView } from "react-intersection-observer";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "陸豪科技｜雲程在線 Website",
    github: "",
    demo: "https://cloudprogrammingonline.com/",
    figma: "https://www.figma.com/file/x3fxGmem6Ucd1QHZGY6Pv6/cloudprogrammingonline.com?node-id=0%3A1"
  },
  {
    id: 2,
    image: IMG2,
    title: "Tucope - Android App",
    github: "https://github.com/pangsitmie/Tucope",
    demo: "https://play.google.com/store/apps/details?id=com.roundbytes.myportfolio",
    figma: ""
  },
  {
    id: 3,
    image: IMG3,
    title: "Moonz - MVVM Android App",
    github: "https://github.com/pangsitmie/Ustart",
    demo: "https://github.com/pangsitmie/Ustart",
    figma: ""
  },
  {
    id: 4,
    image: IMG4,
    title: "Foodable - Android App",
    github: "https://github.com/pangsitmie/Ustart",
    demo: "https://github.com/pangsitmie/Ustart",
    figma: ""
  },
  {
    id: 5,
    image: IMG5,
    title: "Coin Toss Distribution Analysis",
    github:
      "https://github.com/pangsitmie/Pattern-Recognition/tree/main/PROJECTS",
    demo: "https://github.com/pangsitmie/Pattern-Recognition/tree/main/PROJECTS",
    figma: ""
  },
  {
    id: 6,
    image: IMG6,
    title: "MRI K-Means Analysis",
    github:
      "https://github.com/pangsitmie/Pattern-Recognition/tree/main/PROJECTS/project_4",
    demo: "https://github.com/pangsitmie/Pattern-Recognition/tree/main/PROJECTS/project_4",
    figma: ""
  },

];

const Portfolio = () => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100, triggerOnce: true });
  return (
    <section id="portfolio" className={`hidden ${inView ? 'show' : ' '}`} ref={ref}>
      <h5 className='text-subtitle'>My Recent Work</h5>
      <h2 className='text-title'>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, figma }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn"
                >
                  {(() => {
                    if (figma == "") {
                      return (
                        <a href={github} target="_blank" rel="noreferrer">Github</a>
                      )
                    }
                    else {
                      return (
                        <a href={figma} target="_blank" rel="noreferrer">Figma</a>
                      )
                    }
                  })()}

                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-primary"
                >
                  <a href={demo} target="_blank" rel="noreferrer">
                    See More
                  </a>
                </motion.button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
