
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';

const Category = () => {

   const category = [
      {
        imgSrc: 'images/category1.png',
        name: 'For you',
      },
      {
        imgSrc: 'images/category2.png',
        name: 'Restaurants',
      },
      {
        imgSrc: 'images/category3.png',
        name: 'Fast Food',
      },
      {
        imgSrc: 'images/category4.png',
        name: 'Cafe',
      },
      {
        imgSrc: 'images/category5.png',
        name: 'Caterer',
      },
      {
        imgSrc: 'images/category1.png',
        name: 'For you',
      },
      {
        imgSrc: 'images/category2.png',
        name: 'Restaurants',
      },
      {
        imgSrc: 'images/category3.png',
        name: 'Fast Food',
      },
      {
        imgSrc: 'images/category4.png',
        name: 'Cafe',
      },
      {
        imgSrc: 'images/category5.png',
        name: 'Caterer',
      },
      {
        imgSrc: 'images/category1.png',
        name: 'For you',
      },
      {
        imgSrc: 'images/category2.png',
        name: 'Restaurants',
      },
      {
        imgSrc: 'images/category3.png',
        name: 'Fast Food',
      },
      {
        imgSrc: 'images/category4.png',
        name: 'Cafe',
      },
      {
        imgSrc: 'images/category5.png',
        name: 'Caterer',
      }
    ];

    // Slick slider settings
    const sliderSettings = {
      dots: false,
      infinite: true,
      autoplay:true,
      arrow:true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
  
  return (
    <div className="banner-wrap w-full h-full mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
      <div className="category">
      <Slider {...sliderSettings}>
        {category.map((vendor, index) => (
            <div className='category-box-wrap'>
          <div key={index} className="category-box">
             <a href="/ProductPage">
            <div className="category-img">
              <img src={vendor.imgSrc} alt={vendor.name} />
            </div>
            <h6>{vendor.name}</h6>
            </a>
          </div>
          </div>
        ))
        }
        </Slider>
      </div>
</div>
  );
};

export default Category;
