import { createBrowserRouter } from "react-router-dom"
import ErrorBoundary from "./components/error/ErrorComponent"
import NoMatch from "./components/noMatch/NoMatch"
import BaseLayout from "./layouts/base/BaseLayout"
import PostDetails from "./pages/PostDetails/PostDetailsPage"
import PostsPage from "./pages/Posts/PostsPage"
import UserPage from "./pages/User/UserPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <PostsPage />,
      },
      {
        path: "posts/:postId",
        element: <PostDetails />,
      },
      {
        path: "users/:userId",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
])
