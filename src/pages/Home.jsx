import HeroBannerCard from "../componant/home-slider";
import Category from "../componant/categories";
import Vender from "../componant/vendors";
import Pramotion from "../componant/pramotion";
import Product from "../componant/product";
import SingleCategories from "../componant/sigle-categories";
import TopVendors from "../componant/vendors-shop";
import FAQ from "../componant/faq";
import FooterBanner from "../componant/footer-banner";
import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from '@mui/icons-material/Send';
import "select2";
import "select2/dist/css/select2.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const Home = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen();
    }, 4000); // 4 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

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

  return (
    <>
      <HeroBannerCard />
      <Category />
      <Vender data={data} />
      <Pramotion />
      <Product />
      <Pramotion />
      <SingleCategories />
      <TopVendors />
      <FAQ />
      <FooterBanner />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style} className="address-modal homePopupWrap">
            <div className="homePopup">
              <div className="homePopup-text">
                <h2>get 20% discount</h2>
                <p>
                  Looking to save more on your purchases? Take advantage of an
                  exclusive 20% discount offer!
                </p>
                <div className="request-input">
                  <input type="text" placeholder="Write Your Email Here" />
                  <SendIcon />
                </div>
                <label class="checkbox-label" onClick={handleClose}>
                <input type="checkbox" />
                <div class="label-wrap">Don't show this popup again</div>
              </label>
              </div>
              <div className="homePopup-img">
                <img src="images/homePopup.jpg" />
                <IconButton
                      onClick={handleClose}
                      sx={{ position: "absolute", top: 8, right: 8 }}
                    >
                      <CloseIcon />
                    </IconButton>
              </div>
            </div>
          </Box>
        </div>
      </Modal>
    </>
  );
};

export default Home;
