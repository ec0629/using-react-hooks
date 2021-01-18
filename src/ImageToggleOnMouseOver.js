import React, { useRef } from "react";

const ImageToggleOnMouseOver = (props) => {
  const { primaryImg, secondaryImg, ...rest } = props;
  const imageRef = useRef(null);
  return (
    <img
      onMouseOver={() => {
        console.log("Mouse over");
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      src={primaryImg}
      ref={imageRef}
      {...rest}
    />
  );
};

export default ImageToggleOnMouseOver;
