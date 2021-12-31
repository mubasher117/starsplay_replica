import React from "react";
import "./index.css";
import "swiper/css";

const HeroTile = ({ movie, movies, nextIndex, nextExtraIndex, isActive }) => {
  if (isActive) {
    return (
      <>
        <img
          key={`${movie?.titleId}_img`}
          width={"25%"}
          height={250}
          src={movie?.thumbnails["thumb-613x1536"]?.url}
          className="inActiveSlide"
          alt={movie?.title}
        />
        <img
          key={`${movies[nextIndex]?.titleId}_img`}
          width={"50%"}
          height={250}
          src={movies[nextIndex]?.thumbnails["thumb-613x1536"]?.url}
          className="activeSlide"
          alt={movie?.title}
        />
        <img
          key={`${movies[nextExtraIndex]?.titleId}_img`}
          width={"25%"}
          height={250}
          src={movies[nextExtraIndex]?.thumbnails["thumb-613x1536"]?.url}
          className="inActiveSlide"
          alt={nextExtraIndex}
        />
      </>
    );
  }
  return (
    <img
      key={`${movie?.titleId}_img`}
      width={"25%"}
      height={250}
      src={movies[movie]?.thumbnails["thumb-613x1536"]?.url}
      className="inActiveSlide"
      alt={movie?.title}
    />
  );
};

export default HeroTile;
