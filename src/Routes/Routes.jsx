import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddFood from "../Product/AddFood";
import Details from "../Product/Details";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";
import UpdateFood from "../Product/UpdateFood";
import PrivateRoute from "../Private/PrivateRoute";
import MyFoodRequest from "../Product/MyFoodRequest";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/food')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/add',
          element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
          path:'/available',
          element:<PrivateRoute><AvailableFood></AvailableFood></PrivateRoute>,
          loader:()=>fetch('http://localhost:5000/food')
        },
        {
          path:'/updatefood/:id',
          element:<PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/food/${params.id}`)
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/food/${params.id}`)
        },
        
      ]
    },
  ]);

  export default router