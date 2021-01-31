import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";
import { GlobalProvider } from "./GlobalState";
import { FavoriteClickCountProvider } from "./FavoriteClickCountContext";

export const ConfigContext = React.createContext();

function pageToShow(pageName) {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;
  return <div>Not Found</div>;
}

function App({ pageName }) {
  return (
    <ConfigContext.Provider value={configValue}>
      <GlobalProvider>
        <FavoriteClickCountProvider>
          <div>{pageToShow(pageName)}</div>
        </FavoriteClickCountProvider>
      </GlobalProvider>
    </ConfigContext.Provider>
  );
}

const configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true,
};

export default App;
