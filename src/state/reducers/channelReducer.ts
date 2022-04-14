import { createReducer } from "@reduxjs/toolkit";
import { Channel } from "../../containers/ChannelContainer";
import * as actions from "../actions/channelActions";

interface ChannelState {
  channels: Channel[];
  currentChannel: string;
}

const initialState: ChannelState = {
  channels: [
    {
      id: "6258661e2fbfe017e7c8d8de",
      name: "Channel 1",
      messages: [
        {
          content: "Message Number 1",
        },
        {
          content: "Message Number 2",
        },
        {
          content: "Message Number 3",
        },
        {
          content: "Message Number 4",
        },
        {
          content: "Message Number 5",
        },
        {
          content: "Message Number 6",
        },
      ],
    },
    {
      id: "6258661ebf0e8c506099ca1e",
      name: "Channel 2",
      messages: [
        {
          content: "Message Number 1",
        },
        {
          content: "Message Number 2",
        },
        {
          content: "Message Number 3",
        },
        {
          content: "Message Number 4",
        },
        {
          content: "Message Number 5",
        },
        {
          content: "Message Number 6",
        },
        {
          content: "Message Number 7",
        },
      ],
    },
    {
      id: "6258661efe17945aee53d9ae",
      name: "Channel 3",
      messages: [
        {
          content: "Message Number 1",
        },
        {
          content: "Message Number 2",
        },
        {
          content: "Message Number 3",
        },
        {
          content: "Message Number 4",
        },
        {
          content: "Message Number 5",
        },
        {
          content: "Message Number 6",
        },
        {
          content: "Message Number 7",
        },
      ],
    },
  ],
  currentChannel: "",
};

const channelReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setChannels, (state, action) => {
      state.channels = action.payload;
    })
    .addCase(actions.setCurrentChannel, (state, action) => {
      console.log(action)
      state.currentChannel = action.payload;
    })
    .addCase(actions.addMessage, (state, action) => {
      const channel = state.channels.find(
        (channel) => (channel.id === action.payload.channelId)
      );
      if (channel) {
        channel.messages = [...channel.messages, action.payload.message];
      }
    });
});

export default channelReducer;
