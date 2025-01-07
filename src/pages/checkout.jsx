import React, { useRef, useEffect, useState } from "react";
import SimilarProducts from "../componant/Similar-Products";
import InnerBanner from "../componant/inner-banner";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import $ from "jquery";
import "select2";
import "select2/dist/css/select2.css";
import Tooltip from "@mui/material/Tooltip";
import AllCountries from "./AllCountries.json";
import LockIcon from "@mui/icons-material/Lock";
import AddIcon from "@mui/icons-material/Add";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Payment } from "@mui/icons-material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CheckOut = () => {
  const [open, setOpen] = React.useState(false);
  const [success, setsuccess] = React.useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: "Home",
      mobile: "9950431256",
      address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      id: 2,
      title: "Office",
      mobile: "9950431256",
      address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
  ]);
  const [selectedAddress, setSelectedAddress] = useState("home");
  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSuccess = () => setsuccess(true);

  const selectRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const $select = $(selectRef.current);
    if ($select.select2) {
      $select.select2({
        placeholder: "Select an option",
        allowClear: true,
      });
      $select.on("change", (e) => {
        setSelectedValue(e.target.value);
      });
    } else {
      console.error("Select2 is not available. Check your imports.");
    }
    return () => {
      if ($select.select2) {
        $select.select2("destroy");
      }
    };
  }, []);

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const formattedCountries = AllCountries.map((country) => ({
      name: country.name.common,
      flag: country.flags.svg,
    }));
    setCountries(formattedCountries);
  }, []);

  console.log("------", countries);

  const handleSelectAddress = (id) => {
    setSelectedAddressId(id);
  };
  // Payment

  const [active, setActive] = useState(null); // Track active element
  const [showPopup, setShowPopup] = useState(false); // Track popup visibility

  const handleClick = (option) => {
    setActive(option);
    setShowPopup(option === "CreditCard");
  };

  return (
    <>
      <InnerBanner li1="Home" li2="CheckOut" />
      <div className="padding-class">
        <div className="checkout">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="address-box">
                  <h4> Shipping Address </h4>
                  <RadioGroup
                    value={selectedAddressId}
                    onChange={(e) =>
                      handleSelectAddress(Number(e.target.value))
                    }
                  >
                    <div className="Shipping-weapper">
                      {addresses.map((address) => (
                        <div
                          key={address.id}
                          className={`ShippingAddress-box ${
                            selectedAddressId === address.id ? "selected" : ""
                          }`}
                          onClick={() => handleSelectAddress(address.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="ShippingIcon">
                            <FormControlLabel
                              value={address.id}
                              control={<Radio />}
                              checked={selectedAddressId === address.id}
                            />
                          </div>
                          <div className="ShippingAddress">
                            <h6>
                              {address.title}{" "}
                              <button onClick={handleOpen}>
                                <ModeEditOutlineIcon />
                              </button>
                            </h6>
                            <span>Mb. {address.mobile}</span>
                            <p>{address.address}</p>
                          </div>
                        </div>
                      ))}
                      <div
                        className="ShippingAddress-box foraddress"
                        onClick={handleOpen}
                      >
                        <h6>
                          <AddIcon /> Add a new address
                        </h6>
                      </div>
                    </div>
                  </RadioGroup>
                  <div className="Vouchers-box">
                    <h4>Vouchers <a href="/offer"><img src="images/coupon.svg" /> All Vouchers</a></h4>
                    <div className="request-input">
                      <input type="text" placeholder="+ Add voucher" />
                      <button>Apply</button>
                    </div>
                  </div>
                  <div className="Vouchers-box">
                    <h4>Payment method</h4>
                    <div className="payment">
                      <p
                        className={active === "CreditCard" ? "active" : ""}
                        onClick={() => handleClick("CreditCard")}
                      >
                        <CreditCardIcon /> Credit Card
                      </p>
                      {showPopup && (
                        <div className="popup">
                          <div className="request-wrap">
                            <div className="request-input">
                              <label>Card Number</label>
                              <input
                                type="text"
                                placeholder="0000 - 0000 - 0000 - 0000"
                              />
                            </div>
                            <div className="request-input">
                              <label>Card Holder Name</label>
                              <input type="text" placeholder="Name" />
                            </div>
                          </div>
                          <div className="request-wrap">
                            <div className="request-input">
                              <label>Expiry Date</label>
                              <div className="selectCustom">
                                <select>
                                  <option value="Month">Month</option>
                                  <option value="01">01</option>
                                  <option value="02">02</option>
                                  <option value="03">03</option>
                                  <option value="04">04</option>
                                  <option value="05">05</option>
                                  <option value="06">06</option>
                                  <option value="07">07</option>
                                  <option value="08">08</option>
                                  <option value="09">09</option>
                                  <option value="10">10</option>
                                  <option value="11">11</option>
                                  <option value="12">12</option>
                                </select>
                              </div>
                            </div>
                            <div className="request-input">
                              <label>Expiry Year</label>
                              <div className="selectCustom">
                                <select>
                                  <option value="Year">Year</option>
                                  <option value="15">2015</option>
                                  <option value="16">2016</option>
                                  <option value="17">2017</option>
                                  <option value="18">2018</option>
                                  <option value="19">2019</option>
                                  <option value="20">2020</option>
                                  <option value="21">2021</option>
                                  <option value="22">2022</option>
                                  <option value="23">2023</option>
                                  <option value="24">2024</option>
                                  <option value="25">2025</option>
                                  <option value="26">2026</option>
                                </select>
                              </div>
                            </div>
                            <div className="request-input">
                              <label>CVV</label>
                              <input type="text" placeholder="758" />
                            </div>
                          </div>
                          <button>Save</button>
                        </div>
                      )}
                      <p
                        className={active === "UPI" ? "active" : ""}
                        onClick={() => handleClick("UPI")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M11.75 15q.325 0 .538-.213t.212-.537V13H15q.425 0 .713-.288T16 12v-2q0-.425-.288-.712T15 9h-3q-.425 0-.712.288T11 10v4.25q0 .325.213.538t.537.212m6 0q.325 0 .538-.213t.212-.537v-4.5q0-.325-.213-.537T17.75 9t-.537.213T17 9.75v4.5q0 .325.213.538t.537.212m-5.25-3.5v-1h2v1zM6 15h3q.425 0 .713-.288T10 14V9.75q0-.325-.213-.537T9.25 9t-.537.213t-.213.537v3.75h-2V9.75q0-.325-.213-.537T5.75 9t-.537.213T5 9.75V14q0 .425.288.713T6 15m-2 5q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z"
                          />
                        </svg>
                        UPI
                      </p>
                      <p
                        className={active === "CashOnDelivery" ? "active" : ""}
                        onClick={() => handleClick("CashOnDelivery")}
                      >
                        <AccountBalanceWalletIcon /> Cash On Delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
              <div className="address-box">
               <h4>Order Summary</h4>
               <div className="OrderSummery">
                 <p>Item total <span>$80</span></p>
                 <p>Taxes <span>$2.10</span></p>
                 <p>Delivery Charges <span>$3.20</span></p>
                 <h3>Grand Total <span>$85.30</span></h3>
                 <button onClick={() => handleSuccess()}>Order Now</button>
               </div>
               <span>By placing your order you agree to our <a href="#"> Terms and Conditions </a> and confirm that you have read our rights of <a href="#"> Withdrawal </a> and our <a href="#"> Policy </a>.</span>
              </div>
              </div>
            </div>
          </div>
        </div>
        {/* <SimilarProducts /> */}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style} className="address-modal">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Address
              <IconButton
                onClick={handleClose}
                sx={{ position: "absolute", top: 8, right: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </Typography>
            <p>
              <LockIcon />
              Your personal information is encrypted and will only be used for
              delivery purposes.
            </p>
            <div className="request-wrap">
              <div className="request-input upload-wrap">
                <label>Country</label>
                <div className="selectCustom">
                  <select ref={selectRef} style={{ width: "100%" }}>
                    <option value="">Select a country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="request-wrap">
              <div className="request-input">
                <label>Full Name</label>
                <input type="text" placeholder="(First and last name)" />
              </div>
              <div className="request-input">
                <label>Mobile Number</label>
                <input type="text" placeholder="" />
                <Tooltip
                  title="Your phone number will be used to contact you for delivery updates"
                  arrow
                  placement="top-end"
                >
                  <Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 8.5a1.5 1.5 0 0 0-1.5 1.5v.107a.5.5 0 1 1-1 0V10A2.5 2.5 0 0 1 12 7.5h.116a2.384 2.384 0 0 1 1.552 4.193l-.771.661a1.14 1.14 0 0 0-.397.863v.533a.5.5 0 0 1-1 0v-.533c0-.624.273-1.216.746-1.622l.77-.66a1.384 1.384 0 0 0-.9-2.435zm0 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"
                      />
                      <path
                        fill="currentColor"
                        d="M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15"
                      />
                    </svg>
                  </Button>
                </Tooltip>
              </div>
            </div>
            <div className="request-wrap">
              <div className="request-input upload-wrap">
                <label>
                  Address <span>*</span>
                </label>
                <input type="text" placeholder="Street, apartment name etc." />
              </div>
            </div>
            <div className="request-wrap">
              <div className="request-input">
                <label>Official Email</label>
                <input type="text" placeholder="test123@gmail.com" />
              </div>
              <div className="request-input">
                <label>Address Title (Optional)</label>
                <input type="text" placeholder="Home Address" />
              </div>
            </div>

            <div className="request-wrap">
              <div className="request-input">
                <label>
                  City <span>*</span>
                </label>
                <div className="selectCustom">
                  <select ref={selectRef} style={{ width: "100%" }}>
                    <option value="" />
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="request-input">
                <label>
                  Postal/Zip Code <span>*</span>
                </label>
                <input type="text" placeholder="6556" />
                <Tooltip
                  title="Provide the exact postal code of your address to ensure delivery to the correct location"
                  arrow
                  placement="top-end"
                >
                  <Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 8.5a1.5 1.5 0 0 0-1.5 1.5v.107a.5.5 0 1 1-1 0V10A2.5 2.5 0 0 1 12 7.5h.116a2.384 2.384 0 0 1 1.552 4.193l-.771.661a1.14 1.14 0 0 0-.397.863v.533a.5.5 0 0 1-1 0v-.533c0-.624.273-1.216.746-1.622l.77-.66a1.384 1.384 0 0 0-.9-2.435zm0 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"
                      />
                      <path
                        fill="currentColor"
                        d="M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15"
                      />
                    </svg>
                  </Button>
                </Tooltip>
              </div>
            </div>
            <div className="button-wrapper">
              <button onClick={handleClose}>Cancel</button>
              <button>Submit</button>
            </div>
          </Box>
        </div>
      </Modal>

      {/* success */}

      <Modal
        open={success}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="success">
          <Box sx={style} className="address-modal">
            <img src="images/check.gif" />
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Thank you for your order
            </Typography>
            <h6>ORDER CONFIRMATION</h6>
          <p>Your order #2465 has been sucessful!</p>
          <p>Thank you for choosing Restomarkets. You will shortly receive a confirmation email.</p>
          <a href="/"><button> contune shopping </button></a>
          </Box>
        </div>
      </Modal>      

      {/* success */}

    </>
  );
};

export default CheckOut;
