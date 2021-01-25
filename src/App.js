import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";

function pageToShow(pageName) {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;
  return <div>Not Found</div>;
}

function App({ pageName }) {
  return <div>{pageToShow(pageName)}</div>;
}

export default App;
