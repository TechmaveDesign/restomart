import React,{ useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import SimilarProducts from '../componant/Similar-Products'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InnerBanner from "../componant/inner-banner";
import Snackbar from "@mui/material/Snackbar";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const VenderPage = () => {
  const mainSliderRef = useRef(null);
  const navSliderRef = useRef(null);
  const [quantities, setQuantities] = useState({});
  const [mainSliderSettings, setMainSliderSettings] = useState({});
  const [visibleAddButtons, setVisibleAddButtons] = useState({});

  const toggleAddButton = (id) => {
    setVisibleAddButtons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const products = [
    {
      id: 1,
      name: "Fresh Garden Broccoli",
      price: 12,
      originalPrice: 15,
      imgSrc: "images/products/p-7-2.png",
      vendorName: "Albertsons",
      vendorImage: "images/vender-logo1.png",
      minOrder: "Wednesday, 24 December 10:00 AM",
      rate: "5.0/5.0 (32 reviews)",
    },
    {
      id: 2,
      name: "Fresh Green Broccoli",
      price: 10,
      originalPrice: 13,
      imgSrc: "images/products/p-7-1.png",
      vendorName: "Giantmart.com",
      vendorImage: "images/vender-logo2.png",
      minOrder: "Wednesday, 25 December 12:30 PM",
      rate: "5.0/3.0 (50 reviews)",
    },
    {
      id: 3,
      name: "Organic Broccoli",
      price: 14,
      originalPrice: 18,
      imgSrc: "images/products/p-7-2.png",
      vendorName: "Walmart",
      vendorImage: "images/vender-logo3.png",
      minOrder: "Wednesday, 28 December 01:30 PM",
      rate: "5.0/4.5 (100 reviews)",
    },
    {
      id: 4,
      name: "Premium Broccoli",
      price: 16,
      originalPrice: 20,
      imgSrc: "images/products/p-7-1.png",
      vendorName: "Free delivery",
      vendorImage: "images/vender-logo4.png",
      minOrder: "Wednesday, 25 December 12:30 PM",
      rate: "5.0/5.0 (12 reviews)",
    },
  ];

  useEffect(() => {
    document.body.classList.add("vender-page-body");
    return () => {
      document.body.classList.remove("vender-page-body");
    };
  }, []);

  // const increment = (id) => {
  //   setQuantities((prevQuantities) => ({
  //     ...prevQuantities,
  //     [id]: Math.min((prevQuantities[id] || 1) + 1, 10),
  //   }));
  // };

  const decrement = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      const newQuantity = Math.max((prevQuantities[id] || 1) - 1, 0);

      if (newQuantity === 0) {
        delete newQuantities[id];
      } else {
        newQuantities[id] = newQuantity;
      }

      return newQuantities;
    });
  };


    const [state, setState] = React.useState({
      open: false,
      vertical: "top",
      horizontal: "center",
    });
    const { vertical, horizontal, open } = state;
    const increment = (index) => {
      if (index === undefined || index < 0) {
        console.error("Invalid index provided");
        return;
      }
      handleClick({ vertical: "top", horizontal: "center" })();
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [index]: Math.min((prevQuantities[index] || 1) + 1, 10),
      }));
    };
    const handleClick = (newState) => () => {
      setState({ ...newState, open: true });
    };
  
    const handleClose = () => {
      setState({ ...state, open: false });
    };

  return (
    <>
    <InnerBanner li1="Home" li2="Venders" />
      <div className="padding-class">
        <div className="all-vender-show">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <div className="proslider-details">
                        <div className="product-Box">
                          <img src="images/products/p-38-m.png" alt='Broccoli' />
                        </div>
                        <div className="product-discription">
                    <h2> Broccoli Lorem Ipsum text here </h2>
                    <span className="kg-box">1 kg</span>
                    <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam consequatur quam non libero sed! Iusto eligendi aut quidem adipisci numquam id, voluptates molestias necessitatibus.</p>
                    <span className="dates">20+ Vender are dealing this product</span>
                    </div>
                  </div>
              </div>
              <div className="col-md-12">
                <div className="Main-vender-wrap">
                    <div className="row">
                        {products.map((product, index) => (
                            <div className="col-md-3">
                        <div key={product.id} className="Main-vender-all">
                            <div className="vender-logo">
                             <img src={product.vendorImage} alt={product.vendorName} />
                            </div>
                            <div className="cart-vender-wrap">
                            <h5>
                            ${product.price} <del className="del">${product.originalPrice}</del>{" "}
                            <label>{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</label>
                            </h5>
                            <p className="mb-2 dates"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20"><path fill="currentColor" d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z"/></svg> 
                            {product.minOrder}</p>
                            <p className="vendorName mb-2">{product.vendorName}</p>
                            <span>
                                {product.rate.split("/")[0]}/<b>{product.rate.split("/")[1].split(" ")[0]}</b> (
                                {product.rate.split("(")[1]}
                                <img src="images/star.svg" />
                                <img src="images/star.svg" />
                                <img src="images/star.svg" />
                                <img src="images/star-blank.svg" />
                            </span>

                            <div className="delevery-timing">
                                <div className="add-button-wrappers">
                                <button onClick={() => toggleAddButton(product.id)}>
                                    <img src="images/cart.png" alt="cart" />
                                    Add to cart
                                </button>
                              {visibleAddButtons[product.id] && (
                                <div className="add-button">
                                  <div className="increment-wrap">
                                    <button onClick={() => decrement(product.id)}>-</button>
                                    <span>{quantities[product.id] || 1}</span>
                                    <button
                                  onClick={() => increment(index)}
                                  disabled={(quantities[index] || 1) >= 10}
                                >
                                  <Snackbar
                                    anchorOrigin={{ vertical, horizontal }}
                                    open={open}
                                    onClose={handleClose}
                                    autoHideDuration={100000}
                                    message={
                                      <span style={{ display: "flex", alignItems: "center" }}>
                                       <CheckCircleOutlineIcon /> Add To Cart
                                      </span>
                                    }
                                    key={`${vertical}-${horizontal}`}
                                    className="addToCart"/>                     
                                  +
                                </button>
                                  </div>
                                </div>
                              )}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SimilarProducts />
      </div>
    </>
  );
};

export default VenderPage;
