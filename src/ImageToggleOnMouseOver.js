import React from "react";

const ImageToggleOnMouseOver = (props) => {
  const { primaryImg, secordaryImg, ...rest } = props;
  return <img src={primaryImg} {...rest} />;
};

export default ImageToggleOnMouseOver;
