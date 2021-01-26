import React, {
  useEffect,
  useState,
  useContext,
  useReducer,
  useCallback,
} from "react";

import Header from "./Header";
import Menu from "./Menu";
import SpeakerData from "./SpeakerData";
import SpeakerDetail from "./SpeakerDetail";
import { ConfigContext } from "./App";
import speakersReducer from "./speakersReducer";

function Speakers() {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [speakerList, dispatch] = useReducer(speakersReducer, []);
  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      const filteredLoadedSpeakers = SpeakerData.filter(
        ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
      );
      dispatch({
        type: "setSpeakerList",
        data: filteredLoadedSpeakers,
      });
    });
    return () => {
      console.log("cleanup");
    };
  }, []);

  function handleChangeSaturday() {
    setSpeakingSaturday(!speakingSaturday);
  }

  const speakerListFiltered = isLoading
    ? []
    : speakerList
        .filter(
          ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
        )
        .sort((a, b) => {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        });

  function handleChangeSunday() {
    setSpeakingSunday(!speakingSunday);
  }

  const heartFavoriteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.dataset.sessionId);

    dispatch({
      type: favoriteValue === true ? "favorite" : "unfavorite",
      sessionId,
    });
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar margintopbottom5 checkbox-bigger">
          {context.showSpeakerSpeakingDays === false ? null : (
            <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSaturday}
                    checked={speakingSaturday}
                  />
                  Saturday Speakers
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSunday}
                    checked={speakingSunday}
                  />
                  Sunday Speakers
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(
              ({ id, firstName, lastName, bio, favorite }) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
