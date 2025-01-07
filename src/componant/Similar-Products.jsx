import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SimilarProducts = () => {
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

  const SimilarProductsWrap = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const products = [
    {
      imgSrc: [
        "images/products/p-1.png",
        "images/products/p-1-1.png",
        "images/products/p-1-2.png",
      ],
      title: "Fresh Green Spinach",
      originalPrice: 15.64,
      discountPercentage: "21%",
      kg: "1.5kg",
      currentPrice: 12.34,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-2.png",
        "images/products/p-2-1.png",
        "images/products/p-2-2.png",
      ],
      title: "Crisp Red Bell Pepper",
      originalPrice: 25.64,
      kg: "2.5kg",
      currentPrice: 21.53,
      inStock: false,
    },
    {
      imgSrc: [
        "images/products/p-20.png",
        "images/products/p-20-1.png",
        "images/products/p-20-2.png",
      ],
      title: "Organic Yellow Corn",
      originalPrice: 28.64,
      kg: "1kg",
      currentPrice: 20.31,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-4.png",
        "images/products/p-4-1.png",
        "images/products/p-4-2.png",
      ],
      title: "Ripe Cherry Tomatoes",
      originalPrice: 12.64,
      kg: "500gm",
      discountPercentage: "34%",
      currentPrice: 8.33,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-28.png",
        "images/products/p-28-1.png",
        "images/products/p-28-2.png",
      ],
      title: "Fresh Garden Carrots",
      originalPrice: 30.64,
      kg: "250gm",
      currentPrice: 26.96,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-6.png",
        "images/products/p-6-1.png",
        "images/products/p-6-2.png",
      ],
      title: "Crisp Green Cucumber",
      originalPrice: 43.64,
      discountPercentage: "19%",
      kg: "1.5kg",
      currentPrice: 35.31,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-20.png",
        "images/products/p-20-1.png",
        "images/products/p-20-2.png",
      ],
      title: "Sweet Butternut Squash",
      originalPrice: 18.64,
      discountPercentage: "24%",
      kg: "1kg",
      currentPrice: 14.14,
      inStock: false,
    },
    {
      imgSrc: [
        "images/products/p-8.png",
        "images/products/p-8-1.png",
        "images/products/p-8-2.png",
      ],
      title: "Leafy Green Kale",
      originalPrice: 16.64,
      kg: "1.5kg",
      currentPrice: 12.94,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-30.png",
        "images/products/p-30-1.png",
        "images/products/p-30-2.png",
      ],
      title: "Fresh Zucchini",
      originalPrice: 11.64,
      discountPercentage: "15%",
      kg: "500gm",
      currentPrice: 9.91,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-10.png",
        "images/products/p-10-1.png",
        "images/products/p-10-2.png",
      ],
      title: "Bright Orange Pumpkin",
      originalPrice: 22.64,
      kg: "1kg",
      currentPrice: 20.38,
      inStock: true,
    },
    {
      imgSrc: [
        "images/products/p-11.png",
        "images/products/p-11-1.png",
        "images/products/p-11-2.png",
      ],
      title: "Juicy Red Radish",
      originalPrice: 5.64,
      discountPercentage: "30%",
      kg: "2kg",
      currentPrice: 3.95,
      inStock: false,
    },
    {
      imgSrc: [
        "images/products/p-12.png",
        "images/products/p-12-1.png",
        "images/products/p-12-2.png",
      ],
      title: "Golden Sweet Potato",
      originalPrice: 32.64,
      kg: "1.5kg",
      currentPrice: 26.75,
      inStock: true,
    },
  ];

  return (
    <div className="Vendors-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="common-text">Similar Products</h2>
          </div>
          <Slider {...SimilarProductsWrap}>
            {products.map((item, index) => (
              <div className="SimilarProductsWrap" key={index}>
                <a href="/venderpage">
                  <article
                    className={`product-Box ${!item.inStock && "opacity-50"}`}
                    onClick={() => item.inStock && handleArticleClick(item)}
                  >
                    <div className="proslider">
                      <Slider {...sliderSettings}>
                        {item.imgSrc.map((src, idx) => (
                          <div
                            key={idx}
                            className="overflow-hidden max-w-[190px] mx-auto"
                          >
                            <img src={src} alt={item.title} />
                          </div>
                        ))}
                      </Slider>
                      {item.discountPercentage && (
                        <span className="off-price red">
                          -{item.discountPercentage}
                        </span>
                      )}
                      {!item.inStock && (
                        <>
                          <span className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-xs off-price red">
                            Out of Stock
                          </span>
                          <span className="text-red-500 Unavailable">
                            Unavailable
                          </span>
                        </>
                      )}
                    </div>
                    <div className="px-3 pb-3 lg:pb-3 title-count-wraps">
                      <p>{item.title}</p>
                      <span>{item.kg}</span>
                      <div
                        className={`add-button ${
                          !item.inStock ? "cursor-not-allowed" : ""
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      ></div>
                    </div>
                  </article>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
