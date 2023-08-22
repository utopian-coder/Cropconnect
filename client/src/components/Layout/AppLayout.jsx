import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main>
      <h1 className='bg-gray-500'>Layout</h1>
      <Outlet />
    </main>
  );
}

export default AppLayout;
