import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SingleCategories = () => {
  const [visibleIncrementDecrement, setVisibleIncrementDecrement] = useState({});
  const [quantities, setQuantities] = useState({});

  // const increment = (index) => {
  //   setQuantities((prevQuantities) => ({
  //     ...prevQuantities,
  //     [index]: Math.min((prevQuantities[index] || 1) + 1, 10),
  //   }));
  // };

  // const decrement = (index) => {
  //   setQuantities((prevQuantities) => {
  //     const newQuantities = { ...prevQuantities };
  //     const newQuantity = Math.max((prevQuantities[index] || 1) - 1, 0);

  //     if (newQuantity === 0) {
  //       delete newQuantities[index];
  //       setVisibleIncrementDecrement((prevVisible) => ({
  //         ...prevVisible,
  //         [index]: false,
  //       }));
  //     } else {
  //       newQuantities[index] = newQuantity;
  //     }

  //     return newQuantities;
  //   });
  // };

  // const toggleIncrementDecrement = (index) => {
  //   setVisibleIncrementDecrement((prevVisible) => ({
  //     ...prevVisible,
  //     [index]: true,
  //   }));
  //   setQuantities((prevQuantities) => ({
  //     ...prevQuantities,
  //     [index]: prevQuantities[index] || 1,
  //   }));
  // };

  const handleArticleClick = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const products = [
    {
      imgSrc: [
        "images/products/p-16.png",
        "images/products/p-16-1.png",
        "images/products/p-16-2.png",
      ],
      "title": "Fresh Green Spinach",
      "originalPrice": 15.64,
      "discountPercentage": '21%',
      'kg':'1kg',
      "currentPrice": 12.34,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-17.png",
        "images/products/p-17-1.png",
        "images/products/p-17-2.png",
      ],
      "title": "Crisp Red Bell Pepper",
      'kg':'2kg',
      "originalPrice": 25.64,
      "currentPrice": 21.53,
      inStock: false,
    },
    {
      imgSrc: [
        "images/products/p-18.png",
        "images/products/p-18-1.png",
        "images/products/p-18-2.png",
      ],
      "title": "Organic Yellow Corn",
      "originalPrice": 28.64,
      'kg':'1kg',
      "currentPrice": 20.31,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-19.png",
        "images/products/p-20-1.png",
        "images/products/p-20-2.png",
      ],
      "title": "Ripe Cherry Tomatoes",
      "originalPrice": 12.64,
      'kg':'500gm',
      "discountPercentage": '34%',
      "currentPrice": 8.33,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-21.png",
        "images/products/p-21-1.png",
        "images/products/p-21-2.png",
      ],
      "title": "Fresh Garden Carrots",
      "originalPrice": 30.64,
      'kg':'250gm',
      "currentPrice": 26.96,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-22.png",
        "images/products/p-22-1.png",
        "images/products/p-22-2.png",
      ],
      "title": "Crisp Green Cucumber",
      "originalPrice": 43.64,
      "discountPercentage": '19%',
      'kg':'1kg',
      "currentPrice": 35.31,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-23.png",
        "images/products/p-23-1.png",
        "images/products/p-23-2.png",
      ],
      "title": "Sweet Butternut Squash",
      "originalPrice": 18.64,
      'kg':'1.5kg',
      "discountPercentage": '24%',
      "currentPrice": 14.14,
      inStock: false,
    },
    {
      imgSrc: [
        "images/products/p-24.png",
        "images/products/p-24-1.png",
        "images/products/p-24-2.png",
      ],
      "title": "Leafy Green Kale",
      "originalPrice": 16.64,
      'kg':'2kg',
      "currentPrice": 12.94,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-25.png",
        "images/products/p-25-1.png",
        "images/products/p-25-2.png",
      ],
      "title": "Fresh Zucchini",
      "originalPrice": 11.64,
      'kg':'100gm',
      "discountPercentage": '15%',
      "currentPrice": 9.91,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-26.png",
        "images/products/p-26-1.png",
        "images/products/p-26-2.png",
      ],
      "title": "Bright Orange Pumpkin",
      "originalPrice": 22.64,
      'kg':'1kg',
      "currentPrice": 20.38,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-27.png",
        "images/products/p-27-1.png",
        "images/products/p-28-2.png",
      ],
      "title": "Juicy Red Radish",
      "originalPrice": 5.64,
      "discountPercentage": '30%',
       'kg':'2kg',
      "currentPrice": 3.95,
      inStock: false,
    },
    {
      imgSrc: [
        "images/products/p-29.png",
        "images/products/p-29-1.png",
        "images/products/p-29-2.png",
      ],
      "title": "Golden Sweet Potato",
      "originalPrice": 32.64,
      'kg':'1kg',
      "currentPrice": 26.75,
      inStock: true,
    }
  ]
  

  return (
    <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
      <div className="Vendors-wrap">
        <h2 className="common-text">🔥 Hot Product Sale</h2>
        <div className="container-fluid">
          <div className="row">
            {products.map((item, index) => (
              <div className="col-md-2 mb-4" key={index}>
                <a href="/venderpage">
                <article
                  className={`product-Box ${!item.inStock && "opacity-50"}`}
                  onClick={() => item.inStock && handleArticleClick(item)}
                >
                  <div className="proslider">
                    <Slider {...sliderSettings}>
                      {item.imgSrc.map((src, idx) => (
                        <div key={idx} className="outLine">
                          <img src={src} alt={item.title} />
                        </div>
                      ))}
                    </Slider>
                    {item.discountPercentage && (
                      <span className="off-price red">-{item.discountPercentage}</span>
                    )}
                    {!item.inStock && (
                      <><span className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-xs off-price red">
                          Out of Stock
                        </span><span className="text-red-500 Unavailable">Unavailable</span></>
                    )}
                  </div>
                  <div className="px-3 pb-3 lg:pb-3 title-count-wraps">
                    <p>
                      {item.title}
                    </p>
                    <span>{item.kg}</span>
                    <div
                      className={`add-button ${!item.inStock ? "cursor-not-allowed" : ""}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* {item.inStock ? (
                        !visibleIncrementDecrement[index] ? (
                          <button onClick={() => toggleIncrementDecrement(index)}>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="20px"
                              width="20px"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                            </svg>
                          </button>
                        ) : (
                          <div className="increment-wrap">
                            <button onClick={() => decrement(index)}>-</button>
                            <span>{quantities[index]}</span>
                            <button
                              onClick={() => increment(index)}
                              disabled={(quantities[index] || 1) >= 10}
                            >
                              +
                            </button>
                          </div>
                        )
                      ) : (
                        <span className="text-red-500">Unavailable</span>
                      )} */}
                    </div>
                  </div>
                </article>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategories;

