import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function AppLayout() {
  return (
    <main>
      <Sidebar/>
      <Navbar/>
      <Outlet />
    </main>
  );
}

export default AppLayout;
