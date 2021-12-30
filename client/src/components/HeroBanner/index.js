import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import "swiper/css";
import HeroTile from "../HeroTile";

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
            return (
                <SwiperSlide key={movie?.titleId}>
                  {({ isActive }) => (
                    <HeroTile
                      movies={movies}
                      movie={movie}
                      nextIndex={nextIndex}
                      nextExtraIndex={nextExtraIndex}
                      isActive={isActive}
                    />
                  )}
                </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default HeroBanner;
