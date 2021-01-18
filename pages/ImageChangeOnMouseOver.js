import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        style={{ verticalAlign: "top" }}
        primaryImg="/static/img001-bw.jpg"
        secondaryImg="/static/img001.jpg"
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/static/img002-bw.jpg"
        secondaryImg="/static/img002.jpg"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
