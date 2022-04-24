import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import serverReducer from "./serverReducer";

const rootReducer = combineReducers({
  chat: chatReducer,
  server: serverReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
