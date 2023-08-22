import { RouterProvider } from "react-router-dom";
import axios from "axios";
import router from "./routes/routes";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

function App() {
  return <RouterProvider router={router} />;
}

export default App;
