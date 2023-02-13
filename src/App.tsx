import { useState } from "react";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/profile",
        element: <div>Child Element!</div>,
      },
      {
        path: "/login",
        element: <Login></Login>,
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
