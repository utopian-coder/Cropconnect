import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  return (
    <main>
      <h1 className='bg-gray-500'>Layout</h1>
      <Outlet />
      <Footer />
    </main>
  );
}

export default AppLayout;
