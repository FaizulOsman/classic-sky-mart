/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/v1",
    baseUrl: "https://classic-sky-mart-server.vercel.app/api/v1",
  }),
  tagTypes: ["classic-it"],
  endpoints: () => ({}),
});

export default api;
