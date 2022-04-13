import { createAction } from "@reduxjs/toolkit";
import { Message } from "../../components/chatlog/Messages";

export const initialize = createAction<Message[]>("chat/initialize");
export const add = createAction<Message>("chat/add");
