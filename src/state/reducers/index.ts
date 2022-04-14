import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import channelReducer from "./channelReducer";

const rootReducer = combineReducers({
  chat: chatReducer,
  channel: channelReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
