import React from 'react';
import { Fade } from 'react-slideshow-image';
// import "../style.css";
import "react-slideshow-image/dist/styles.css";



const fadeImages = [
  {
    url: "/images/slide1.jpg"
  },
  {
    url: "/images/slide2.jpg"
  },
  {
    url: "/images/slide3.jpg"
  },
  {
    url: "/images/slide4.jpg"
  }
];

const Slideshow = () => {
  return (
    <div>
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="slide-container" key={index}>
            <img className="slide-images" src={fadeImage.url} alt={"Slideshow of photography"} />
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow;