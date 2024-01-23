import React, { useState } from "react";

interface Image {
  src: string;
  alt?: string;
  className?: string;
  fallback?: string;
  loading?: string;
}

const images = {
  noImage: require("@/assets/images/fallback.svg"),
};

const Image = ({
  src,
  alt,
  className,
  fallback: customFallback = images.noImage,
  ...props
}: Image) => {
  const [fallback, setFallback] = useState("");

  const handleErrorImg = () => {
    setFallback(customFallback);
  };

  return (
    <img
      className={className}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleErrorImg}
      loading="lazy"
    />
  );
};

export default Image;
