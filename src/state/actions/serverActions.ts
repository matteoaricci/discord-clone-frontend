import { createAction } from "@reduxjs/toolkit";

export type Server = {
  id: string;
  name: string;
};

export const init = createAction<Server[]>("server/init");
export const addServer = createAction<Server>("server/add");
