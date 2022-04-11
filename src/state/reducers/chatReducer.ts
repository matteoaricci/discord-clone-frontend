import { createAction, createReducer } from "@reduxjs/toolkit";
import { Message } from "../../components/chatlog/Messages";

const initialState: Message[] = [];

const initialize = createAction<Message[]>("chat/initialize");
const add = createAction<Message>("chat/add");

const chatReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(initialize, (state, action) => {
      return action.payload;
    })
    .addCase(add, (state, action) => {
      return [...state, action.payload];
    });
});

export default chatReducer;
