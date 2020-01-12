import React ,{ Suspense } from "react";
import LoadingPage from "../pages/loading-page/loading-page";

// #############################################################################
// this function will show the progress while the component is rendering 
// #############################################################################

export const lazyHoc = (WrappedComponent) => () => (
  <Suspense fallback={<LoadingPage/>}> <WrappedComponent/> </Suspense>
);
