import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
// install Swiper modules
SwiperCore.use([Pagination]);

const Banner = ({ id, title, movies }) => {
  return (
    <div className="BannersContainer">
      <div className="bannerTitle">{title}</div>
      {movies && (
        <Swiper
          slidesPerView={9}
          spaceBetween={10}
          loop={true}
        >
          {movies.map((movie, index) => {
            return (
              <SwiperSlide key={movie.titleId}>
                <img
                  src={movie.thumbnails["thumb-677x474"]?.url}
                  className="thumbnail"
                  alt={movie.title}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default Banner;
