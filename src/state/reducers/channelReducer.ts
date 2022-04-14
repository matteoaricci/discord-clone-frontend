import { createReducer } from "@reduxjs/toolkit";
import { Channel } from "../../containers/ChannelContainer";
import * as actions from "../actions/channelActions";

interface ChannelState {
  channels: Channel[];
  currentChannel: Channel;
}

const initialState: ChannelState = {
  channels: [],
  currentChannel: {} as Channel,
};

const channelReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setChannels, (state, action) => {
      state.channels = action.payload;
    })
    .addCase(actions.setCurrentChannel, (state, action) => {
      state.currentChannel = action.payload;
    });
});

export default channelReducer;
