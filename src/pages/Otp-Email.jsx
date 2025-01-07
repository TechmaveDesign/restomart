import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from '@mui/icons-material/Close';

const OtpEmail = () => {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) {
      e.target.value = "";
      return;
    }
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="outerLogin">
    <div className="login-wrap">
      <div className="login-box Single">
        {/* <div className="login-image OTP">
          <a href="/">
            <img src="images/login.jpg" alt="Login" />
          </a>
        </div> */}
        <div className="login-text-wrap">
          <div className="opt-wrap">
            <div className="login-logo">
              <a href="/">
                <img src="images/logo.png" />
              </a>
            </div>
            <h2>Verify Your Email</h2>
            <p>We’ve sent a 4-digit verification code to your email address.</p>
            <p>
              <b>Enter the code to verify your email.</b>
            </p>
            <a href="#">Resend Code</a>
            <div className="photo-content OTP">
              <div className="request-input">
                {[0, 1, 2, 3].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
              </div>
              <button onClick={handleOpen}>Verify Otp</button>
              <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box sx={style} className="OTP-Verify">
                <button className="close" onClick={handleClose}><CloseIcon /></button>
                  <img src="images/check.gif" />
                  <h2>OTP Verify Successfully </h2>
                  <p>OTP verified successfully! You’re all set to proceed.</p>
                  <button><a href="/login">Okay</a></button>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OtpEmail;
