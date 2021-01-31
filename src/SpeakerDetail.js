import React, { useContext } from "react";
import { FavoriteClickCountContext } from "./FavoriteClickCountContext";
import ImageToggleOnScroll from "./ImageToggleOnScroll";

function SpeakerDetail({ speakerRec, onHeartFavoriteHandler }) {
  const { id, firstName, lastName, favorite, bio } = speakerRec;

  console.log(`SpeakerDetail: ${id} ${firstName} ${lastName} ${favorite}`);

  const { incrementFavoriteClickCount } = useContext(FavoriteClickCountContext);

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
              onHeartFavoriteHandler(e, speakerRec);
              incrementFavoriteClickCount();
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
