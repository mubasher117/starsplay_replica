import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import "swiper/css";


const HeroBanner = ({ id, title, movies }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  });
  return (
    <>
      <div className="heroBannerContainer">
        <Swiper
          key={`${id}_${title}`}
          centeredSlides={true}
          spaceBetween={0}
          slidesPerView={'auto'}
          loop={true}
          onTransitionEnd={(e) => {
            setActiveSlide(e.realIndex );
          }}
        >
          {movies.map((movie, index) => {
            console.log(windowWidth)
            console.log(windowWidth * 0.5)
            console.log(windowWidth * 0.25)
            return (
              <>
                <SwiperSlide
                act
                  key={movie.titleId}
                  style={{
                    width: index === activeSlide ?  "50%" :  "25%",
                    heigth: 200,
                    opacity: index === activeSlide ? 1 : 0.3,
                    color: "black",
                  }}
                >
                  <img
                    key={`${movie.titleId}_img`}
                    src={movie.thumbnails["thumb-677x474"]?.url}
                    className="heroBannerThumbnail"
                    alt={movie.title}
                  />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default HeroBanner;
