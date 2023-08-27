import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from './Sidebar'
import Navbar from './Navbar'
function AppLayout() {
  return (
    <main>
      <Sidebar/>
      <Navbar/>
      <Outlet />
      <Footer />
    </main>
  );
}

export default AppLayout;
