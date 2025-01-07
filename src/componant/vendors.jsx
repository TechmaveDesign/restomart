
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Vender = ({data}) => {

  const vendors = [
    {
      imgSrc: 'images/Vendors1.png',
      distance: '4.6 km',
      name: 'SuperMarket',
      deliveryTime: '10:12am',
    },
    {
      imgSrc: 'images/Vendors2.png',
      distance: '3 km',
      name: 'Borcelle',
      deliveryTime: '09:46am',
      slug: 'borcelle',
    },
    {
      imgSrc: 'images/Vendors3.png',
      distance: '4.6 km',
      name: 'Deli Grocery',
      deliveryTime: '11:20am',
      slug: 'deli-grocery',
    },
    {
      imgSrc: 'images/Vendors4.png',
      distance: '4.6 km',
      name: 'Meijer',
      deliveryTime: '07:30am',
      slug: 'meijer',
    },
    {
      imgSrc: 'images/Vendors5.png',
      distance: '6 km',
      name: 'Wegmans',
      deliveryTime: '10:12am',
      slug: 'wegmans',
    },
    {
      imgSrc: 'images/Vendors6.png',
      distance: '5.2 km',
      name: 'Kroger',
      deliveryTime: '8:20am',
      slug: 'kroger',
    },
    {
      imgSrc: 'images/Vendors7.png',
      distance: '7.2 km',
      name: 'Costco',
      deliveryTime: '09:15am',
      slug: 'costco',
    },
    {
      imgSrc: 'images/Vendors8.png',
      distance: '7.2 km',
      name: 'King Super..',
      deliveryTime: '07:00am',
      slug: 'king-super',
    },
  ];

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrow: false,
    speed: 600,
    slidesToShow: 6,
    centerPadding: '60px',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="w-full h-full mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
    <div className="Vendors-wrap">
      <h2 className="common-text pl-3">All Vendors</h2>
      <div className="Vendors-wrap-inner">
        <Slider {...sliderSettings}>
          {vendors.map((vendor, index) => (
            <div key={index} className="Vendors-box">
              {index === 0 ? (
                <a href='/MultipleShop'>
                  <div className="Vendors-img">
                    <img src={vendor.imgSrc} alt={vendor.name} />
                  </div>
                  <label>
                    <img src="images/location.png" /> Distance {vendor.distance}
                  </label>
                  <h6>{vendor.name}</h6>
                  <p>
                    {data ? "Pickup by" : "Delivery by"}: <span>{vendor.deliveryTime}</span>
                  </p>
                </a>
              ) : (
                <a href='/ProductPage'> 
                  <div className="Vendors-img">
                    <img src={vendor.imgSrc} alt={vendor.name} />
                  </div>
                  <label>
                    <img src="images/location.png" /> Distance {vendor.distance}
                  </label>
                  <h6>{vendor.name}</h6>
                  <p>
                  {data ? "Pickup by" : "Delivery by"}: <span>{vendor.deliveryTime}</span>
                  </p>
                </a>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
  );
};

export default Vender;
