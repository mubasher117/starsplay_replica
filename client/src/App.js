import React, { useEffect, useState } from "react";
import { getData } from "./api/data";
import "./App.css";
import HeroBanner from "./components/HeroBanner";
import BannerContainer from './components/BannerContainer'

export default function App() {
  const [content, setContent] = useState();
  useEffect(() => {
    getData(0)
      .then((res) => {
        setContent(res.data);
      })
      .catch((err) => {console.log(err);
      alert("Internal Server Error")});
  }, []);
  return (
    <>
      <div>
        <div>
          {content?.titles?.length > 0 && (
            <HeroBanner
              key={content?.titles[0].moduleId}
              id={content?.titles[0].moduleId}
              title={content?.titles[0].title}
              movies={content?.titles[0].layoutTitles?.titles}
            />
          )}
        </div>
        <BannerContainer/>
      </div>
    </>
  );
}
