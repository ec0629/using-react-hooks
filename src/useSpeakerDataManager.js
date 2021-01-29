import { useEffect, useReducer } from "react";
import speakersReducer from "./speakersReducer";

const baseUrl = "http://localhost:4000";

function useSpeakerDataManager() {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
  });

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
      const resp = await fetch(`${baseUrl}/speakers`);
      if (!resp.ok) {
        throw new Error(`Request failed with status code ${resp.status}`);
      }
      const data = await resp.json();
      dispatch({ type: "setSpeakerList", data });
    }

    fetchData();

    return () => {
      console.log("cleanup");
    };
  }, []);

  return { isLoading, speakerList, toggleSpeakerFavorite };
}

export default useSpeakerDataManager;
