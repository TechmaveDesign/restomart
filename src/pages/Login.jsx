import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="outerLogin">
    <div className="login-wrap">
      <div className="login-box Single">
        {/* <div className="login-image">
          <a href="/">
            <img src="images/login.jpg" alt="Login" />
          </a>
        </div> */}
        <div className="login-text-wrap">
          <div className="login-logo">
          <a href="/">
            <img src="images/logo.png" />
            </a>
          </div>
          <h2>Log in to your Account</h2>
          <p>
            Enter your email and password to log in{" "}
            <a href="/signup"> Create account</a>
          </p>
          <div className="photo-content">
            <div className="request-input">
              <label>
                Email <span>*</span>
              </label>
              <EmailIcon />
              <input type="text" placeholder="test123@gmail.com" />
            </div>
            <div className="request-input">
              <label>
                Password <span>*</span>
              </label>
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
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </span>
              </div>
            </div>
            <div className="Forgot-wrap">
              <label class="checkbox-label">
                <input type="checkbox" />
                <div class="label-wrap">Keep me signed in</div>
              </label>
              <a href="#"> Forgot Password</a>
            </div>
            <button><a href="/"> Login Now </a></button>
            <span className="or">
              <label></label> or <label></label>
            </span>
            <div className="google-btn-wrpa">
              <button>
                <img src="images/google.png" className="google" />Google
              </button>
              <button>
                <img src="images/facebook.png"  className="google" />Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
