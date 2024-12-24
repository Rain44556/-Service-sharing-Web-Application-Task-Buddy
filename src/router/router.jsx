import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import PageNotFound from "../pages/PageNotFound";
import AddService from "../privatePages/AddService";
import ManageServices from "../privatePages/ManageServices";
import BookedService from "../privatePages/BookedService";
import ServiceToDo from "../privatePages/ServiceToDo";
import AllServices from "../pages/AllServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/AllServices',
        element: <AllServices></AllServices>
      },
      {
        path: '/AddService',
        element: <AddService></AddService>
      },
      {
        path: '/ManageServices',
        element: <ManageServices></ManageServices>
      },
      {
        path: '/BookedService',
        element: <BookedService></BookedService>
      },
      {
        path: '/ServiceToDo',
        element: <ServiceToDo></ServiceToDo>
      },
    ]
  },
]);

export default router;