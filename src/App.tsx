import React, { useEffect } from "react";
import ChannelContainer, { Channel } from "./containers/ChannelContainer";
import ChatLog from "./containers/ChatLog";
import Hub from "./containers/Hub";
import { useDispatch } from "react-redux";
import * as channelActions from "./state/actions/channelActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: channelActions.setChannels.type, payload: textChannels });
  }, []);
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

const textChannels: Channel[] = [
  { name: "Channel 1", id: "1" },
  { name: "Channel 2", id: "2" },
  { name: "Channel 3", id: "3" },
];
