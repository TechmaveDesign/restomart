import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Snackbar from "@mui/material/Snackbar";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [quantities, setQuantities] = useState({});
  const [visibleIncrementDecrement, setVisibleIncrementDecrement] = useState(
    {}
  );

  const decrement = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      const newQuantity = Math.max((prevQuantities[index] || 1) - 1, 0);

      if (newQuantity === 0) {
        delete newQuantities[index];
        setVisibleIncrementDecrement((prevVisible) => ({
          ...prevVisible,
          [index]: false,
        }));
      } else {
        newQuantities[index] = newQuantity;
      }

      return newQuantities;
    });
  };

  const toggleIncrementDecrement = (index) => {
    setVisibleIncrementDecrement((prevVisible) => ({
      ...prevVisible,
      [index]: true,
    }));
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: prevQuantities[index] || 1,
    }));
  };

  const products = [
    {
      imgSrc: [
        "images/products/p-1.png",
        "images/products/p-1-1.png",
        "images/products/p-1-2.png",
      ],
      title: "Crunchy Potato Chips",
      price: "$ 5.99",
      originalPrice: "$ 7.49",
      inStock: true,
      category: "Vegetables",
      categoryImg: "images/catagory/catagory1.png",
      currentPrice: "12.34",
      discountPercentage: "21%",
    },
    {
      imgSrc: [
        "images/products/p-5.png",
        "images/products/p-5-1.png",
        "images/products/p-5-2.png",
      ],
      title: "Crunchy Potato Chips",
      price: "$ 5.99",
      originalPrice: "$ 7.49",
      inStock: true,
      category: "Vegetables",
      categoryImg: "images/catagory/catagory1.png",
      currentPrice: "12.34",
      discountPercentage: "21%",
    },
    {
      imgSrc: [
        "images/products/p-6.png",
        "images/products/p-6-1.png",
        "images/products/p-6-2.png",
      ],
      title: "Crunchy Potato Chips",
      price: "$ 5.99",
      originalPrice: "$ 7.49",
      inStock: true,
      category: "Vegetables",
      categoryImg: "images/catagory/catagory1.png",
      currentPrice: "12.34",
      discountPercentage: "21%",
    },
    {
      imgSrc: [
        "images/products/p-16.png",
        "images/products/p-16-1.png",
        "images/products/p-16-2.png",
      ],
      title: "Crunchy Potato Chips",
      price: "$ 5.99",
      originalPrice: "$ 7.49",
      inStock: true,
      category: "Snacks",
      categoryImg: "images/catagory/catagory4.png",
      currentPrice: "12.34",
      discountPercentage: "21%",
    },
    {
      imgSrc: [
        "images/products/p-17.png",
        "images/products/p-17-1.png",
        "images/products/p-17-2.png",
      ],
      title: "Cheesy Nachos",
      price: "$ 6.49",
      originalPrice: "$ 8.99",
      save: "28%",
      inStock: true,
      currentPrice: "12.34",
      categoryImg: "images/catagory/catagory4.png",
      discountPercentage: "21%",
      category: "Snacks",
    },
    {
      imgSrc: [
        "images/products/p-18.png",
        "images/products/p-18-1.png",
        "images/products/p-18-2.png",
      ],
      title: "Salted Pretzels",
      price: "$ 4.99",
      originalPrice: "$ 6.29",
      save: "21%",
      inStock: false,
      category: "Snacks",
      categoryImg: "images/catagory/catagory4.png",
    },

    {
      imgSrc: [
        "images/products/p-19.png",
        "images/products/p-19-1.png",
        "images/products/p-19-2.png",
      ],
      title: "Spicy Tortilla Chips",
      price: "$ 6.79",
      originalPrice: "$ 8.49",
      currentPrice: "12.34",
      discountPercentage: "21%",
      inStock: false,
      category: "Snacks",
      categoryImg: "images/catagory/catagory4.png",
    },
    {
      imgSrc: [
        "images/products/p-20.png",
        "images/products/p-20-1.png",
        "images/products/p-20-2.png",
      ],
      title: "Butter Popcorn",
      price: "$ 3.49",
      originalPrice: "$ 4.49",
      currentPrice: "12.34",
      discountPercentage: "21%",
      save: "22%",
      inStock: true,
      category: "Popcorn",
      categoryImg: "images/catagory/catagory6.png",
    },
    {
      imgSrc: [
        "images/products/p-21.png",
        "images/products/p-21-1.png",
        "images/products/p-21-2.png",
      ],
      title: "Caramel Popcorn",
      price: "$ 4.29",
      originalPrice: "$ 5.79",
      currentPrice: "12.34",
      discountPercentage: "21%",
      inStock: true,
      category: "Popcorn",
      categoryImg: "images/catagory/catagory6.png",
    },
    {
      imgSrc: [
        "images/products/p-22.png",
        "images/products/p-22-1.png",
        "images/products/p-22-2.png",
      ],
      title: "Roasted Peanuts",
      price: "$ 2.99",
      originalPrice: "$ 3.99",
      currentPrice: "12.34",
      discountPercentage: "21%",
      inStock: true,
      category: "Nuts",
      categoryImg: "images/catagory/catagory8.png",
    },
    {
      imgSrc: [
        "images/products/p-23.png",
        "images/products/p-23-1.png",
        "images/products/p-23-2.png",
      ],
      title: "Sweet Granola Bars",
      price: "$ 5.49",
      originalPrice: "$ 7.29",
      currentPrice: "12.34",
      discountPercentage: "21%",
      save: "24%",
      inStock: false,
      category: "Snacks",
      categoryImg: "images/catagory/catagory4.png",
    },
    {
      imgSrc: [
        "images/products/p-24.png",
        "images/products/p-24-1.png",
        "images/products/p-24-2.png",
      ],
      title: "Choco Chip Cookies",
      price: "$ 4.59",
      originalPrice: "$ 5.99",
      save: "23%",
      inStock: true,
      category: "Cookies",
      currentPrice: "12.34",
      discountPercentage: "21%",
      categoryImg: "images/catagory/catagory8.png",
    },
    {
      imgSrc: [
        "images/products/p-25.png",
        "images/products/p-25-1.png",
        "images/products/p-25-2.png",
      ],
      title: "Crunchy Trail Mix",
      price: "$ 7.99",
      originalPrice: "$ 10.49",
      inStock: true,
      category: "Nuts",
      currentPrice: "12.34",
      discountPercentage: "21%",
      categoryImg: "images/catagory/catagory8.png",
    },
    {
      imgSrc: [
        "images/products/p-26.png",
        "images/products/p-26-1.png",
        "images/products/p-26-2.png",
      ],
      title: "Honey Almond Nuts",
      price: "$ 8.49",
      originalPrice: "$ 10.99",
      save: "23%",
      inStock: true,
      category: "Nuts",
      currentPrice: "12.34",
      discountPercentage: "21%",
      categoryImg: "images/catagory/catagory8.png",
    },
    {
      imgSrc: [
        "images/products/p-27.png",
        "images/products/p-27-1.png",
        "images/products/p-27-2.png",
      ],
      title: "Salted Cashews",
      price: "$ 9.99",
      originalPrice: "$ 12.49",
      save: "20%",
      inStock: true,
      category: "Nuts",
      currentPrice: "12.34",
      discountPercentage: "21%",
      categoryImg: "images/catagory/catagory8.png",
    },
    {
      imgSrc: [
        "images/products/p-28.png",
        "images/products/p-28-1.png",
        "images/products/p-28-2.png",
      ],
      title: "Chocolate Wafers",
      price: "$ 3.99",
      originalPrice: "$ 5.29",
      inStock: false,
      category: "Cookies",
      currentPrice: "12.34",
      discountPercentage: "21%",
      categoryImg: "images/catagory/catagory4.png",
    },
    {
      imgSrc: [
        "images/products/p-29.png",
        "images/products/p-29-1.png",
        "images/products/p-29-2.png",
      ],
      title: "Cream Sandwich Cookies",
      price: "$ 4.49",
      originalPrice: "$ 5.99",
      save: "25%",
      inStock: true,
      category: "Cookies",
      currentPrice: "12.34",
      discountPercentage: "21%",
      categoryImg: "images/catagory/catagory4.png",
    },
    {
      imgSrc: [
        "images/products/p-30.png",
        "images/products/p-30-1.png",
        "images/products/p-30-2.png",
      ],
      title: "Spicy Mixed Nuts",
      price: "$ 6.29",
      originalPrice: "$ 8.49",
      inStock: true,
      category: "Nuts",
      currentPrice: "12.34",
      discountPercentage: "21%",
      categoryImg: "images/catagory/catagory8.png",
    },
    {
      imgSrc: [
        "images/products/p-31.png",
        "images/products/p-31-1.png",
        "images/products/p-31-2.png",
      ],
      title: "BBQ Flavored Chips",
      price: "$ 5.79",
      originalPrice: "$ 7.49",
      save: "23%",
      inStock: true,
      currentPrice: "12.34",
      discountPercentage: "21%",
      category: "Snacks",
      categoryImg: "images/catagory/catagory4.png",
    },
    {
      imgSrc: [
        "images/products/p-32.png",
        "images/products/p-32-1.png",
        "images/products/p-32-2.png",
      ],
      title: "Fruit Gummies",
      price: "$ 3.49",
      originalPrice: "$ 4.99",
      inStock: true,
      category: "Candy",
      currentPrice: "12.34",
      discountPercentage: "21%",
      categoryImg: "images/catagory/catagory1.png",
    },
    {
      imgSrc: [
        "images/products/p-27.png",
        "images/products/p-27-1.png",
        "images/products/p-27-2.png",
      ],
      title: "Fruit Gummies",
      price: "$ 3.49",
      originalPrice: "$ 4.99",
      inStock: true,
      category: "milk",
      currentPrice: "12.34",
      discountPercentage: "21%",
      categoryImg: "images/catagory/catagory2.png",
    },
    {
      imgSrc: [
        "images/products/p-30.png",
        "images/products/p-31-1.png",
        "images/products/p-31-2.png",
      ],
      title: "Chicken",
      price: "$ 10.49",
      originalPrice: "$ 24.99",
      inStock: true,
      category: "chicken",
      currentPrice: "12.34",
      discountPercentage: "21%",
      categoryImg: "images/catagory/catagory3.png",
    },
  ];

  // State
  // Map categories with images
  const categories = [
    { name: "All Categories", img: "images/catagory/catagory7.png" },
    ...Array.from(
      new Map(
        products.map((product) => [product.category, product.categoryImg])
      ).entries()
    ).map(([name, img]) => ({ name, img })),
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // popup increment & decrement

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div className="padding-class">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="Filter-text">
              <h3>Category</h3>
              <div className="Category-ul">
                <ul>
                  {categories.map((category) => (
                    <li
                      key={category.name}
                      onClick={() =>
                        setSelectedCategory(
                          category.name === "All Categories"
                            ? ""
                            : category.name
                        )
                      }
                      style={{ cursor: "pointer" }}
                      className={
                        selectedCategory === category.name ||
                        (category.name === "All Categories" &&
                          !selectedCategory)
                          ? "active"
                          : ""
                      }
                    >
                      <span>
                      <img
                        src={category.img}
                        alt={category.name}
                        style={{ width: "45px", marginRight: "12px" }}
                      />
                      </span>
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <div className="filter-vender">
                  <div className="filter-vender-img">
                    <div className="filter-vender-inn">
                      <img src="images/vender-logo1.png" />
                    </div>
                  </div>
                  <div className="Vendors-box">
                    <h2>Albertsons Mart</h2>
                    <div className="location-times-wrap">
                      <div>
                        <p>
                          Delivery by: <span>10.35am</span>
                        </p>
                        <span>
                          B62, Pocket B, South City I, Sector 30, Gurugram,
                          Haryana 122007, India
                        </span>
                      </div>
                      <div className="distence-time">
                        <p>
                          <CalendarMonthIcon /> Wednesday, 25 December 12:30 PM
                        </p>
                        <label>
                          <img src="images/location.png" /> Distance 4.6 km
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {filteredProducts.map((product, index) => (
                <div className="col-md-3 mb-4" key={index}>
                  <article
                    className={`flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 relative h-full product-Box ${
                      !product.inStock && "opacity-50"
                    }`}
                  >
                    <div className="proslider">
                      <Slider {...sliderSettings}>
                        {product.imgSrc.map((src, idx) => (
                          <div className="">
                            <img src={src} alt={product.title} />
                          </div>
                        ))}
                      </Slider>
                      {product.discountPercentage && (
                        <span className="off-price red">
                          -{product.discountPercentage}
                        </span>
                      )}
                      {!product.inStock && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs off-price red">
                          Out of Stock
                        </span>
                      )}
                    </div>

                    <div className="px-3 pb-3 lg:pb-3 ">
                      <p className="mb-2 w-100">{product.title}</p>

                      <div className="filters-products title-count-wraps">
                        <div className="filters-products-price">
                          <del className="del">{product.originalPrice}</del>
                          <h2>{product.price}</h2>
                        </div>
                        <div
                          className={`add-button ${
                            !product.inStock ? "cursor-not-allowed" : ""
                          }`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {product.inStock ? (
                            !visibleIncrementDecrement[index] ? (
                              <button
                                onClick={() => toggleIncrementDecrement(index)}
                              >
                               <ShoppingCartIcon />
                              </button>
                            ) : (
                              <div className="increment-wrap">
                                <button onClick={() => decrement(index)}>
                                  -
                                </button>
                                <span>{quantities[index]}</span>
                                <button
                                  onClick={() => increment(index)}
                                  disabled={(quantities[index] || 1) >= 10}
                                >
                                  <Snackbar
                                    anchorOrigin={{ vertical, horizontal }}
                                    open={open}
                                    onClose={handleClose}
                                    autoHideDuration={3000}
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
                            )
                          ) : (
                            <span className="text-red-500">Unavailable</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
