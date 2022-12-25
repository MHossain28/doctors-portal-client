import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyAppoinment from "../../Pages/Dashboard/MyAppoinment/MyAppoinment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRouth from "../PrivateRouth/PrivateRouth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appoinment",
        element: <Appoinment></Appoinment>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouth>
        <DashboardLayout></DashboardLayout>
      </PrivateRouth>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppoinment></MyAppoinment>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
