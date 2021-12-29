import React, { useEffect, useState } from "react";
import { getData } from "../../api/data";
import Banner from "../Banner";
import { DotLineLoader } from "react-inline-loaders";

const BannerContainer = () => {
  const [content, setContent] = useState();
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    getData(0, 3)
      .then((res) => {
        setContent(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Internal Server Error");
      });
  }, []);
  const scrollEnd = () => {
    setIsLoading(true);
    getData(content.nextPage,3)
      .then((res) =>
        setContent((prevContent) => {
          let tempContent = { ...prevContent };
          tempContent.titles = tempContent.titles?.concat(...res.data.titles);
          tempContent.nextPage = res.data.nextPage;
          console.log(tempContent);
          setContent(tempContent);
          setIsLoading(false);
        })
      )
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollEnd();
    }
  };
  return (
    <>
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
        {isLoading && <DotLineLoader />}
      </div>
    </>
  );
};
export default BannerContainer;
