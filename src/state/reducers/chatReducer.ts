import { createReducer } from "@reduxjs/toolkit";
import { Message } from "../../components/chatlog/Messages";
import * as actions from "../actions/chatActions"

const initialState: Message[] = [];

const chatReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.initialize, (state, action) => {
      return action.payload;
    })
    .addCase(actions.add, (state, action) => {
      return [...state, action.payload];
    });
});

export default chatReducer;
