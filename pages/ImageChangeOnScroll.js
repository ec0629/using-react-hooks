import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const imageNames = [
  "001",
  "002",
  "003",
  "004",
  "005",
  "006",
  "007",
  "008",
  "009",
  "010",
];

const ImageChangeOnScroll = () => {
  return (
    <div>
      {imageNames.map((imageId) => {
        return (
          <div key={imageId}>
            <ImageToggleOnScroll
              primaryImg={`/static/img${imageId}-thmb-bw.jpg`}
              secondaryImg={`/static/img${imageId}-thmb.jpg`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
