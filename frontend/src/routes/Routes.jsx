import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from '../pages/Home'
import Product from '../pages/Product'
import About from '../pages/About'
import Collection from '../pages/Collection'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import PlaceOrder from '../pages/PlaceOrder'
import Orders from '../pages/Orders'
import Contact from '../pages/Contact'
import Verify from "../pages/Verify";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/product/:productId',
            element: <Product></Product>
        },
        {
          path:'/contact',
          element: <Contact></Contact>
        },
        
        {
          path:'/collection',
          element: <Collection></Collection>
        },
        {
          path:'/orders',
          element: <Orders></Orders>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path:'/cart',
          element: <Cart></Cart>
        },
        {
          path:'/place-order',
          element: <PlaceOrder></PlaceOrder>
        },
        {
          path:'/verify',
          element: <Verify></Verify>
        },
        {
          path:'/login',
          element: <Login></Login>
        },

    ]
  },
]);