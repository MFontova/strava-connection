import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Redirect from "./pages/redirect";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/redirect/*",
      element: <Redirect />,
    },
    {
        path:"/login",
        element: <Home />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>)