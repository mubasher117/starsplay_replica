import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import "swiper/css";


const HeroBanner = ({ id, title, movies }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWindowWidth(window.innerWidth);
  //   });
  // });
  return (
    <>
      <div className="heroBannersContainer">
        <Swiper
          key={`${id}_${title}`}
          centeredSlides={true}
          spaceBetween={0}
          slidesPerView='auto'
          loop={true}
          onTransitionEnd={(e) => {
            setActiveSlide(e.realIndex );
          }}
        >
          {movies.map((movie, index) => {
            return (
              <>
                <SwiperSlide
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
                    src={movie.thumbnails["thumb-613x1536"]?.url}
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
