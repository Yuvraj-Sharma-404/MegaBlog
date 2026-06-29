import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function BlogImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl aspect-video">
      {!loaded && (
        <div className="absolute inset-0">
          <ImagePlaceholder />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
