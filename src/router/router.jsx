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
        loader: ()=> fetch('http://localhost:5000/allServices')
      },
      {
        path: '/singleServiceDetails/:id',
        element: <PrivateRoute><SingleServiceDetails></SingleServiceDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
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
        path: '/bookService/:id',
        element: <PrivateRoute><BookService></BookService></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/bookedService',
        element: <PrivateRoute><BookedService></BookedService></PrivateRoute>,
      },
      {
        path: '/ServiceToDo',
        element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
      },
    ]
  },
]);

export default router;