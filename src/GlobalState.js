import React from "react";
import useSpeakerDataManager from "./useSpeakerDataManager";

export const GlobalContext = React.createContext();

export function GlobalProvider({ children }) {
  const {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
  } = useSpeakerDataManager();

  const provider = {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
}
