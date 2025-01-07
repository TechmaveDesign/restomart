import React, { useState, useRef, useEffect } from "react";
import CartPopup from "./cartPopup";
import FilterPopup from "./FilterPopup";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const TopHeader = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSecondPopupVisible, setSecondPopupVisible] = useState(false);
  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  // camera

  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null);

  // Function to toggle popup visibility
  const togglePhotoPopup = () => {
    setPopupVisible((prev) => !prev);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupVisible(false);
      }
    };

    if (isPopupVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupVisible]);

  const handleSubmit = () => {
    // Show the second popup
    setSecondPopupVisible(true);
  };

  const closeSecondPopup = () => {
    setSecondPopupVisible(false);
  };

  // camera

  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      setFile({
        name: selectedFile.name,
        url: fileURL,
      });
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleRemove = () => {
    setFile(null);
    fileInputRef.current.value = "";
  };

  const [dragging, setDragging] = useState(false);

  const handleFileDrop = (files) => {
    if (files.length) {
      const droppedFile = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setFile({
          url: e.target.result,
          name: droppedFile.name,
        });
      };
      reader.readAsDataURL(droppedFile);
    }
  };

  // camera

  // focus search

  const [isPopupVisible2, setPopupVisible2] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [items] = useState([
    "Green Vegetables & Fruits",
    "Evening Snacks",
    "Products on sale",
    "fresh cow milk",
    "Chicken Meat & Fish",
    "Cold Drinks & Ice Cream",
    "Masala,Oil & Frozen Food",
    "Rice,Atta & Dal",
  ]);
  const handleFocus = () => {
    setPopupVisible2(true);
  };

  const handleBlur = () => {
    setTimeout(() => setPopupVisible2(false), 200);
  };
  const handleItemClick = (item) => {
    setInputValue(item);
    setPopupVisible2(false);
  };

  // focus search

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: "images/notify1.png",
      title: "Black Friday’s here to stay.",
      time: "31min",
      description:
        "Our offers and cashback will make it feel like Black Friday all year.",
    },
    {
      id: 2,
      icon: "images/notify2.png",
      title: "Lorem ipsum text here.",
      time: "1h",
      description: "Shipping options and fees vary based on your location.",
    },
    {
      id: 3,
      icon: "images/notify3.png",
      title: "Winter sale is Live now",
      time: "10min",
      description: "Shipping options and fees vary based on your location.",
    },
  ]);

  return (
    <div className="top-wrap">
      <div className="logo-section">
        <a href="/">
          <img src="images/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="search-section">
        <button onClick={togglePopup}>
          <img src="images/filter.svg" alt="Filter" />
        </button>

        <input
          type="text"
          placeholder="Search for products (e.g. fish, apple, oil)"
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {isPopupVisible2 && (
          <div className="photo-popup new">
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {items.map((item, index) => (
                <li key={index} onClick={() => handleItemClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="Search-button">
          <button onClick={togglePhotoPopup}>
            <img src="images/photo.png" />
          </button>
          <button>Search</button>
        </div>

        {/* Popup */}
        {isPopupVisible && (
          <div className="photo-popup" ref={popupRef}>
            <div className="photo-content">
              <h2>
                Request For product{" "}
                <button onClick={togglePhotoPopup}>
                  <CloseIcon />
                </button>
              </h2>
              <div className="request-wrap">
                <div className="request-input">
                  <label>Product Title</label>
                  <input
                    type="text"
                    placeholder="Please enter product title.."
                  />
                </div>
                <div className="request-input">
                  <label>Description</label>
                  <input
                    type="text"
                    placeholder="add some description about product"
                  />
                </div>
              </div>
              <div className="request-wrap">
                <div className="request-input upload-wrap">
                  <label>Upload Picture</label>
                  <div
                    className="upload"
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragging(true);
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      handleFileDrop(e.dataTransfer.files);
                      setDragging(false);
                    }}
                    onDragLeave={() => setDragging(false)}
                    style={{
                      border: dragging
                        ? "2px dashed #007bff"
                        : "2px solid transparent",
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    {!file && (
                      <>
                        <button onClick={handleClick}>
                          <img src="images/upload.png " alt="upload-icon" />
                          <span>Choose file</span>
                          <label>JPG, PNG format</label>
                        </button>
                      </>
                    )}
                    {file && (
                      <div style={{ marginTop: "20px", position: "relative" }}>
                        <img
                          src={file.url}
                          alt={file.name}
                          style={{
                            maxWidth: "150px",
                            maxHeight: "150px",
                            borderRadius: "5px",
                          }}
                        />
                        <button className="remove" onClick={handleRemove}>
                          <CloseIcon />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button onClick={handleSubmit}>Submit</button>
              {/* Second Popup */}
              {isSecondPopupVisible && (
                <div className="overlay">
                  <div className="second-popup">
                    <CheckCircleOutlineIcon />
                    <p>Your product request has been submitted successfully.</p>
                    <button
                      onClick={() => {
                        closeSecondPopup();
                        togglePhotoPopup();
                      }}
                    >
                      Ok
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="right-icon-wrap">
        <a href="#" className="deliver">
          Deliver to:
          {/* address box */}
          <div className="address-popup">
            <div className="photo-content">
              <h3>Specify your location</h3>
              <p>Shipping options and fees vary based on your location</p>
              <button>
                <a href="/addresspage"> Add Address </a>
              </button>
            </div>
          </div>
          {/* address box */}
          <label>
            <img src="images/in.png" /> IN
          </label>
        </a>
        <a href="#" className="deliver">
          <label>
            <span>2</span>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 22 22"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 drop-shadow-xl"
              width="22"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </label>
          {/* address box */}
          <div className="address-popup Notification">
            <div className="photo-content">
              <h3>Notification</h3>
              {notifications.map((notification) => (
                <div className="Notification-box" key={notification.id}>
                  <div className="notify-icon">
                    <img src={notification.icon} alt="Notification Icon" />
                  </div>
                  <div className="notify-text">
                    <h6>
                      {notification.title} <i>{notification.time}</i>
                    </h6>
                    <p>{notification.description}</p>
                  </div>
                </div>
              ))}
              <button>
                <a href="/">All Notification</a>
              </button>
            </div>
          </div>
          {/* address box */}
        </a>
        <a
          href="#"
          class="notify"
          onClick={(e) => {
            e.preventDefault();
            handleTogglePopup();
          }}
        >
          <span>4</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-brand-dark text-opacity-40"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M19.7999 19.0172L18.5402 4.8319C18.5132 4.51697 18.2478 4.27853 17.9374 4.27853H15.3459C15.31 1.91207 13.3754 0 10.9999 0C8.62447 0 6.68991 1.91207 6.65392 4.27853H4.06251C3.74758 4.27853 3.48664 4.51697 3.45965 4.8319L2.19993 19.0172C2.19993 19.0352 2.19543 19.0532 2.19543 19.0712C2.19543 20.6863 3.6756 22 5.49768 22H16.5022C18.3243 22 19.8044 20.6863 19.8044 19.0712C19.8044 19.0532 19.8044 19.0352 19.7999 19.0172ZM10.9999 1.21472C12.705 1.21472 14.0952 2.58241 14.1312 4.27853H7.86864C7.90464 2.58241 9.29482 1.21472 10.9999 1.21472ZM16.5022 20.7853H5.49768C4.35494 20.7853 3.42815 20.0294 3.41016 19.0982L4.61588 5.49775H6.64942V7.34233C6.64942 7.67975 6.91936 7.94969 7.25678 7.94969C7.59421 7.94969 7.86415 7.67975 7.86415 7.34233V5.49775H14.1312V7.34233C14.1312 7.67975 14.4012 7.94969 14.7386 7.94969C15.076 7.94969 15.3459 7.67975 15.3459 7.34233V5.49775H17.3795L18.5897 19.0982C18.5717 20.0294 17.6404 20.7853 16.5022 20.7853Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.1"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="22" height="22" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="/login">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-brand-dark text-opacity-40"
          >
            <path
              d="M20.9001 11C20.9001 5.52836 16.4723 1.09998 11.0001 1.09998C5.52848 1.09998 1.1001 5.52775 1.1001 11C1.1001 16.4231 5.49087 20.9 11.0001 20.9C16.4867 20.9 20.9001 16.448 20.9001 11ZM11.0001 2.26013C15.8193 2.26013 19.7399 6.1808 19.7399 11C19.7399 12.7629 19.2156 14.4573 18.2432 15.8926C14.3386 11.6924 7.66873 11.6849 3.75698 15.8926C2.78459 14.4573 2.26025 12.7629 2.26025 11C2.26025 6.1808 6.18092 2.26013 11.0001 2.26013ZM4.48056 16.8201C7.95227 12.926 14.0488 12.9269 17.5195 16.8201C14.0361 20.7172 7.96541 20.7184 4.48056 16.8201Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="0.2"
            ></path>
            <path
              d="M11 11.5801C12.9191 11.5801 14.4805 10.0187 14.4805 8.09961V6.93945C14.4805 5.02036 12.9191 3.45898 11 3.45898C9.08091 3.45898 7.51953 5.02036 7.51953 6.93945V8.09961C7.51953 10.0187 9.08091 11.5801 11 11.5801ZM8.67969 6.93945C8.67969 5.65996 9.7205 4.61914 11 4.61914C12.2795 4.61914 13.3203 5.65996 13.3203 6.93945V8.09961C13.3203 9.3791 12.2795 10.4199 11 10.4199C9.7205 10.4199 8.67969 9.3791 8.67969 8.09961V6.93945Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="0.2"
            ></path>
          </svg>
        </a>
      </div>
      <FilterPopup setClose={setShowPopup} close={showPopup} />
      <CartPopup data={isOpen} setData={setIsOpen} />
    </div>
  );
};

export default TopHeader;
