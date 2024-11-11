import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Bookings from "../pages/Bookings/Bookings";
import CheckOut from "../pages/CheckOut/CheckOut";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkOut/:id",
        element: <CheckOut />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        },
        {
            path: "/bookings",
            element:<Bookings/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
