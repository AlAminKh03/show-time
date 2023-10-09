import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import WatchList from "../pages/WatchList";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watchlist",
        element: <WatchList />,
      },
    ],
  },
]);
