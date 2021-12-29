import React, { useRef, useState } from "react";
import './App.css'
import content from "./data/homepage.json";
import Banner from "./components/Banner";
import HeroBanner from "./components/HeroBanner";

export default function App() {
  return (
    <>
      <div>
        <div>
          <HeroBanner
            key={content?.titles[0].moduleId}
            id={content?.titles[0].moduleId}
            title={content?.titles[0].title}
            movies={content?.titles[0].layoutTitles?.titles}
          />
        </div>
        <div>
          {content?.titles?.map((title, index) => {
            if (title.moduleType !== "HERO") {
              return (
                <Banner
                  key={title.moduleId}
                  id={title.moduleId}
                  title={title.title}
                  movies={title.layoutTitles?.titles}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
