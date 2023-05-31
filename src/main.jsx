import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LayoutDefault from "./layouts/LayoutDefault/LayoutDefault";
import Posts from "./pages/Posts";
import PostCreate from "./pages/PostCreate";
import PostRead from "./pages/PostRead";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutDefault />}>
      <Route index element={<Posts />} />
      <Route path="post-create" element={<PostCreate />} />
      <Route path="post-read/:id" element={<PostRead />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
