import React, { useState, useEffect, useRef } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import CallIcon from "@mui/icons-material/Call";
import Select from "react-select";
import $ from "jquery";
import "select2";
import "select2/dist/css/select2.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("email");
  const [countryCodeData, setCountryCodeData] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const formattedData = data
          .map((country) => ({
            code: country.idd?.root
              ? country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : "")
              : "",
            flag: country.flags?.png,
          }))
          .filter((item) => item.code);

        setCountryCodeData(formattedData);

        if (formattedData.length > 0) {
          setSelectedCountryCode(formattedData[0].code);
        }
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchCountryCodes();
  }, []);

  const options = countryCodeData.map((item) => ({
    value: item.code,
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={item.flag}
          alt=""
          style={{ width: "20px", height: "15px", marginRight: "10px" }}
        />
        {item.code}
      </div>
    ),
  }));

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const sliderSettings = {
    dots: true,
    fade: true,
    animation: true,
    infinite: true,
    autoplay: true,
    arrow: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="login-wrap signUp">
      <div className="login-box">
        <div className="sign-slider">
          <Slider {...sliderSettings}>
            <div className="login-image">
              <img src="images/sign4.jpg" alt="Login" />
              <div className="login-slide-text">
                <h2>Offers Fresh & Quality Groceries for you</h2>
                <p>
                  We take pride in offering you fresh, high-quality groceries to
                  meet all your needs. Whether you're looking for crisp fruits,
                  farm-fresh vegetables, or pantry essentials.
                </p>
              </div>
            </div>
            <div className="login-image">
              <img src="images/sign2.jpg" alt="Login" />
              <div className="login-slide-text">
                <h2> Simplify Your Bulk Purchases</h2>
                <p>
                  {" "}
                  Effortlessly order all your grocery products in bulk, tailored
                  to meet the needs of your hotel, café, or restaurant. Save
                  time and streamline your inventory management.
                </p>
              </div>
            </div>
            <div className="login-image">
              <img src="images/sign3.jpg" alt="Login" />
              <div className="login-slide-text">
                <h2>Effortless Ordering in Three Steps</h2>
                <p>
                  Select your products, add them to your cart, and place your
                  order with ease. Enjoy a seamless process designed to make
                  bulk purchasing simple and efficient.
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <div className="login-text-wrap">
          <div className="signUP">
            <div className="login-logo">
              <a href="/">
                <img src="images/logo.png" />
              </a>
            </div>
            <h2>Let’s Get Started!</h2>
            <p>
              Sign up with Social or fill the form to continue.{" "}
              <a href="/login">Login</a>
            </p>

            <div className="tab-container">
              <button
                className={activeTab === "email" ? "active-tab" : ""}
                onClick={() => setActiveTab("email")}
              >
                <MailOutlineIcon /> Email
              </button>
              <button
                className={activeTab === "mobile" ? "active-tab" : ""}
                onClick={() => setActiveTab("mobile")}
              >
                <LocalPhoneIcon /> Mobile
              </button>
            </div>

            <div className="photo-content">
              {activeTab === "email" && (
                <div className="form-content">
                  <div className="photo-content">
                    <div className="request-input">
                      <label>Full Name</label>
                      <AccountCircleIcon />
                      <input type="text" placeholder="Enter Your Full Name" />
                    </div>
                    <div className="request-input">
                      <label>Email</label>
                      <EmailIcon />
                      <input type="text" placeholder="test1232@gmail.com" />
                    </div>
                    <div className="request-input">
                      <LockIcon />
                      <label>Set Password</label>
                      <div className="password-input-wrap">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter Your Password"
                        />
                        <span
                          className="password-toggle-icon"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </span>
                      </div>
                    </div>
                    <button>
                      <a href="otpemail"> Register Now </a>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "mobile" && (
                <div className="form-content">
                  <div className="photo-content">
                    <div className="request-input">
                      <label>Full Name</label>
                      <AccountCircleIcon />
                      <input type="text" placeholder="Enter Your Full Name" />
                    </div>
                    <div className="request-input">
                      <label>Phone Number</label>
                      <div className="mobile-input-wrap">
                        <Select
                          className="basic-single"
                          classNamePrefix="select"
                          options={options}
                          defaultValue={options[0]}
                          onChange={(option) =>
                            setSelectedCountryCode(option?.value || "")
                          }
                          isClearable
                          isSearchable
                          name="countryCode"
                        />
                        <CallIcon />
                        <input
                          type="text"
                          placeholder="Enter Your Mobile Number"
                        />
                      </div>
                    </div>
                    <div className="request-input">
                      <label>Set Password</label>
                      <LockIcon />
                      <div className="password-input-wrap">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter Your Password"
                        />
                        <span
                          className="password-toggle-icon"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </span>
                      </div>
                    </div>
                    <button>
                      <a href="/otpphone"> Register Now</a>
                    </button>
                  </div>
                </div>
              )}

              <span className="or">
                <label></label> Or Register with <label></label>
              </span>
              <div className="google-btn-wrpa">
                <button>
                  <img src="images/google.png" className="google" />
                  Google
                </button>
                <button>
                  <img src="images/facebook.png" className="google" />
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
