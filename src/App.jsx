import React from "react";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { loader as landingLoader } from "./pages/Landing.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader:landingLoader,
        element: <Landing />,
        errorElement: <h2>There was an error...</h2>,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
