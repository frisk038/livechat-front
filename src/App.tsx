import Button from "@mui/material/Button";
import { useState } from "react";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import AuthProvider from "./components/authprovider";
import Header from "./components/header";
import Profile from "./pages/profile";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
