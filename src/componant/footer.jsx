// Footer.jsx

import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="footer-section footer-logo">
                            <img src="images/logo.png" alt="Resto Markets" />
                            <p>We offer high-quality foods and the best delivery service, and the food market you can blindly trust.</p>
                            <div className="social-icons">
                                <a href="#"><img src='images/facebook.svg' /></a>
                                <a href="#"><img src='images/instagram.svg' /></a>
                                <a href="#"><img src='images/twitter.svg' /></a>
                                <a href="#"><img src='images/youtube.svg' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="footer-section">
                        <h3>About Us</h3>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">About team</a></li>
                            <li><a href="#">Customer Support</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className='col-md-2'>
                    <div className="footer-section">
                    <h3>Our Information</h3>
                    <ul>
                        <li><a href="#">Privacy Policy Update</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Site Map</a></li>
                    </ul>
                </div>
                    </div>
                    <div className='col-md-2'>
                    <div className="footer-section">
                    <h3>Community</h3>
                    <ul>
                        <li><a href="#">Announcements</a></li>
                        <li><a href="#">Answer Center</a></li>
                        <li><a href="#">Discussion Boards</a></li>
                        <li><a href="#">Giving Works</a></li>
                    </ul>
                </div>
                    </div>
                    <div className='col-md-3'>
                    <div className="footer-section subscribe">
                    <h3>Subscribe Now</h3>
                    <p>Subscribe your email for newsletter and featured news based on your interest</p>
                    <div className='SubscribeNow'>
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z"/></svg></button>
                    <input type="email" placeholder="Write your email here" />
                    <button><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[18px] 2xl:w-5 h-[18px] 2xl:h-5 false"><g clip-path="url(#clip0)"><path d="M18.809 8.21633L2.67252 1.52062C1.99272 1.23851 1.22471 1.36262 0.668264 1.84434C0.111818 2.32613 -0.120916 3.06848 0.0609589 3.78164L1.49725 9.41414H8.52951C8.85311 9.41414 9.11549 9.67648 9.11549 10.0001C9.11549 10.3237 8.85315 10.5861 8.52951 10.5861H1.49725L0.0609589 16.2186C-0.120916 16.9318 0.111779 17.6741 0.668264 18.1559C1.22584 18.6386 1.99393 18.7611 2.67256 18.4796L18.809 11.7839C19.5437 11.4791 20.0001 10.7955 20.0001 10.0001C20.0001 9.20469 19.5437 8.52113 18.809 8.21633Z" fill="#ff8200"></path></g><defs><clipPath id="clip0"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg></button>
                </div>
                </div> 
                    </div>
                    <div className='col-md-12'>
                    <div className='copy-wrap-botton'>
            <div className="copyright">
                &copy; Copyright 2024 TechMave Software. All rights reserved.
            </div>
            <div className="payment-methods">
                <img src="images/mastercard.svg" alt="MasterCard" />
                <img src="images/visa.svg" alt="Visa" />
                <img src="images/paypal.svg" alt="PayPal" />
                <img src="images/jcb.svg" alt="JCB" />
                <img src="images/skrill.svg" alt="Skrill" />
            </div>
            </div>
                    </div>
                </div>
                
            </div>
              
            
        </div>
    );
};

export default Footer;