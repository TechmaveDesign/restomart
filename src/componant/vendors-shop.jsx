import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TopVendors = () => {

    const vendors = [
        {
          imgSrc: 'images/vender-logo1.png',
          distance: '4.6 km',
          name: 'Albertsons Mart',
          deliveryTime: '10:12am',
        },
        {
          imgSrc: 'images/vender-logo2.png',
          distance: '3 km',
          name: 'Giant Mart',
          deliveryTime: '1:43pm',
        },
        {
          imgSrc: 'images/vender-logo3.png',
          distance: '4.6 km',
          name: 'Walmart',
          deliveryTime: '10:12am',
        },
        {
            imgSrc: 'images/vender-logo5.png',
            distance: '6 km',
            name: 'Testy Meals',
            deliveryTime: '11:00am',
          },
        {
          imgSrc: 'images/vender-logo4.png',
          distance: '4.6 km',
          name: 'Free Delivery',
          deliveryTime: '10:12am',
        },
        {
            imgSrc: 'images/vender-logo2.png',
            distance: '3 km',
            name: 'Giant Mart',
            deliveryTime: '12:00am',
          }
      ];
  
      // Slick slider settings
      const sliderSettings = {
        dots: false,
        infinite: true,
        autoplay:true,
        arrow:true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
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
    <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
      <div className="Vendors-wrap">
        <h2 className="common-text">Explore Top Vendors</h2>
        <div className="Vendors-wrap-inner">
        <Slider {...sliderSettings}>
            {vendors.map((vendor, index) => (
            <div key={index} className="Top-Vendors-box">
                <a href="#">
                <img src='images/vender.png' />
                <div className='Top-Vendors-all'>
                    <div className="Top-Vendors-img">
                        <div className={`Top-Vendors-inner ${index % 2 !== 0 ? 'odd-class' : ''}`}>
                          <img src={vendor.imgSrc} alt={vendor.name} />
                        </div>
                    </div>
                    <h6>{vendor.name}</h6>
                    <p>
                    <label><img src='images/location.png' /> {vendor.distance} Away</label> , <span> {vendor.deliveryTime}</span>
                    </p>
                </div>
                </a>
            </div>
            ))
            }
            </Slider>
      </div> 
      </div>
    </div>
  );
};

export default TopVendors;

