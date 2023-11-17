import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "./logo.svg";
import "./App.css";
import "./customStyles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import DeviceManagementPage from "./pages/DeviceManagement";
import RootLayout from "./pages/RootLayout";
// import { Navbar } from "./components/Navbar";
// import { Sidebar } from "./components/Sidebar";
import { Login } from "./pages/Login";
import Userprofile from "./pages/Userprofile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/devicemgt", element: <DeviceManagementPage /> },
      // { path: "/login", element: <Login /> },
      { path: "/userprofile", element: <Userprofile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
