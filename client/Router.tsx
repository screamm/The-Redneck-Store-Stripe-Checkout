import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./src/pages/NotFound";
import { Home } from "./src/pages/Home";
import { Cancellation } from "./src/pages/Cancellation";
import { Confirmation } from "./src/pages/Confirmation";
import { Store } from "./src/pages/Store";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,

    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/confirmation",
        element: <Confirmation />,
      },
      {
        path: "/cancellation",
        element: <Cancellation />,
      },
    ],
  },
]);
