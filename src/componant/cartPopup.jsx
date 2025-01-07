import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const CartPopup = ({ data, setData }) => {
  const handleClosePopup = () => {
    setData(false);
  };

  // Initialize state for product counts
  const [productCounts, setProductCounts] = useState({
    productData: [1, 1], // Initial count for each product in productData
    productData2: [1, 1], // Initial count for each product in productData2
  });

  const handleIncrement = (vendorKey, index) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [vendorKey]: prevCounts[vendorKey].map((count, i) =>
        i === index ? Math.min(count + 1, 10) : count
      ),
    }));
  };

  const handleDecrement = (vendorKey, index) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [vendorKey]: prevCounts[vendorKey].map((count, i) =>
        i === index ? Math.max(count - 1, 1) : count
      ),
    }));
  };

  const stars = [
    {
      star: "images/star.svg",
      star2: "images/star-blank.svg",
    },
  ];

  const productData = {
    stars: [
      {
        product: "images/products/p-6.png",
        price: "$12.34",
        name: "Fresh Green Spinach",
        originalPrice: "$15.64",
        time: "31 Dec 24, 5:24 PM",
      },
      {
        product: "images/products/p-26.png",
        price: "$8.49",
        name: "Honey Almond Nuts",
        originalPrice: "$12.64",
      },
    ],
  };

  const productData2 = {
    stars: [
      {
        product: "images/products/p-13.png",
        price: "$12.34",
        name: "Fresh Green Spinach",
        originalPrice: "$15.64",
      },
      {
        product: "images/products/p-31.png",
        price: "$8.49",
        name: "Honey Almond Nuts",
        originalPrice: "$12.64",
      },
    ],
  };

  return (
    <>
      {data && (
        <div className="filter-overlay" onClick={handleClosePopup}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="filter-wrap"
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            <header className="filters-header">
              <h2>
                Cart
                <button className="close-button" onClick={handleClosePopup}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="24px"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                  </svg>
                </button>
              </h2>
            </header>
            <div className="cart-main-scroll">
              <div className="cart-main">
                <div className="cart-vender-wrap">
                  <div className="cart-vender-main">
                    <div className="cart-vender-img">
                      <img src="images/vender-logo1.png" alt="vender" />
                    </div>
                    <div className="cart-vender-text">
                      <h6>Albertsons Mart</h6>
                      {stars.map((item, index) => (
                        <span key={index}>
                          5.0/<b>5.0</b> (32 reviews) &nbsp; <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarHalfIcon />
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="delevery-timing">
                    <span>Delivery By</span>
                    <p className="mb-0">24 Dec 24, 1:24 PM</p>
                  </div>
                </div>
                <div>
                  {productData.stars.map((item, index) => (
                    <div key={index} className="cart-vender-wrap for-product">
                      <div className="cart-vender-main">
                        <div className="cart-vender-img">
                          <img src={item.product} alt="product" />
                        </div>
                        <div className="cart-vender-text">
                          <p>
                            {item.price}
                            <del>{item.originalPrice}</del>
                          </p>
                          <h6>{item.name}</h6>
                          <span>{item.time}</span>
                        </div>
                      </div>
                      <div className="delevery-timing">
                        <div className="increment-add-button">
                          <div className="increment-popup-wrap">
                            <button
                              onClick={() =>
                                handleDecrement("productData", index)
                              }
                            >
                              -
                            </button>
                            <span>{productCounts.productData[index]}</span>
                            <button
                              onClick={() =>
                                handleIncrement("productData", index)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cart-main">
                <div className="cart-vender-wrap">
                  <div className="cart-vender-main">
                    <div className="cart-vender-img">
                      <img src="images/vender-logo3.png" alt="vender" />
                    </div>
                    <div className="cart-vender-text">
                      <h6>Walmart</h6>
                      {stars.map((item, index) => (
                        <span key={index}>
                          5.0/<b>5.0</b> (32 reviews) &nbsp; <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarHalfIcon />
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="delevery-timing">
                    <span>Delivery By</span>
                    <p>24 Dec 24, 1:24 PM</p>
                  </div>
                </div>
                <div>
                  {productData2.stars.map((item, index) => (
                    <div key={index} className="cart-vender-wrap for-product">
                      <div className="cart-vender-main">
                        <div className="cart-vender-img">
                          <img src={item.product} alt="product" />
                        </div>
                        <div className="cart-vender-text">
                          <p>
                            {item.price}
                            <del>{item.originalPrice}</del>
                          </p>
                          <h6>{item.name}</h6>
                        </div>
                      </div>
                      <div className="delevery-timing">
                        <div className="increment-add-button">
                          <div className="increment-popup-wrap">
                            <button
                              onClick={() =>
                                handleDecrement("productData2", index)
                              }
                            >
                              -
                            </button>
                            <span>{productCounts.productData2[index]}</span>
                            <button
                              onClick={() =>
                                handleIncrement("productData2", index)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cart-main Missed">
                <p>Missed something?</p>
                <button>
                  <a href="/">+ Add More Items</a>
                </button>
              </div>
            </div>
            <div className="total-wrap-out">
              <div className="total-wrap">
                <p className="mb-2" style={{ textDecoration: "underline" }}>
                  Item subtotal (4 Items)
                </p>
                <p className="mb-2">$40.34</p>
              </div>
              <div className="total-wrap">
                <p className="mb-2">Total shipping charges</p>
                <p className="mb-2">$10.17</p>
              </div>
              <div className="total-wrap">
                <h4 className="mb-2">Total Price</h4>
                <h4 className="mb-2">$50.51</h4>
              </div>
              <button>
                <a href="/checkout"> Proceed To Checkout </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPopup;
