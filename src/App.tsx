import React, { useEffect } from "react";
import ChannelContainer from "./containers/ChannelContainer";
import ChatLog from "./containers/ChatLog";
import Hub from "./containers/Hub";

function App() {
  return (
    <div className="App">
      <Hub>
        <ChannelContainer />
        <ChatLog />
      </Hub>
    </div>
  );
}

export default App;