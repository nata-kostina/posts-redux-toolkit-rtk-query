import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { RouterProvider } from "react-router"
import { router } from "./router"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider
      router={router}
      fallbackElement={<div>Fallback element...</div>}
    />
  </Provider>,
)
