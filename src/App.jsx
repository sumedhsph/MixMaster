import React from "react";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//Loaders
import { loader as landingLoader } from "./pages/Landing.jsx";
import { loader as singleCocktailLoader } from "./pages/Cocktail.jsx";

//actions
import { action as newsLetterAction } from "./pages/Newsletter.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        element: <Landing />,
        errorElement: <h2>There was an error...</h2>,
      },
      {
        path: "cocktail/:id",
        loader: singleCocktailLoader(queryClient),
        errorElement: <h2>There was an error...</h2>,
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        action: newsLetterAction,
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
