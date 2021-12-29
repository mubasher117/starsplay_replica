import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import "swiper/css";

const HeroBanner = ({ id, title, movies }) => {
  return (
    <>
      <div className="heroBannersContainer">
        <Swiper
          key={`${id}_${title}`}
          centeredSlides={true}
          spaceBetween={0}
          slidesPerView="auto"
          loop={true}
        >
          {movies.map((movie, index) => {
            let nextIndex = (index + 1) % movies.length;
            let nextExtraIndex =
              (((index + 1) % movies.length) + 1) % movies.length;
            console.log(nextExtraIndex);

            return (
              <>
                <SwiperSlide key={movie.titleId}>
                  <div>
                    <img
                      key={`${movie.titleId}_img`}
                      width={"25%"}
                      height={200}
                      src={movie.thumbnails["thumb-613x1536"]?.url}
                      className="inActiveSlide"
                      alt={movie.title}
                    />
                    <img
                      key={`${movie.titleId}_img`}
                      width={"50%"}
                      height={200}
                      src={movies[nextIndex]?.thumbnails["thumb-613x1536"]?.url}
                      className="activeSlide"
                      alt={movie.title}
                    />
                    <img
                      key={`${movie.titleId}_img`}
                      width={"25%"}
                      height={200}
                      src={
                        movies[nextExtraIndex]?.thumbnails["thumb-613x1536"]
                          ?.url
                      }
                      className="inActiveSlide"
                      alt={nextExtraIndex}
                    />
                  </div>
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
