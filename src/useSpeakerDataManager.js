import { useEffect, useReducer } from "react";
import speakersReducer from "./speakersReducer";

const baseUrl = "http://localhost:4000";

function useSpeakerDataManager() {
  const [
    { isLoading, speakerList, favoriteClickCount, hasErrored, error },
    dispatch,
  ] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
    favoriteClickCount: 0,
    hasErrored: false,
    error: null,
  });

  function incrementFavoriteClickCount() {
    dispatch({ type: "incrementFavoriteClickCount" });
  }

  function toggleSpeakerFavorite(speakerRec) {
    async function updateData(data) {
      const resp = await fetch(`${baseUrl}/speakers/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!resp.ok) {
        throw new Error(`Request failed with status code ${resp.status}`);
      }
    }

    speakerRec.favorite === true
      ? dispatch({ type: "unfavorite", id: speakerRec.id })
      : dispatch({ type: "favorite", id: speakerRec.id });

    updateData({ ...speakerRec, favorite: !speakerRec.favorite });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch(`${baseUrl}/speakers`);
        if (!resp.ok) {
          throw new Error(`Request failed with status code ${resp.status}`);
        }
        const data = await resp.json();
        dispatch({ type: "setSpeakerList", data });
      } catch (e) {
        dispatch({ type: "errored", error: e });
      }
    }

    fetchData();

    return () => {
      console.log("cleanup");
    };
  }, []);

  return {
    isLoading,
    speakerList,
    favoriteClickCount,
    hasErrored,
    error,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
  };
}

export default useSpeakerDataManager;
