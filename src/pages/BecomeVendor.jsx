import React, { useState, useRef, selectRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloseIcon from "@mui/icons-material/Close";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AllCountries from "./AllCountries.json";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Select from "react-select";
import DoneIcon from '@mui/icons-material/Done';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const [formData, setFormData] = useState({
    personalDetails: { name: "", email: "" },
    businessDetails: { businessName: "", businessType: "" },
    documents: { idProof: "", businessLicense: "" },
  });

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log("Submitting Data:", formData);
    // Send data to backend API here
  };

  const options = [
    { value: "delhi", label: "Delhi" },
    { value: "mumbai", label: "Mumbai" },
    { value: "bengaluru", label: "Bengaluru" },
    { value: "chennai", label: "Chennai" },
    { value: "kolkata", label: "Kolkata" },
    { value: "hyderabad", label: "Hyderabad" },
    { value: "ahmedabad", label: "Ahmedabad" },
    { value: "pune", label: "Pune" },
    { value: "jaipur", label: "Jaipur" },
    { value: "chandigarh", label: "Chandigarh" },
    { value: "lucknow", label: "Lucknow" },
    { value: "kochi", label: "Kochi" },
    { value: "surat", label: "Surat" },
    { value: "nagpur", label: "Nagpur" },
    { value: "indore", label: "Indore" },
    { value: "patna", label: "Patna" },
  ];

  const defaultCity = "delhi";

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  // camera

  const fileInputRef = useRef(null);
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const fileInputRef4 = useRef(null);
  const fileInputRef5 = useRef(null);
  const fileInputRef6 = useRef(null);
  const fileInputRef7 = useRef(null);
  const fileInputRef8 = useRef(null);
  const fileInputRef9 = useRef(null);
  const fileInputRef10 = useRef(null);
  const fileInputRef11 = useRef(null);
  const fileInputRef12 = useRef(null);
  const [file, setFile] = useState({});
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const name = event.target.name;

    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      setFile((prevFiles) => ({
        ...prevFiles, // Spread the previous files
        [name]: fileURL, // Add or update the file URL for the current name
      }));
    }
  };

  const handleClick = (fileInputRef) => {
    fileInputRef.current.click();
  };

  const handleRemove = () => {
    setFile({});
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

  // country

  const [countries, setCountries] = useState([]);
  const [selectedValue, setSelectedValue] = useState("India"); // Default to "India"
  const selectRef = useRef(null);

  // Fetch and format country data
  useEffect(() => {
    const formattedCountries = AllCountries.map((country) => ({
      value: country.name.common,
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            style={{ width: 20, height: 15, marginRight: 10 }}
          />
          {country.name.common}
        </div>
      ),
    }));

    setCountries(formattedCountries);

    // Set default value to India if present
    const india = formattedCountries.find((c) => c.value === "India");
    if (india) {
      setSelectedValue(india.value);
    }
  }, []);

  // Initialize Select2
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

  // country

  // tab
  const Tab = ({ label, isActive, onClick }) => (
    <button
      className={`tab ${isActive ? "active" : ""}`}
      onClick={onClick}
      style={{
        padding: "10px 20px",
        margin: "10px",
        cursor: "pointer",
        backgroundColor: isActive ? "#ff8200" : "#f0f0f0",
        color: isActive ? "white" : "black",
        border: "none",
        borderRadius: "8px",
      }}
    >
      {label}
    </button>
  );

  const TabContent = ({ children }) => <div>{children}</div>;

  const [activeTab, setActiveTab] = useState(0);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-main-wraps">
            <div className="details-box">
              <h2>Vendor Details</h2>
              <div className="request-wrap">
                <div
                  className="request-input upload-wrap"
                  style={{ maxWidth: "130px" }}
                >
                  <label>Company Logo</label>
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
                        : "2px dashed #C8D1E1",
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      name="logo"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    {!file["logo"] ? (
                      <button onClick={() => handleClick(fileInputRef)}>
                        <img
                          src="images/upload.png"
                          alt="upload-icon"
                          style={{ maxWidth: "20px" }}
                        />
                        <span>Choose file</span>
                      </button>
                    ) : (
                      <div onClick={() => handleClick(fileInputRef)}>
                        <img
                          src={file["logo"]}
                          style={{
                            width: "130px",
                            height: "130px",
                            objectFit: "cover",
                            maxWidth: "100%",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="Upload-right-wrap-out">
                  <div className="Upload-right-wrap">
                    <div className="request-input">
                      <label>Name(prefix)</label>
                      <input type="text" placeholder="" />
                      <Tooltip
                        title="Enter a title or honorific before the name, such as Mr., Mrs., Dr., or Prof."
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
                    <div className="request-input">
                      <label>
                        Name <span>*</span>
                      </label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="Upload-right-wrap">
                    <div className="request-input">
                      <label>Middle Name</label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="request-wrap">
                <div className="request-input">
                  <label>Last Name</label>
                  <input type="text" placeholder="" />
                </div>
                <div className="request-input">
                  <label>
                    Email Id <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                  <Tooltip
                    title="Enter your email address. This will be used for account verification and communication"
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
                <div class="request-input upload-wrap">
                  <label>
                    Address (Present) <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="request-wrap">
                <div class="request-input upload-wrap">
                  <label>
                    Address (Permanent) <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                  <Tooltip
                    title="Please provide your permanent address. This is the address where you reside on a long-term basis."
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
                <div className="request-input">
                  <label>
                    Phone <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                </div>
                <div class="request-input upload-wrap DatePick">
                  <label>
                    Birth Date <span>*</span>
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={["DatePicker "]}>
                      <DemoItem>
                        <DatePicker defaultValue={dayjs("2022-04-17")} />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
              <div className="request-wrap">
                <div className="request-input upload-wrap">
                  <label>Country</label>
                  <div className="selectCustom">
                    <div className="Selects2">
                      {/* React-Select Component */}
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={countries.find(
                          (country) => country.value === "India"
                        )}
                        isDisabled={false}
                        isLoading={!countries.length}
                        isClearable={true}
                        isSearchable={true}
                        name="country"
                        options={countries}
                        onChange={(selectedOption) =>
                          setSelectedValue(selectedOption?.value)
                        }
                      />

                      {/* Select2 Component */}
                      <select ref={selectRef} style={{ display: "none" }}>
                        {countries.map((country) => (
                          <option
                            key={country.value}
                            value={country.value}
                            selected={country.value === "India"}
                          >
                            {country.value}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="request-wrap">
                <div class="request-input upload-wrap">
                  <label>
                    State <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="request-wrap">
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
                <div className="request-input">
                  <label>
                    City <span>*</span>
                  </label>
                  <div className="selectCustom">
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={options[0]}
                      isDisabled={isDisabled}
                      isLoading={isLoading}
                      isClearable={isClearable}
                      isRtl={isRtl}
                      isSearchable={isSearchable}
                      name="color"
                      options={options}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-main-wraps">
            <div className="details-box">
              <h2>company information</h2>
              <div className="request-wrap">
                <div className="request-input">
                  <label>
                    Company Type <span>*</span>
                  </label>
                  <div className="selectCustom">
                    <select ref={selectRef} style={{ width: "100%" }}>
                      <option value="" />
                      <option value="1" selected>
                        Private limited
                      </option>
                      <option value="2">Public limited company</option>
                      <option value="3">Listed company</option>
                    </select>
                  </div>
                </div>
                <div className="request-input">
                  <label>
                    Company Name <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="request-input upload-wrap">
                <div className="request-input verifyInput">
                  <label>Company Email Id</label>
                  <input
                    type="text"
                    placeholder=""
                    value="info32212@gmail.com"
                  />
                  <CheckCircleIcon />
                </div>
              </div>
              <div className="request-wrap">
                <div className="request-input verifyInput">
                  <label>Mobile No</label>
                  <input type="text" placeholder="" value="+91 8945343220" />
                  <CheckCircleIcon />
                </div>
                <div className="request-input">
                  <label>
                    Fax <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                  <Tooltip
                    title="Send a document via fax to the recipient's number."
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
                <div className="request-input">
                  <label>Website</label>
                  <input type="text" placeholder="" />
                </div>
                <div class="request-input upload-wrap">
                  <label>
                    business category <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="request-wrap">
                <div class="request-input upload-wrap">
                  <label>
                    Address <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                  <Tooltip
                    title="Please provide your permanent address. This is the address where you reside on a long-term basis."
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
                <div class="request-input upload-wrap">
                  <label>
                    Street Address Line 2 <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="request-wrap">
                <div className="request-input upload-wrap">
                  <label>Country</label>
                  <div className="selectCustom">
                  <div className="Selects2">
                      {/* React-Select Component */}
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={countries.find(
                          (country) => country.value === "India"
                        )}
                        isDisabled={false}
                        isLoading={!countries.length}
                        isClearable={true}
                        isSearchable={true}
                        name="country"
                        options={countries}
                        onChange={(selectedOption) =>
                          setSelectedValue(selectedOption?.value)
                        }
                      />

                      {/* Select2 Component */}
                      <select ref={selectRef} style={{ display: "none" }}>
                        {countries.map((country) => (
                          <option
                            key={country.value}
                            value={country.value}
                            selected={country.value === "India"}
                          >
                            {country.value}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="request-wrap">
                <div class="request-input upload-wrap">
                  <label>
                    State <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="request-wrap">
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
                <div className="request-input">
                  <label>
                    City <span>*</span>
                  </label>
                  <div className="selectCustom">
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={options[0]}
                      isDisabled={isDisabled}
                      isLoading={isLoading}
                      isClearable={isClearable}
                      isRtl={isRtl}
                      isSearchable={isSearchable}
                      name="color"
                      options={options}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-main-wraps">
            <div className="details-box">
              <h2>Bank information</h2>
              {/* <div className="request-wrap">
                <div
                  className="request-input upload-wrap"
                  style={{ maxWidth: "130px" }}
                >
                  <label>Company Logo</label>
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
                        : "2px dashed #C8D1E1",
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
                          <img
                            src="images/upload.png "
                            alt="upload-icon"
                            style={{ maxWidth: "20px" }}
                          />
                          <span>Choose file</span>
                          <label>JPG, PNG format</label>
                        </button>
                      </>
                    )}
                    {file && (
                      <div>
                        <img
                          src={file.url}
                          alt={file.name}
                          style={{
                            width: "130px",
                            height: "130px",
                            objectFit: "cover",
                            maxWidth: "100%",
                          }}
                        />
                        <button className="remove" onClick={handleRemove}>
                          <CloseIcon />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="Upload-right-wrap-out">
                  <div className="Upload-right-wrap">
                    <div className="request-input">
                      <label>
                        Company Type <span>*</span>
                      </label>
                      <div className="selectCustom">
                        <select ref={selectRef} style={{ width: "100%" }}>
                          <option value="" />
                          <option value="1" selected>
                            Private limited
                          </option>
                          <option value="2">Public limited company</option>
                          <option value="3">Listed company</option>
                        </select>
                      </div>
                    </div>
                    <div className="request-input">
                      <label>
                        Company Name <span>*</span>
                      </label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="Upload-right-wrap">
                    <div className="request-input verifyInput">
                      <label>Company Email Id</label>
                      <input
                        type="text"
                        placeholder=""
                        value="info32212@gmail.com"
                      />
                      <CheckCircleIcon />
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="request-wrap">
                <div className="request-input">
                  <label>Bank Name</label>
                  <input type="text" placeholder="" value="" />
                </div>
                <div className="request-input">
                  <label>
                    Account Holder Name <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                  <Tooltip
                    title="Send a document via fax to the recipient's number."
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
                <div className="request-input verifyInput">
                  <label>
                    Account Number <span>*</span>
                  </label>
                  <input type="text" placeholder="" value="57658475768753" />
                  <CheckCircleIcon />
                </div>
                <div class="request-input verifyInput">
                  <label>
                    IFSC/SWIFT Code <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                  <CheckCircleIcon />
                </div>
              </div>
              <div className="request-wrap">
                <div class="request-input">
                  <label>
                    UPI ID (Optional) <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                </div>
                <div class="request-input">
                  <label>
                    Currency <span>*</span>
                  </label>
                  <input type="text" placeholder="" />
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-main-wraps">
            <div className="details-box">
              <h2>Upload Bank Document</h2>
              <div>
                <div>
                  <Tab
                    label="Registration Documents"
                    isActive={activeTab === 0}
                    onClick={() => setActiveTab(0)}
                  />
                  <Tab
                    label="Tax Documents"
                    isActive={activeTab === 1}
                    onClick={() => setActiveTab(1)}
                  />
                  <Tab
                    label="Bank Details"
                    isActive={activeTab === 2}
                    onClick={() => setActiveTab(2)}
                  />
                  <Tab
                    label="Business Profile Documents"
                    isActive={activeTab === 3}
                    onClick={() => setActiveTab(3)}
                  />
                </div>
                {activeTab === 0 && (
                  <TabContent>
                    <div class="docxTabs">
                      <div className="request-wrap">
                        <div
                          className="request-input upload-wrap"
                          style={{ maxWidth: "50%" }}
                        >
                          <label>Business Registration Certificate.</label>
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
                                : "2px dashed #C8D1E1",
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              name="file1"
                              ref={fileInputRef1}
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            {!file["file1"] ? (
                              <button
                                onClick={() => handleClick(fileInputRef1)}
                              >
                                <img
                                  src="images/upload.png"
                                  alt="upload-icon"
                                  style={{ maxWidth: "20px" }}
                                />
                                <span>Choose file</span>
                              </button>
                            ) : (
                              <div onClick={() => handleClick(fileInputRef1)}>
                                <img
                                  src={file["file1"]}
                                  style={{
                                    width: "130px",
                                    height: "130px",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          className="request-input upload-wrap"
                          style={{ maxWidth: "50%", marginLeft: "15px" }}
                        >
                          <label>GST or VAT Registration</label>
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
                                : "2px dashed #C8D1E1",
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              name="file2"
                              ref={fileInputRef2}
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            {!file["file2"] ? (
                              <button
                                onClick={() => handleClick(fileInputRef2)}
                              >
                                <img
                                  src="images/upload.png"
                                  alt="upload-icon"
                                  style={{ maxWidth: "20px" }}
                                />
                                <span>Choose file</span>
                              </button>
                            ) : (
                              <div onClick={() => handleClick(fileInputRef2)}>
                                <img
                                  src={file["file2"]}
                                  style={{
                                    width: "130px",
                                    height: "130px",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="request-wrap">
                        <div
                          className="request-input upload-wrap"
                          style={{ maxWidth: "100%" }}
                        >
                          <label>Trade License or Business Permit.</label>
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
                                : "2px dashed #C8D1E1",
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              name="file3"
                              ref={fileInputRef3}
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            {!file["file3"] ? (
                              <button
                                onClick={() => handleClick(fileInputRef3)}
                              >
                                <img
                                  src="images/upload.png"
                                  alt="upload-icon"
                                  style={{ maxWidth: "20px" }}
                                />
                                <span>Choose file</span>
                              </button>
                            ) : (
                              <div onClick={() => handleClick(fileInputRef3)}>
                                <img
                                  src={file["file3"]}
                                  style={{
                                    width: "130px",
                                    height: "130px",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                  }}
                                />
                                {/* <button className="remove">
                                  <CloseIcon />
                                </button> */}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="NotsForDock">
                        <span className="active"><DoneIcon /> File accepted: JPEG/JPG/PNG (Max size: 250 KB)</span>
                        <span><DoneIcon /> Document should be good condition</span>
                        <span><DoneIcon /> Document must be valid period</span>
                        <span><DoneIcon /> Face must be clear visible</span>
                        <span><DoneIcon /> Note has today’s date</span>
                      </div>
                    </div>
                  </TabContent>
                )}
                {activeTab === 1 && (
                  <TabContent>
                    <div class="docxTabs">
                      <div className="request-wrap">
                        <div
                          className="request-input upload-wrap"
                          style={{ maxWidth: "50%" }}
                        >
                          <label>Tax Identification Number</label>
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
                                : "2px dashed #C8D1E1",
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              name="file4"
                              ref={fileInputRef4}
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            {!file["file4"] ? (
                              <button
                                onClick={() => handleClick(fileInputRef4)}
                              >
                                <img
                                  src="images/upload.png"
                                  alt="upload-icon"
                                  style={{ maxWidth: "20px" }}
                                />
                                <span>Choose file</span>
                              </button>
                            ) : (
                              <div onClick={() => handleClick(fileInputRef4)}>
                                <img
                                  src={file["file4"]}
                                  style={{
                                    width: "130px",
                                    height: "130px",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          className="request-input upload-wrap"
                          style={{ maxWidth: "50%", marginLeft: "15px" }}
                        >
                          <label>PAN Card</label>
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
                                : "2px dashed #C8D1E1",
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              name="file5"
                              ref={fileInputRef5}
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            {!file["file5"] ? (
                              <button
                                onClick={() => handleClick(fileInputRef5)}
                              >
                                <img
                                  src="images/upload.png"
                                  alt="upload-icon"
                                  style={{ maxWidth: "20px" }}
                                />
                                <span>Choose file</span>
                              </button>
                            ) : (
                              <div onClick={() => handleClick(fileInputRef5)}>
                                <img
                                  src={file["file5"]}
                                  style={{
                                    width: "130px",
                                    height: "130px",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="request-wrap">
                        <div
                          className="request-input upload-wrap"
                          style={{ maxWidth: "100%" }}
                        >
                          <label>Recent Tax Returns</label>
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
                                : "2px dashed #C8D1E1",
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              ref={fileInputRef6}
                              name="file6"
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            {!file["file6"] ? (
                              <button
                                onClick={() => handleClick(fileInputRef6)}
                              >
                                <img
                                  src="images/upload.png"
                                  alt="upload-icon"
                                  style={{ maxWidth: "20px" }}
                                />
                                <span>Choose file</span>
                              </button>
                            ) : (
                              <div onClick={() => handleClick(fileInputRef6)}>
                                <img
                                  src={file["file6"]}
                                  style={{
                                    width: "130px",
                                    height: "130px",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="NotsForDock">
                        <span className="active"><DoneIcon /> File accepted: JPEG/JPG/PNG (Max size: 250 KB)</span>
                        <span><DoneIcon /> Document should be good condition</span>
                        <span><DoneIcon /> Document must be valid period</span>
                        <span><DoneIcon /> Face must be clear visible</span>
                        <span><DoneIcon /> Note has today’s date</span>
                      </div>
                    </div>
                  </TabContent>
                )}
                {activeTab === 2 && (
                  <TabContent>
                    <div class="docxTabs">
                      <div className="request-wrap">
                        <div
                          className="request-input upload-wrap"
                          style={{ maxWidth: "50%" }}
                        >
                          <label>Canceled Cheque</label>
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
                                : "2px dashed #C8D1E1",
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              name="file7"
                              ref={fileInputRef7}
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            {!file["file7"] ? (
                              <button
                                onClick={() => handleClick(fileInputRef7)}
                              >
                                <img
                                  src="images/upload.png"
                                  alt="upload-icon"
                                  style={{ maxWidth: "20px" }}
                                />
                                <span>Choose file</span>
                              </button>
                            ) : (
                              <div onClick={() => handleClick(fileInputRef7)}>
                                <img
                                  src={file["file7"]}
                                  style={{
                                    width: "130px",
                                    height: "130px",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          className="request-input upload-wrap"
                          style={{ maxWidth: "50%", marginLeft: "15px" }}
                        >
                          <label>Bank Account Statement</label>
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
                                : "2px dashed #C8D1E1",
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              ref={fileInputRef8}
                              name="file8"
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            {!file["file8"] ? (
                              <button
                                onClick={() => handleClick(fileInputRef8)}
                              >
                                <img
                                  src="images/upload.png"
                                  alt="upload-icon"
                                  style={{ maxWidth: "20px" }}
                                />
                                <span>Choose file</span>
                              </button>
                            ) : (
                              <div onClick={() => handleClick(fileInputRef8)}>
                                <img
                                  src={file["file8"]}
                                  style={{
                                    width: "130px",
                                    height: "130px",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="request-wrap">
                        <div
                          className="request-input upload-wrap"
                          style={{ maxWidth: "100%" }}
                        >
                          <label>Bank Account Verification Letter</label>
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
                                : "2px dashed #C8D1E1",
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              ref={fileInputRef9}
                              name="file9"
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            {!file["file9"] ? (
                              <button
                                onClick={() => handleClick(fileInputRef9)}
                              >
                                <img
                                  src="images/upload.png"
                                  alt="upload-icon"
                                  style={{ maxWidth: "20px" }}
                                />
                                <span>Choose file</span>
                              </button>
                            ) : (
                              <div onClick={() => handleClick(fileInputRef9)}>
                                <img
                                  src={file["file9"]}
                                  style={{
                                    width: "130px",
                                    height: "130px",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="NotsForDock">
                        <span className="active"><DoneIcon /> File accepted: JPEG/JPG/PNG (Max size: 250 KB)</span>
                        <span><DoneIcon /> Document should be good condition</span>
                        <span><DoneIcon /> Document must be valid period</span>
                        <span><DoneIcon /> Face must be clear visible</span>
                        <span><DoneIcon /> Note has today’s date</span>
                      </div>
                    </div>
                  </TabContent>
                )}
                {activeTab === 3 && (
                  <TabContent>
                    <div class="docxTabs">
                      <div className="request-wrap">
                        <div
                          className="request-input upload-wrap"
                          style={{ maxWidth: "50%" }}
                        >
                          <label>Product Catalog or SKU List.</label>
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
                                : "2px dashed #C8D1E1",
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              name="file10"
                              ref={fileInputRef10}
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            {!file["file10"] ? (
                              <button
                                onClick={() => handleClick(fileInputRef10)}
                              >
                                <img
                                  src="images/upload.png"
                                  alt="upload-icon"
                                  style={{ maxWidth: "20px" }}
                                />
                                <span>Choose file</span>
                              </button>
                            ) : (
                              <div onClick={() => handleClick(fileInputRef10)}>
                                <img
                                  src={file["file10"]}
                                  style={{
                                    width: "130px",
                                    height: "130px",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          className="request-input upload-wrap"
                          style={{ maxWidth: "50%", marginLeft: "15px" }}
                        >
                          <label>Pricing Structure</label>
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
                                : "2px dashed #C8D1E1",
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              ref={fileInputRef11}
                              name="file11"
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            {!file["file11"] ? (
                              <button
                                onClick={() => handleClick(fileInputRef11)}
                              >
                                <img
                                  src="images/upload.png"
                                  alt="upload-icon"
                                  style={{ maxWidth: "20px" }}
                                />
                                <span>Choose file</span>
                              </button>
                            ) : (
                              <div onClick={() => handleClick(fileInputRef11)}>
                                <img
                                  src={file["file11"]}
                                  style={{
                                    width: "130px",
                                    height: "130px",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="request-wrap">
                        <div
                          className="request-input upload-wrap"
                          style={{ maxWidth: "100%" }}
                        >
                          <label>
                            Delivery and Logistics Details (if self-managed).
                          </label>
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
                                : "2px dashed #C8D1E1",
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              name="file12"
                              ref={fileInputRef12}
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            {!file["file12"] ? (
                              <button
                                onClick={() => handleClick(fileInputRef12)}
                              >
                                <img
                                  src="images/upload.png"
                                  alt="upload-icon"
                                  style={{ maxWidth: "20px" }}
                                />
                                <span>Choose file</span>
                              </button>
                            ) : (
                              <div onClick={() => handleClick(fileInputRef12)}>
                                <img
                                  src={file["file12"]}
                                  style={{
                                    width: "130px",
                                    height: "130px",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="NotsForDock">
                        <span className="active"><DoneIcon /> File accepted: JPEG/JPG/PNG (Max size: 250 KB)</span>
                        <span><DoneIcon /> Document should be good condition</span>
                        <span><DoneIcon /> Document must be valid period</span>
                        <span><DoneIcon /> Face must be clear visible</span>
                        <span><DoneIcon /> Note has today’s date</span>
                      </div>
                    </div>
                  </TabContent>
                )}
              </div>
            </div>
          </div>
        );
        case 5:
        return (
          <div className="step-main-wraps">
            <div className="details-box">
              <div className="vanderSuccess">
              <img src="images/success.png" />
              <h2>Thank you for submitting your details</h2>
              <p>Thank you for submitting all the required details. We have successfully received your information, and our team will review it promptly.</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const progressPercentage = Math.round((currentStep / totalSteps) * 100);

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

  // select 2

  // select 2
  return (
    <div className="stapForm-wrap">
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
                to meet the needs of your hotel, café, or restaurant. Save time
                and streamline your inventory management.
              </p>
            </div>
          </div>
          <div className="login-image">
            <img src="images/sign3.jpg" alt="Login" />
            <div className="login-slide-text">
              <h2>Effortless Ordering in Three Steps</h2>
              <p>
                Select your products, add them to your cart, and place your
                order with ease. Enjoy a seamless process designed to make bulk
                purchasing simple and efficient.
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="login-text-wrap">
        {/* Progress Bar */}
        <div className="ProgressBar">
        {currentStep > 1 && currentStep <= 4 && (
  <button onClick={handleBack}>
    <ArrowBackIosIcon /> Back
  </button>
)}

          <div className="progress-wrap">
            <div
              style={{
                backgroundColor: "#e0e0e0",
                borderRadius: "5px",
                height: "5px",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FF8200",
                  height: "100%",
                  width: `${progressPercentage}%`,
                  transition: "width 0.3s ease-in-out",
                }}
              ></div>
            </div>
            <p style={{ margin: "0px", width: "175px" }}>
              {progressPercentage}% Completed
            </p>
          </div>
        </div>
        <div className="stapForm-right">
          <div>
            {/* Form Steps */}
            {renderStep()}
            {/* Navigation Buttons */}
            <div className="photo-content">
              {currentStep < 5 ? (
                <button onClick={handleNext}>Next</button>
              ) : (
               <button onClick={handleSubmit}> <a href="/"> Back to Home</a></button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
