import React, { useState, useEffect } from "react";
import InnerBanner from "../componant/inner-banner";

const AllVenders = () => {
  const vendors = [
    {
      imgSrc: "images/Vendors1.png",
      distance: "4.6 km",
      name: "SuperMarket",
      deliveryTime: "10:12am",
    },
    {
      imgSrc: "images/Vendors2.png",
      distance: "3 km",
      name: "Borcelle",
      deliveryTime: "10:12am",
      slug: "borcelle",
    },
    {
      imgSrc: "images/Vendors3.png",
      distance: "4.6 km",
      name: "Deli Grocery",
      deliveryTime: "10:12am",
      slug: "deli-grocery",
    },
    {
      imgSrc: "images/Vendors4.png",
      distance: "4.6 km",
      name: "Meijer",
      deliveryTime: "10:12am",
      slug: "meijer",
    },
    {
      imgSrc: "images/Vendors5.png",
      distance: "6 km",
      name: "Wegmans",
      deliveryTime: "10:12am",
      slug: "wegmans",
    },
    {
      imgSrc: "images/Vendors6.png",
      distance: "5.2 km",
      name: "Kroger",
      deliveryTime: "10:12am",
      slug: "kroger",
    },
    {
      imgSrc: "images/Vendors7.png",
      distance: "7.2 km",
      name: "Costco",
      deliveryTime: "10:12am",
      slug: "costco",
    },
    {
      imgSrc: "images/Vendors8.png",
      distance: "7.2 km",
      name: "King Super..",
      deliveryTime: "10:12am",
      slug: "king-super",
    },
  ];

  return (
    <>
      <InnerBanner li1="Home" li2="All Venders" />
      <div className="padding-class">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="common-text pl-3 mb-0">All Venders</h2>
            </div>
            {vendors.map((vendor, index) => (
              <div className="col-md-3">
                <div className="allvenderPage">
                  <div key={index} className="Vendors-box">
                    {index === 0 ? (
                      <a href="/MultipleShop">
                        <div className="Vendors-img">
                          <img src={vendor.imgSrc} alt={vendor.name} />
                        </div>
                        <label>
                          <img src="images/location.png" /> Distance{" "}
                          {vendor.distance}
                        </label>
                        <h6>{vendor.name}</h6>
                        <p>
                          Delivery by: <span>{vendor.deliveryTime}</span>
                        </p>
                      </a>
                    ) : (
                      <a href="/ProductPage">
                        <div className="Vendors-img">
                          <img src={vendor.imgSrc} alt={vendor.name} />
                        </div>
                        <label>
                          <img src="images/location.png" /> Distance{" "}
                          {vendor.distance}
                        </label>
                        <h6>{vendor.name}</h6>
                        <p>
                          Delivery by: <span>{vendor.deliveryTime}</span>
                        </p>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllVenders;
