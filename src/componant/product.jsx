import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Product = () => {
  const [visibleIncrementDecrement, setVisibleIncrementDecrement] = useState({});
  const [quantities, setQuantities] = useState({});
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

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
        "images/products/p-1.png",
        "images/products/p-1-1.png",
        "images/products/p-1-2.png",
      ],
      "title": "Fresh Green Spinach",
      "originalPrice": 15.64,
      "discountPercentage": '21%',
      "currentPrice": 12.34,
      'kg':'1kg',
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-2.png",
        "images/products/p-2-1.png",
        "images/products/p-2-2.png",
      ],
      "title": "Crisp Red Bell Pepper",
      "originalPrice": 25.64,
      "currentPrice": 21.53,
      'kg':'500gm',
      inStock: false,
    },
    {
      imgSrc: [
        "images/products/p-20.png",
        "images/products/p-20-1.png",
        "images/products/p-20-2.png",
      ],
      "title": "Organic Yellow Corn",
      "originalPrice": 28.64,
      "currentPrice": 20.31,
      'kg':'500gm',
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-4.png",
        "images/products/p-4-1.png",
        "images/products/p-4-2.png",
      ],
      "title": "Ripe Cherry Tomatoes",
      "originalPrice": 12.64,
      "discountPercentage": '34%',
      "currentPrice": 8.33,
      'kg':'1kg',
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-28.png",
        "images/products/p-28-1.png",
        "images/products/p-28-2.png",
      ],
      "title": "Fresh Garden Carrots",
      "originalPrice": 30.64,
      "currentPrice": 26.96,
      'kg':'25gm',
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-6.png",
        "images/products/p-6-1.png",
        "images/products/p-6-2.png",
      ],
      "title": "Crisp Green Cucumber",
      "originalPrice": 43.64,
      "discountPercentage": '19%',
      "currentPrice": 35.31,
      'kg':'1kg',
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-20.png",
        "images/products/p-20-1.png",
        "images/products/p-20-2.png",
      ],
      "title": "Sweet Butternut Squash",
      "originalPrice": 18.64,
      "discountPercentage": '24%',
      "currentPrice": 14.14,
      'kg':'2kg',
      inStock: false,
    },
    {
      imgSrc: [
        "images/products/p-8.png",
        "images/products/p-8-1.png",
        "images/products/p-8-2.png",
      ],
      "title": "Leafy Green Kale",
      "originalPrice": 16.64,
      "currentPrice": 12.94,
      'kg':'1kg',
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-30.png",
        "images/products/p-30-1.png",
        "images/products/p-30-2.png",
      ],
      "title": "Fresh Zucchini",
      "originalPrice": 11.64,
      "discountPercentage": '15%',
      'kg':'1.5kg',
      "currentPrice": 9.91,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-10.png",
        "images/products/p-10-1.png",
        "images/products/p-10-2.png",
      ],
      "title": "Bright Orange Pumpkin",
      "originalPrice": 22.64,
      "currentPrice": 20.38,
      'kg':'1kg',
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-11.png",
        "images/products/p-11-1.png",
        "images/products/p-11-2.png",
      ],
      "title": "Juicy Red Radish",
      "originalPrice": 5.64,
      "discountPercentage": '30%',
      "currentPrice": 3.95,
      'kg':'500gm',
      inStock: false,
    },
    {
      imgSrc: [
        "images/products/p-12.png",
        "images/products/p-12-1.png",
        "images/products/p-12-2.png",
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
        <h2 className="common-text">All Products</h2>
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

export default Product;

