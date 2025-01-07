import React, { useEffect, useRef, useState } from "react";
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
import LockIcon from '@mui/icons-material/Lock';
import Select from "react-select";

// Attach jQuery to the window (if needed)
if (typeof window !== "undefined") {
  window.$ = $;
  window.jQuery = $;
}

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

const AddressPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleOpen();
  }, []);


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

  // country


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="address-book">
            <h2>Address book</h2>
            <div className="noAddress">
              <img src="images/delivery-address.webp" />
              <p>
                No addresses saved yet. Once you’ve added an address, it will be
                saved here.
              </p>
              <Button onClick={handleOpen}>Add Address</Button>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div>
                <Box sx={style} className="address-modal">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
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
                    Your personal information is encrypted and will only be used
                    for delivery purposes.
                  </p>
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
                      <input
                        type="text"
                        placeholder="Street, apartment name etc."
                      />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
