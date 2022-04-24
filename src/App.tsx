import React from "react";
import ChatLog from "./containers/ChatLog";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div className="App">
        <ChatLog />
      </div>
    </MantineProvider>
  );
}

export default App;
