import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main>
      <h1 className='flex flex-col'>Layout</h1>
      <Outlet />
    </main>
  );
}

export default AppLayout;
