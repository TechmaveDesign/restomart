import React, { useState, useEffect } from "react";
import InnerBanner from "../componant/inner-banner";

const Offer = () => {
  const [copiedText, setCopiedText] = useState("");
  const [activeCoupon, setActiveCoupon] = useState(null);

  const coupons = [
    {
      code: "SUMMER25",
      img: "images/offer1.webp",
      description: "Summer Gift Voucher",
      off: "10%",
    },
    {
      code: "AUGUST15",
      img: "images/offer2.webp",
      description: "August Gift Voucher",
      off: "30%",
    },
    {
      code: "JANUARY26",
      img: "images/offer3.webp",
      description: "January Gift Voucher",
      off: "50%",
    },
    {
      code: "WINTER25",
      img: "images/offer4.webp",
      description: "Winter Gift Voucher",
      off: "15%",
    },
    {
      code: "HOLI25",
      img: "images/offer2.webp",
      description: "Holi Gift Voucher",
      off: "15%",
    },
  ];

  const handleCopy = (couponCode) => {
    navigator.clipboard.writeText(couponCode);
    setCopiedText(couponCode);
    setTimeout(() => setCopiedText(""), 2000);

    // Set active coupon
    setActiveCoupon(couponCode);
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
    <>
      <InnerBanner li1="Home" li2="Offer" />
      <div className="padding-class">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="common-text pl-3">Mega Offer</h2>
            </div>
            {coupons.map((coupon, index) => (
              <div className="col-md-6" key={index}>
                <div className="offerpage">
                  <div className="offer-box">
                    <div className="offer-img">
                      <img src={coupon.img} alt={`Offer ${index + 1}`} />
                    </div>
                    <div className="offer-text">
                      <h5>
                        <label>{coupon.off}</label> Off{" "}
                        <span
                          className={
                            activeCoupon === coupon.code ? "active" : ""
                          }
                        >
                          {activeCoupon === coupon.code ? "Active" : "Inactive"}
                        </span>
                      </h5>
                      <p>{coupon.description}</p>
                      {activeCoupon === coupon.code && (
                        <div className="number-counter">
                          <span>{time.days.toString().padStart(2, "0")}</span>:
                          <span>{time.hours.toString().padStart(2, "0")}</span>:
                          <span>{time.minutes.toString().padStart(2, "0")}</span>:
                          <span>{time.seconds.toString().padStart(2, "0")}</span>
                        </div>
                      )}
                    </div>
                    <div className="copy-wrap">
                      <button onClick={() => handleCopy(coupon.code)}>
                        {copiedText === coupon.code ? "Copied!" : coupon.code}
                      </button>
                      <p>
                        * This coupon applies when shopping more than{" "}
                        <b>RS.500</b>
                      </p>
                    </div>
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

export default Offer;
