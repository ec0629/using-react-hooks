import React, { useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = (props) => {
  const { primaryImg, secondaryImg, ...rest } = props;
  const imageRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const [inView, setInView] = useState(false);

  const scrollHandler = () => {
    setInView(isInView());
  };

  useEffect(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);

    // this function will be executed when the component
    // unmounts
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); // with empty array the useEffect function will only
  // run on component mounting

  return (
    <img
      // need to render the image and then check if it is in view
      // to avoid flicker from black and white to color we give
      // it an initial value of opacity 0
      style={{ opacity: isLoading ? 0 : 1 }}
      src={inView ? secondaryImg : primaryImg}
      ref={imageRef}
      {...rest}
    />
  );
};

export default ImageToggleOnScroll;
