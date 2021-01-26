import React from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";

function SpeakerDetail(details) {
  const {
    id,
    firstName,
    lastName,
    favorite,
    bio,
    onHeartFavoriteHandler,
  } = details;

  console.log(`SpeakerDetail: ${id} ${firstName} ${lastName} ${favorite}`);

  return (
    <div className="card col-4 cardmin">
      <ImageToggleOnScroll
        className="card-img-top"
        primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
        alt={`${firstName} ${lastName}`}
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            data-session-id={id}
            className={`heartbtn ${
              favorite ? "heartbtn-red" : "heartbtn-dark"
            }`}
            onClick={(e) => {
              onHeartFavoriteHandler(e, !favorite);
            }}
          />
          <span>
            {firstName} {lastName}
          </span>
        </h4>
        <span>{bio}</span>
      </div>
    </div>
  );
}

export default React.memo(SpeakerDetail);
