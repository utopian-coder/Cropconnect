import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AppLayout from "../components/Layout/AppLayout";
import Goals from '../components/Layout/Goals';

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Goals/>,
      },
    ],
  },
]);

export default router;
