import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AppLayout from "../components/Layout/AppLayout";
import Products from "../components/Products/Products";
import SignUp from "../components/Auth/Signup";
import Profile from "../components/Profile/Profile";
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
      },{
        path:"/User/:id",
        element:<Profile/>
      }
      
    ],
  },
]);

export default router;
