import InnerBanner from "../componant/inner-banner";
import Pramotion from "../componant/pramotion";
import SimilarProducts from "../componant/Similar-Products";
const MultipleShop = () => {
  const vendors = [
    {
      imgSrc: "images/Vendors1.png",
      distance: "4.6 km",
      name: "SuperMarket",
      deliveryTime: "10:12am",
    },
    {
      imgSrc: "images/Vendors1.png",
      distance: "3 km",
      name: "SuperMarket",
      deliveryTime: "08:12am",
    },
    {
      imgSrc: "images/Vendors1.png",
      distance: "4.6 km",
      name: "SuperMarket",
      deliveryTime: "11:45am",
    },
    {
      imgSrc: "images/Vendors1.png",
      distance: "5.4 km",
      name: "SuperMarket",
      deliveryTime: "03:30pm",
    },
  ];
  return (
    <>
      <InnerBanner li1="Home" li2="Multiple Store" />
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
      <Pramotion />
      <SimilarProducts />
    </>
  );
};

export default MultipleShop;
