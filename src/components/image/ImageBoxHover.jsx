import React from 'react';
import { useInView } from "react-intersection-observer";
import './imageBoxHover.css';

const ImageBoxHover = ({ props }) => {
    const image = props.image;
    const text = props.text;

    console.log(text);

    const { ref, inView } = useInView({ trackVisibility: true, delay: 100, triggerOnce: true });

    return (
        <div className={`hidden ${inView ? 'show' : ' '}`} ref={ref} >
            <article className="imageBox_item" >
                <div className="imageBox_item-image" >
                    <img src={image} />
                </div>
                <h3>{text}</h3>
            </article>
        </div>
    )
}
export default ImageBoxHover