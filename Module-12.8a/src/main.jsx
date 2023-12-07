import React from "react";
import ReactDOM from "react-dom/client";

import { NewPost } from "./NewPost";

import { Root } from "./Root";

import { PostList, loader as postListLoader } from "./PostList";
import { Post, loader as postLoader } from "./Post";
import { User, loader as userLoader } from "./User";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <PostList />,
        loader: postListLoader,
      },
      {
        path: "/post/:postId",
        element: <Post />,
        loader: postLoader,
      },
      {
        path: "/user/:userId",
        element: <User />,
        loader: userLoader,
      },
      {
        path: "/post/new",
        element: <NewPost />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
