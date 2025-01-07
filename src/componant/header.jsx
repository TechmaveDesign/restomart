import { React, useState } from "react";
import RedeemIcon from '@mui/icons-material/Redeem';

const Header = ({setData}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("delivery");
  const handleTabClick = (tab) => {
    setData((pre)=>!pre);
    setActiveTab(tab);
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const menuData = [
    {
      category: "Vegetable",
      subcategory: "Green Vegetable",
      products: [
        { name: "Fresh Green Spinach", image: "images/products/p-1.png" },
        { name: "Crisp Red Bell Pepper", image: "images/products/p-2.png" },
        { name: "Organic Yellow Corn", image: "images/products/p-3.png" },
        { name: "Ripe Cherry Tomatoes", image: "images/products/p-4.png" },
        { name: "Fresh Garden Carrots", image: "images/products/p-5.png" },
        { name: "Crisp Green Cucumber", image: "images/products/p-6.png" },
        { name: "Sweet Butternut Squash", image: "images/products/p-7.png" },
        { name: "Leafy Green Kale", image: "images/products/p-8.png" },
        { name: "Fresh Zucchini", image: "images/products/p-9.png" },
        { name: "Bright Orange Pumpkin", image: "images/products/p-10.png" },
        { name: "Juicy Red Radish", image: "images/products/p-11.png" },
        { name: "Golden Sweet Potato", image: "images/products/p-12.png" },
      ],
    },
    {
      category: "Fast Food",
      subcategory: "Fast Food",
      products: [
        { name: "Ripe Cherry Tomatoes", image: "images/products/p-4.png" },
        { name: "Fresh Garden Carrots", image: "images/products/p-5.png" },
        { name: "Crisp Green Cucumber", image: "images/products/p-6.png" },
        { name: "Sweet Butternut Squash", image: "images/products/p-7.png" },
        { name: "Leafy Green Kale", image: "images/products/p-8.png" },
        { name: "Fresh Zucchini", image: "images/products/p-9.png" },
        { name: "Bright Orange Pumpkin", image: "images/products/p-10.png" },
        { name: "Juicy Red Radish", image: "images/products/p-11.png" },
        { name: "Golden Sweet Potato", image: "images/products/p-12.png" },
        { name: "Fresh Green Spinach", image: "images/products/p-1.png" },
        { name: "Crisp Red Bell Pepper", image: "images/products/p-2.png" },
        { name: "Organic Yellow Corn", image: "images/products/p-3.png" },
      ],
    },
    
  ];

  return (
    <div class="main-menu-wrap">
      <div class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-7">
              <div class="menu">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li
                    onMouseEnter={() => handleMouseEnter(1)}
                    className={activeIndex === 1 ? `active` : ""}
                  >
                    <a href="#">
                      All categories{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 1024 1024"
                        stroke-width="1"
                      >
                        <path
                          fill="currentColor"
                          d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
                        />
                      </svg>{" "}
                    </a>
                    <div class="sub-menu container tab-a subhight">
                      <div class="content" data-content="windows">
                        <div class="sunmenu-wrap">
                          <div class="sunmenu-section All-categories">
                            <ul>
                              <li onMouseLeave={handleMouseLeave}>
                                <a href="#">
                                  <p>Vegetable</p>
                                </a>
                                <div className="subsub-categorie">
                                  <p>Green Vegetable</p>
                                  <ul>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-1.png" />
                                        Fresh Green Spinach
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-2.png" />
                                        Crisp Red Bell Pepper
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-3.png" />
                                        Organic Yellow Corn
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-4.png" />
                                        Ripe Cherry Tomatoes
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-5.png" />
                                        Fresh Garden Carrots
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-6.png" />
                                        Crisp Green Cucumber
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-7.png" />
                                        Sweet Butternut Squash
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-8.png" />
                                        Leafy Green Kale
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-9.png" />
                                        Fresh Zucchini
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-10.png" />
                                        Bright Orange Pumpkin
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-11.png" />
                                        Juicy Red Radish
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-12.png" />
                                        Golden Sweet Potato
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a href="#">
                                  <p>Fast Food</p>
                                </a>

                                <div className="subsub-categorie">
                                  <p>Fast Food</p>
                                  <ul>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-4.png" />
                                        Ripe Cherry Tomatoes
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-5.png" />
                                        Fresh Garden Carrots
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-6.png" />
                                        Crisp Green Cucumber
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-7.png" />
                                        Sweet Butternut Squash
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-8.png" />
                                        Leafy Green Kale
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-9.png" />
                                        Fresh Zucchini
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-10.png" />
                                        Bright Orange Pumpkin
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-11.png" />
                                        Juicy Red Radish
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-12.png" />
                                        Golden Sweet Potato
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-1.png" />
                                        Fresh Green Spinach
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-2.png" />
                                        Crisp Red Bell Pepper
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-3.png" />
                                        Organic Yellow Corn
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a href="#">
                                  <p>Cafe</p>
                                </a>
                                <div className="subsub-categorie">
                                  <p>Cafe Restaurants</p>
                                  <ul>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-1.png" />
                                        Fresh Green Spinach
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-2.png" />
                                        Crisp Red Bell Pepper
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-3.png" />
                                        Organic Yellow Corn
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-4.png" />
                                        Ripe Cherry Tomatoes
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-5.png" />
                                        Fresh Garden Carrots
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-6.png" />
                                        Crisp Green Cucumber
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-7.png" />
                                        Sweet Butternut Squash
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-8.png" />
                                        Leafy Green Kale
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-9.png" />
                                        Fresh Zucchini
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-10.png" />
                                        Bright Orange Pumpkin
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-11.png" />
                                        Juicy Red Radish
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-12.png" />
                                        Golden Sweet Potato
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a href="#">
                                  <p>Caterer</p>
                                </a>
                                <div className="subsub-categorie">
                                  <p>Caterer</p>
                                  <ul>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-4.png" />
                                        Ripe Cherry Tomatoes
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-5.png" />
                                        Fresh Garden Carrots
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-6.png" />
                                        Crisp Green Cucumber
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-7.png" />
                                        Sweet Butternut Squash
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-8.png" />
                                        Leafy Green Kale
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-9.png" />
                                        Fresh Zucchini
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-10.png" />
                                        Bright Orange Pumpkin
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-11.png" />
                                        Juicy Red Radish
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-12.png" />
                                        Golden Sweet Potato
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-1.png" />
                                        Fresh Green Spinach
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-2.png" />
                                        Crisp Red Bell Pepper
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-3.png" />
                                        Organic Yellow Corn
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a href="#">
                                  <p>Restaurants</p>
                                </a>

                                <div className="subsub-categorie">
                                  <p>Restaurants</p>
                                  <ul>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-1.png" />
                                        Fresh Green Spinach
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-2.png" />
                                        Crisp Red Bell Pepper
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-3.png" />
                                        Organic Yellow Corn
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-4.png" />
                                        Ripe Cherry Tomatoes
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-5.png" />
                                        Fresh Garden Carrots
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-6.png" />
                                        Crisp Green Cucumber
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-7.png" />
                                        Sweet Butternut Squash
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-8.png" />
                                        Leafy Green Kale
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-9.png" />
                                        Fresh Zucchini
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-10.png" />
                                        Bright Orange Pumpkin
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-11.png" />
                                        Juicy Red Radish
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/ProductPage">
                                        <img src="images/products/p-12.png" />
                                        Golden Sweet Potato
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a href="#">
                                  <p>Caterer</p>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <p>Cafe</p>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <p>Vegetable</p>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="/offer">Offers</a>
                  </li>
                  <li>
                    <a href="/allvenders">Venders</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">
                      Get the app{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 1024 1024"
                        stroke-width="1"
                      >
                        <path
                          fill="currentColor"
                          d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
                        />
                      </svg>
                    </a>
                    <div class="sub-menu container none-tab">
                      <div class="content">
                        <div class="sunmenu-wrap">
                          <div className="app-wrap">
                            <div class="sunmenu-section">
                              <h4 className="mb-0 getApp">Get the Restomarkets app</h4>
                              <p>
                                Find products, communicate with suppliers, and
                                manage and pay for your orders with the
                                Restomarkets app anytime, anywhere.
                              </p>
                              <div className="app-left">
                                <a href="">
                                  <img src="images/app.avif" />
                                </a>
                                <a href="#">
                                  <img src="images/google.avif" />
                                </a>
                              </div>
                              <a href="#">Learn More</a>
                            </div>
                            <div className="app-box">
                              
                              <div className="app-right">
                                <img src="images/app.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <a href="/becomevendor">Become a Vendor</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="delivery-wrap">
                <ul>
                  <li
                    className={activeTab === "delivery" ? "active" : ""}
                    onClick={() => handleTabClick("delivery")}
                  >
                    <a href="#">
                      {/* <img src="/images/delivery.png" alt="Delivery Icon" />{" "} */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="m29.482 8.624l-10-5.5a1 1 0 0 0-.964 0l-10 5.5a1 1 0 0 0 0 1.752L18 15.591V26.31l-3.036-1.67L14 26.391l4.518 2.485a1 1 0 0 0 .964 0l10-5.5A1 1 0 0 0 30 22.5v-13a1 1 0 0 0-.518-.876M19 5.142L26.925 9.5L19 13.858L11.075 9.5Zm9 16.767l-8 4.4V15.59l8-4.4Z"/><path fill="currentColor" d="M10 16H2v-2h8zm2 8H4v-2h8zm2-4H6v-2h8z"/></svg>
                      Delivery
                    </a>
                  </li>
                  <li
                    className={activeTab === "pickup" ? "active" : ""}
                    onClick={() => handleTabClick("pickup")}
                  >
                    <a href="#" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" stroke-miterlimit="1.5" d="M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/><path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9"/><path stroke-linejoin="round" d="M2 9h4"/><path d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1"/></g></svg>
                     Pickup
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
