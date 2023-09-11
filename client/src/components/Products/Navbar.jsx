import React, { useState } from 'react';
import Sortby_details from './Sortby_details';
import SideBar from './SideBar';

const NavbarMobile = () => {
  const [sortByOpen, setSortByOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeAllModals = () => {
    setSortByOpen(false);
    setProductsOpen(false);
  };

  return (
    <nav className="p-4 sm:hidden fixed w-full bg-white">
      <div className=" flex justify-between ">
        <button
          className="text-black hover:text-blue-300 border border-solid  rounded-xl pl-2 pr-2 border-blue-700"
          onClick={() => setSortByOpen(true)}
        >
          Sort By
        </button>
        {sortByOpen && <Sortby_details closeModal={closeAllModals} />}
        <button
          className="text-black hover:text-blue-300 border border-solid  rounded-xl pl-2 pr-2 border-blue-700"
          onClick={() => setProductsOpen(true)}
        >
          Products
        </button>
        {productsOpen && <SideBar closeModal={closeAllModals} />}
      </div>
    </nav>
  );
};

export default NavbarMobile;
