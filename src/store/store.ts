import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { api } from "./api/api"

const rootReducer = {
  api: api.reducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
