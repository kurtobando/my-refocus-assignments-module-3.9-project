import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import LayoutDefault from "./layouts/LayoutDefault/LayoutDefault";
import PagePosts from "./pages/PagePosts.jsx";
import PagePostCreate from "./pages/PagePostCreate.jsx";
import PagePost, { PostLoader } from "./pages/PagePost.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<LayoutDefault />}>
            <Route index element={<PagePosts />} />
            <Route path='post/create' element={<PagePostCreate />} />
            <Route path='post/:id' element={<PagePost />} loader={PostLoader} />
            <Route path='*' element={<PageNotFound />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
