import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Aboutus from "../Pages/About/Aboutus";
import Service from "../Pages/Services/Service";
import Signin from "../Pages/Login/Signin";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Signup from "../Pages/Login/Signup";
import Contect from "../Pages/Contect/Contect";
// import Checkout from "../Pages/Services/BookNow/Checkout";
import BookService from './../Pages/Services/BookNow/BookService';




const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [

          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/aboutus',
            element:<Aboutus></Aboutus>
          },
          {
            path:'/contect',
            element:<Contect></Contect>
          },
          {
            path:'/service',
            element:<Service></Service>
          },
          {
            path:'/service/:id',
            element:<ServiceDetails></ServiceDetails>,
            // loader: ({params})=>fetch(`http://localhost:5173/service/${params.id}`)
          },
         {
            path:'/signin',
            element:<Signin></Signin>
          },
        
         {
            path:'/signup',
            element:<Signup></Signup>
          },
        
         {
            path:'book/:id',
            element:<BookService></BookService>,
            
          },
        

      ]
    },
  ]);

export default router  