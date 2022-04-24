import { createReducer } from "@reduxjs/toolkit";
import { Server } from "../actions/serverActions";
import * as actions from "../actions/serverActions";

const initialState: Server[] = [];

const serverReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.init, (state, action) => {
      return action.payload;
    })
    .addCase(actions.addServer, (state, action) => {
      return [...state, action.payload];
    });
});

export default serverReducer;
