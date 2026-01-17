import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../root/Root";
import Add from "../pages/Add";
import List from "../pages/List";
import Orders from "../pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path: '/',
            element: <div>hello admin</div>

        },
        {
            path: '/add',
            element: <Add></Add>

        },
        {
            path: '/list',
            element: <List></List>

        },
        {
            path: '/orders',
            element: <Orders></Orders>

        },
    ]
  },
]);

export default router;