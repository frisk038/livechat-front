import Button from "@mui/material/Button";
import { useState } from "react";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/profile",
        element: <Button variant="contained">Hello World</Button>,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
