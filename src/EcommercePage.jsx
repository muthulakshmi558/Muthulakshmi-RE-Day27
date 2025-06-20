import React, { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const ProductDetails = lazy(() => import("./components/ProductDetails"));
const Reviews = lazy(() => import("./components/Reviews"));
const Suggestions = lazy(() => import("./components/Suggestions"));

const EcommercePage = () => {
  return (
    <div className="container">
      <h2> Product Page</h2>

      <Suspense fallback={<Loader />}>
        <ProductDetails />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Reviews />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Suggestions />
      </Suspense>
    </div>
  );
};

export default EcommercePage;
