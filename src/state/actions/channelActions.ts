import {createAction} from "@reduxjs/toolkit"
import { Message } from "../../components/chatlog/Messages";
import {Channel} from "../../containers/ChannelContainer"

export const setChannels = createAction<Channel[]>("channels/set");
export const setCurrentChannel = createAction<string>("channels/setCurrent");
export const addMessage = createAction<AddMessage>("channels/addMessage")

type AddMessage = {
    channelId: string;
    message: Message;
}