import React from "react";
import "./portfolio.css";
import { motion } from "framer-motion";
import MOONZ_PDF from "../../assets/MOONZ_PDF.pdf";
import IMG1 from "../../assets/gamepay.png";
import IMG2 from "../../assets/yuncheng.png";
import IMG3 from "../../assets/alliance.png";
import { useInView } from "react-intersection-observer";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Game Pay",
    redirect: "/gamepay"
  },
  {
    id: 2,
    image: IMG2,
    title: "雲程在線 Website",
    redirect: "/yuncheng"
  },
  {
    id: 3,
    image: IMG3,
    title: "Claw Machine Alliance",
    redirect: "/alliance"
  },
];

const Portfolio = () => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100, triggerOnce: true });
  return (
    <section id="portfolio" className={`hidden ${inView ? 'show' : ' '}`} ref={ref}>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, redirect }) => {
          return (
            <article key={id} className="portfolio__item">
              <a href={redirect}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
