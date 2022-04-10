import React, { useEffect, useState } from "react";
import ChatLog from "./containers/ChatLog";
import Login from "./containers/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("user"));
  }, []);

  return (
    <div className="App">
      {!isLoggedIn && <Login />}
      {isLoggedIn && <ChatLog />}
    </div>
  );
}

export default App;
