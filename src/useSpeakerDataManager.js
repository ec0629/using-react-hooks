import { useEffect, useReducer } from "react";
import speakersReducer from "./speakersReducer";
import SpeakerData from "./SpeakerData";

function useSpeakerDataManager() {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
  });

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => {
      dispatch({
        type: "setSpeakerList",
        data: SpeakerData,
      });
    });
    return () => {
      console.log("cleanup");
    };
  }, []);

  return { isLoading, speakerList, dispatch };
}

export default useSpeakerDataManager;
