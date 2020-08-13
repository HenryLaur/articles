import React from "react";
import "./App.css";
import { getRss } from "./components/rss/RssActions";
import { MainPage } from "./screen/MainPage";

getRss();
function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
