import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Goals from "../Goals";

function AppLayout() {
  return (
    <main>
      <h1 className='bg-gray-500'>Layout</h1>
      <Outlet />
      <Goals />
      <Testimonial />
      <Footer />
      
    </main>
  );
}

export default AppLayout;
