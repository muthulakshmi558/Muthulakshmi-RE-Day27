import { useState, Suspense, lazy } from "react";
import "./App.css";

const GalleryChunk1 = lazy(() => import("./components/gallery/GalleryChunk1"));
const GalleryChunk2 = lazy(() => import("./components/gallery/GalleryChunk2"));
const GalleryChunk3 = lazy(() => import("./components/gallery/GalleryChunk3"));

export default function ImageGalleryApp() {
  const [showMore, setShowMore] = useState(false);

  return (
    <main style={{ padding: "2rem", maxWidth: "1000px", margin: "auto" }}>
      <h2> Lazy Loaded Image Gallery</h2>

      <Suspense fallback={<p>⏳ Loading Images...</p>}>
        <GalleryChunk1 />
        {showMore && (
          <>
            <GalleryChunk2 />
            <GalleryChunk3 />
          </>
        )}
      </Suspense>

      <button className="btn btn-warning"
        onClick={() => setShowMore(!showMore)}
        style={{ marginTop: "2rem", padding: "10px 20px", fontSize: "1rem" }}
      >
        {showMore ? "Hide Extra Images" : "Load More Images"}
      </button>
    </main>
  );
}
