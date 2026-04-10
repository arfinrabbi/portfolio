import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { DesignProcess } from "./pages/DesignProcess";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/portfolio",
    Component: Portfolio,
  },
  {
    path: "/process",
    Component: DesignProcess,
  },
]);
