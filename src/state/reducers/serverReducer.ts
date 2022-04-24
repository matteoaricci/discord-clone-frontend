import { createReducer } from "@reduxjs/toolkit";
import { Server } from "../actions/serverActions";
import * as actions from "../actions/serverActions";

const initialState: StateType = {
    servers: [],
    currentServer: ''
};

type StateType = {
    servers: Server[],
    currentServer: string
}

const serverReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.init, (state, action) => {
      state.servers =  action.payload;
    })
    .addCase(actions.addServer, (state, action) => {
      state.servers = [...state.servers, action.payload];
    });
});

export default serverReducer;
