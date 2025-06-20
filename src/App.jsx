import React, { lazy, Suspense } from "react";
import "./App.css"; 
import ImageGalleryApp from "./ImageGalleryApp";
import WeatherApp from "./WeatherApp";
import EcommercePage from "./EcommercePage";

const Header = lazy(() => import("./components/Header"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const Content = lazy(() => import("./components/Content"));

function App() {
  return (
    <>
      <Suspense fallback={<div>⏳ Loading Header...</div>}>
        <Header />
      </Suspense>

      <div className="main-layout">
        <Suspense fallback={<div style={{ padding: "2rem" }}>⏳ Loading Sidebar...</div>}>
          <Sidebar />
        </Suspense>

        <Suspense fallback={<div style={{ padding: "2rem" }}>⏳ Loading Content...</div>}>
          <Content />
        </Suspense>
       

      </div>

       <ImageGalleryApp />
       <WeatherApp />
       <EcommercePage />
    </>
  );
}

export default App;
