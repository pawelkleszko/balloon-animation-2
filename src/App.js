import React from "react";
import "./App.css";
import Animation from "./Animation";

function App() {
  return (
    <div className="App balloon-animation">
      <Animation
        className="flying-cloud"
        src="\cloud.png"
        ratioX="0.2"
        ratioY="0.23"
      />
      <Animation
        className="flying-cloud"
        src="\cloud.png"
        ratioX="0.26"
        ratioY="0.34"
      />
      <Animation
        className="flying-cloud"
        src="\cloud.png"
        ratioX="0.1"
        ratioY="0.11"
      />
      <Animation
        className="flying-cloud"
        src="\cloud.png"
        ratioX="0.13"
        ratioY="0.53"
      />
      <Animation
        className="flying-cloud"
        src="\cloud.png"
        ratioX="0.23"
        ratioY="0.41"
      />

      <Animation
        className="flying-balloon"
        src="\balloon.png"
        ratioX="0.07"
        ratioY="0.3"
      />
    </div>
  );
}

export default App;
