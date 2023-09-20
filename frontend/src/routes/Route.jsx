import { createBrowserRouter, Outlet } from "react-router-dom";
import Error404 from "../components/Error404";
import Me from "../pages/Me";
import Login from "../pages/Login";
import Myself from "../pages/Myself";
import Player from "../pages/Player";
import Resume from "../pages/Resume";
import Interface from "../pages/Interface";

const pages = [
  {
    path: "/",
    element: <Me />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/interface",
    element: <Interface />,
  },
  {
    path: "/player",
    element: <Player />,
  },
  {
    path: "/myself",
    element: <Myself />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
];

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <Error404 />,
    children: pages,
  },
]);

export default Route;
