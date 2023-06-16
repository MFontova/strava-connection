import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Redirect from "./pages/redirect";
import { Login } from "./pages/login";
import ActivityDetail from "./pages/activity";
import "bootstrap-icons/font/bootstrap-icons.css"

const router = createBrowserRouter([
    {
    	path: "/",
      	element: <App/>,
    },
    {
      	path: "/redirect",
      	element: <Redirect />,
    },
    {
      	path:"/login",
      	element: <Login />
    },
    {
      	path:"/activity/:slug",
      	element: <ActivityDetail />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>)