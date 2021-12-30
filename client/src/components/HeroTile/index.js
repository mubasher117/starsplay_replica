import React from "react";
import "./index.css";
import "swiper/css";

const HeroTile = ({ movie, movies, nextIndex, nextExtraIndex, isActive }) => {
  if (isActive) {
    return (
      <div>
        <img
          key={`${movie?.titleId}_img`}
          width={"25%"}
          height={250}
          src={movie?.thumbnails["thumb-613x1536"]?.url}
          className="inActiveSlide"
          alt={movie?.title}
        />
        <img
          key={`${movie?.titleId}_img`}
          width={"50%"}
          height={250}
          src={movies[nextIndex]?.thumbnails["thumb-613x1536"]?.url}
          className="activeSlide"
          alt={movie?.title}
        />
        <img
          key={`${movie?.titleId}_img`}
          width={"25%"}
          height={250}
          src={movies[nextExtraIndex]?.thumbnails["thumb-613x1536"]?.url}
          className="inActiveSlide"
          alt={nextExtraIndex}
        />
      </div>
    );
  }
  return (
    <img
      key={`${movie?.titleId}_img`}
      width={"25%"}
      height={250}
      src={movies[nextExtraIndex]?.thumbnails["thumb-613x1536"]?.url}
      className="inActiveSlide"
      alt={movie?.title}
    />
  );
};

export default HeroTile;
