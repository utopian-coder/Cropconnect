import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AppLayout from "../components/Layout/AppLayout";
import Products from "../components/Products/Products";
import SignUp from "../components/Auth/Signup";
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
        element: <Products/>,
      },
      {
        path: "/Auth",
        element: <SignUp/>,
      }
      
    ],
  },
]);

export default router;
