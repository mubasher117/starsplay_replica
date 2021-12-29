import React, { lazy, Suspense } from "react";
import "./App.css";
import { DotLineLoader } from "react-inline-loaders";
const BannersContainer = lazy(() => import("./components/BannersContainer"));

export default function App() {
  return (
    <Suspense fallback={<DotLineLoader />}>
      <BannersContainer />
    </Suspense>
  );
}
