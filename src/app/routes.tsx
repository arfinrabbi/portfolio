import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Portfolio } from "./pages/DesignProcess";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/portfolio",
    Component: Portfolio,
  },
]);
