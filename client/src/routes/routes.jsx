import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AppLayout from "../components/Layout/AppLayout";
import Products from "../components/Products/Products";
import SignUp from "../components/Auth/Signup";
import Subproduct from "../components/Products/Subproduct";
import Productdetails from "../components/ProductDetails/Productdetails";
import Profile from '../components/Profile/Profile'
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/Auth",
        element: <SignUp />,
      },
      {
        path: "/Products",
        element: <Subproduct />,
      },
      {
        path: "/User/:id",
        element: <Profile />

      },

      {
        path: "/Productdetails",
        element: <Productdetails />,
      }
    ],
  },
]);

export default router;
