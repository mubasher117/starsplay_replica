import React, { useEffect, useState, lazy, Suspense } from "react";
import { DotLineLoader } from "react-inline-loaders";
import { getData } from "../../api/data";
const Banner = lazy(() => import("../Banner"));
const HeroBanner = lazy(() => import("../HeroBanner"));

const BannersContainer = () => {
  const [content, setContent] = useState();
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    setIsLoading(true);
    getData(0, 3)
      .then((res) => {
        setContent(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        alert("Internal Server Error");
      });
  }, []);
  const scrollEnd = () => {
    setIsLoading(true);
    getData(content.nextPage, 3)
      .then((res) =>
        setContent((prevContent) => {
          let tempContent = { ...prevContent };
          tempContent.titles = tempContent.titles?.concat(...res.data.titles);
          tempContent.nextPage = res.data.nextPage;
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
        {content?.titles?.length > 0 && (
          <Suspense fallback={<DotLineLoader />}>
            <HeroBanner
              key={content?.titles[0].moduleId}
              id={content?.titles[0].moduleId}
              title={content?.titles[0].title}
              movies={content?.titles[0].layoutTitles?.titles}
            />
          </Suspense>
        )}
      </div>
      <div>
        {content?.titles?.map((title, index) => {
          if (title.moduleType !== "HERO") {
            return (
              <Suspense fallback={<DotLineLoader />}>
                <Banner
                  key={title.moduleId}
                  id={title.moduleId}
                  title={title.title}
                  movies={title.layoutTitles?.titles}
                />
              </Suspense>
            );
          }
        })}
        {isLoading && <DotLineLoader />}
      </div>
    </>
  );
};
export default BannersContainer;
