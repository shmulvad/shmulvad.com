import { useState, useRef, useEffect } from "react";

// https://codeconqueror.com/blog/image-optimization-with-next-js
const Image = ({ src, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFadedAway, setImageFadedAway] = useState(false);
  const imgRef = useRef();

  const onImageLoad = () => {
    setImageLoaded(true);
    setTimeout(() => {
      setImageFadedAway(true);
    }, 400);
  };

  // If image is already loaded, onLoad will not trigger
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
      setImageFadedAway(true);
    }
  }, []);

  const traceStyle = {};

  // When image has loaded, start fading trace to opacity 0
  if (imageLoaded) {
    traceStyle.opacity = 0;
  }

  // When trace has faded away, completely hide it
  if (imageFadedAway) {
    traceStyle.display = "none";
  }

  return (
    <div className="cache-img-container">
      <img
        className={`trace-image ${className}`}
        src={require(`images/${src}?trace`).trace}
        alt={alt}
        style={traceStyle}
      />
      <img
        className={className}
        src={require(`images/${src}`)}
        alt={alt}
        ref={imgRef}
        onLoad={onImageLoad}
      />
    </div>
  );
};

export default Image;
