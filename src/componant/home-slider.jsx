import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom"; // Corrected import

const HeroBannerCard = () => {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      setTimeout(() => setCopiedText(""), 2000);
    });
  };

  const bannerData = [
    {
      image: "images/slider-1.webp",
      title: "Quality Freshness Guaranteed!",
      description: "Intrinsicly fashion performance based products rather than accurate benefits...",
      link: "#",
    },
    {
      image: "images/slider-2.webp",
      title: "Best Different Type of Grocery Store",
      description: "Intrinsicly fashion performance based products rather than accurate benefits...",
      link: "#",
    },
    {
      image: "images/slider-3.webp",
      title: "Quality Freshness Guaranteed!",
      description: "Intrinsicly fashion performance based products rather than accurate benefits...",
      link: "#",
    },
    {
        image: "images/slider-1.webp",
        title: "Quality Freshness Guaranteed!",
        description: "Intrinsicly fashion performance based products rather than accurate benefits...",
        link: "#",
      },
      {
        image: "images/slider-2.webp",
        title: "Best Different Type of Grocery Store",
        description: "Intrinsicly fashion performance based products rather than accurate benefits...",
        link: "#",
      },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false, // Fixed typo in "arrow"
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [time, setTime] = useState({
    days: 1,
    hours: 10,
    minutes: 43,
    seconds: 34,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      updateCounter();
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval
  }, [time]);

  const updateCounter = () => {
    let { days, hours, minutes, seconds } = time;

    if (seconds > 0) {
      seconds -= 1;
    } else {
      seconds = 59;
      if (minutes > 0) {
        minutes -= 1;
      } else {
        minutes = 59;
        if (hours > 0) {
          hours -= 1;
        } else {
          hours = 23;
          if (days > 0) {
            days -= 1;
          } else {
            clearInterval(); // Properly handled the stop condition
          }
        }
      }
    }

    setTime({ days, hours, minutes, seconds });
  };

  return (
    <div className="banner-wrap w-full h-full mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
      <div className="banner-slider">
        <Slider {...sliderSettings}>
          {bannerData.map((banner, index) => (
            <div key={index} className="banner-box">
              <img src={banner.image} alt={banner.title} />
              <div className="banner-text">
                <h2>{banner.title}</h2>
                <p>{banner.description}</p>
                {/* <Link to={banner.link}>Shop Now</Link> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="offer-wrap">
        <h6>Latest Super Discount Active Coupon Code</h6>
        {["SUMMER24", "WINTER24"].map((coupon, index) => (
          <div className="offer-box-wrap" key={index}>
            <div className="offer-box">
              <div className="offer-img">
                <img src="images/offer1.webp" alt={`Offer ${index + 1}`} />
              </div>
              <div className="offer-text">
                <h5>
                  <label>10%</label> Off <span>Inactive</span>
                </h5>
                <p>Summer Gift Voucher</p>
                <div className="number-counter">
                  <span>{time.days.toString().padStart(2, "0")}</span>:
                  <span>{time.hours.toString().padStart(2, "0")}</span>:
                  <span>{time.minutes.toString().padStart(2, "0")}</span>:
                  <span>{time.seconds.toString().padStart(2, "0")}</span>
                </div>
              </div>
              <div className="copy-wrap">
                <button onClick={() => handleCopy(coupon)}>
                  {copiedText === coupon ? "Copied!" : coupon}
                </button>
                <p>
                  * This coupon applies when shopping more than <b>RS.500</b>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBannerCard;
