import React from "react";

const FooterBanner = () =>{
    return (
        <div className="FooterBanner">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="FooterBanner-text">
                            <h2>Make your online shop easier with our mobile app</h2>
                            <p>BoroBazar makes online grocery shopping fast and easy. Get groceries delivered and order the best of seasonal farm fresh food.</p>
                            <div class="app-left"><a href=""><img src="images/app.avif" /></a><a href="#"><img src="images/google.avif" /></a></div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="FooterBanner-img">
                            <img src="images/app-thumbnail.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBanner