import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination"


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
          slidesPerView={3}
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
                  style={
                    index === activeSlide
                      ? { width: windowWidth * 0.5, heigth: 200 }
                      : {
                          width: windowWidth * 0.25,
                          heigth: 200,
                          opacity: 0.3,
                          color: "black",
                        }
                  }
                >
                  <img
                    key={`${movie.titleId}_img`}
                    src={movie.thumbnails["thumb-614x1536"]?.url}
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
