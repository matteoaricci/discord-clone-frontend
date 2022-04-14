import {createAction} from "@reduxjs/toolkit"
import {Channel} from "../../containers/ChannelContainer"

export const setChannels = createAction<Channel[]>("channels/set");
export const setCurrentChannel = createAction<Channel>("channels/setCurrent");