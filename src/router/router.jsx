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
import PrivateRoute from "./PrivateRoute";
import AllServices from "../pages/AllServices";
import SingleServiceDetails from "../privatePages/SingleServiceDetails";
import BookService from "../privatePages/BookService";

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
        path: '/services',
        element: <AllServices></AllServices>,
        loader: ()=> fetch('https://task-buddy-server-side.vercel.app/allServices')
      },
      {
        path: '/singleServiceDetails/:id',
        element: <PrivateRoute><SingleServiceDetails></SingleServiceDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://task-buddy-server-side.vercel.app/services/${params.id}`)
      },
      {
        path: '/AddService',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: '/ManageServices',
        element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>,
      },
      {
        path: '/bookService',
        element: <PrivateRoute><BookService></BookService></PrivateRoute>
      },
      {
        path: '/bookedService',
        element: <PrivateRoute><BookedService></BookedService></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/bookService')
      },
      {
        path: '/ServiceToDo',
        element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
      },
    ]
  },
]);

export default router;