import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserDetails from "./Components/UserDetails/UserDetails";
import ShowError from "./Components/ShowError/ShowError";
const siam = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ShowError></ShowError>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Dashboard></Dashboard>,
      },
      {
        path:"/users/:userId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={siam}></RouterProvider>
  </StrictMode>
);
