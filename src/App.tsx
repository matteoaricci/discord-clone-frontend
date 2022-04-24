import React, {useEffect} from "react";
import { Server } from "tls";
import ChatLog from "./containers/ChatLog";
import ServerNavList from "./containers/ServerNavList";
import { Box, createStyles } from "@mantine/core";
import { useDispatch } from "react-redux";
import * as actions from "./state/actions/serverActions";

function App() {
  const { classes } = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: actions.init.type, payload: dummyArray})
  }, [])
  
  return (
    <div className="App">
      <Box className={classes.boxContainer}>
        <ServerNavList />
        <ChatLog />
      </Box>
    </div>
  );
}

export default App;

const useStyles = createStyles({
  boxContainer: {
    display: "flex",
  },
});

const dummyArray = [
  {
    "id": "62657668577a0924a5c5fe28",
    "name": "Server 1"
  },
  {
    "id": "62657668640341cfa253b2fe",
    "name": "Server 2"
  },
  {
    "id": "62657668fd3fbe41b6f9d00d",
    "name": "Server 3"
  }
]