import React, { useState, useEffect } from "react";
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
  const [currentImageId, setCurrentImageId] = useState(0);
  const [mouseEventCnt, setMouseEventCnt] = useState(0);

  useEffect(() => {
    window.document.title = `ImageId: ${currentImageId}`;
    console.log(`useEffect: setting title to ${currentImageId}`);
  }, [currentImageId]); // now that we have set a dependency the
  // useEffect function will only run on component mounting and
  // a change in the currentImageId even though state is changing
  // (setMouseEventCnt is still updating and therefore so is the page)
  // but this function is not firing

  return (
    <div>
      <span>Mouse Event Count: {mouseEventCnt}</span>
      {imageNames.map((imageId) => {
        return (
          <div
            key={imageId}
            onMouseOver={() => {
              setCurrentImageId(imageId);
              setMouseEventCnt(mouseEventCnt + 1);
              console.log(`onMouseOver: ${imageId}`);
            }}
          >
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
