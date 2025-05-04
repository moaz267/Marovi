import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideNav = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    arrows: false, 
  };

  const images = [
    "https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/client-white-2.png", 
    "https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/client-white-4.png",
    "./src/assets/logo.jpeg",
    "./src/assets/logo.jpeg",
    "./src/assets/logo.jpeg",
    "./src/assets/logo.jpeg",
    "./src/assets/logo.jpeg",
    "./src/assets/logo.jpeg",
    "./src/assets/logo.jpeg",
    "./src/assets/logo.jpeg",
    "./src/assets/logo.jpeg",
  ];

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        padding: "15px 0",
      }}
    >
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{
                width: "120px", 
                height: "120px", 
                borderRadius: "10px", 
                margin: "0 auto",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideNav;
