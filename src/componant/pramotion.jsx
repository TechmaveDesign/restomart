import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Pramotion = ({}) => {


  const bannerData = [
    {
      image: 'images/banner-6.png',
    },
    {
      image: 'images/banner-7.png',
    }
    
  ];

      const sliderSettings = {
        dots: false,
        fade:true,
        animation:true,
        infinite: true,
        autoplay:true,
        arrow:false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,

      };

  return (
      <div className="Pramotion">
        <Slider {...sliderSettings}>
          {bannerData.map((banner, index) => (
            <div key={index} className="Pramotion-banner">
              <img src={banner.image} alt={`slider-${index}`} />
            </div>
          ))}
        </Slider>
      </div>
  );
};

export default Pramotion;

