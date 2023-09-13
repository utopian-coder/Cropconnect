import React, { useState } from "react";
import { MdOutlineDashboard, MdAccountCircle } from "react-icons/md";
import {
  BsChevronDown,
  BsChatLeftText,
  BsCalendarCheck,
  BsServer,
  BsFilter,
} from "react-icons/bs";

export default function SideBar({ closeModal }) {
  const Menus = [
    {
      title: "Catagory1",
      src: "Chart_fill",
      icon: <MdOutlineDashboard />,
      subMenus: [
        {
          title: "Service 1",
          src: "/services/services1",

          cName: "sub-nav",
        },
        {
          title: "Service 2",
          src: "/services/services2",

          cName: "sub-nav",
        },
        {
          title: "Service 3",
          src: "/services/services3",
        },
      ],
    },
    {
      title: "Catagory2",
      src: "",
      icon: <BsChatLeftText />,
      subMenus: [
        {
          title: "Service 1",
          src: "/services/services1",

          cName: "sub-nav",
        },
        {
          title: "Service 2",
          src: "/services/services2",

          cName: "sub-nav",
        },
        {
          title: "Service 3",
          src: "/services/services3",
        },
      ],
    },
    {
      title: "Services",
      src: "Services",
      icon: <BsServer />,
      subMenus: [
        {
          title: "Service 1",
          src: "/services/services1",

          cName: "sub-nav",
        },
        {
          title: "Service 2",
          src: "/services/services2",

          cName: "sub-nav",
        },
      ],
    },
  ];
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  // Function to handle submenu clicks and toggle open/close
  const handleSubMenuClick = (index) => {
    if (openSubMenuIndex === index) {
      // Clicked on an already open submenu, so close it
      setOpenSubMenuIndex(null);
    } else {
      // Clicked on a new submenu, open it
      setOpenSubMenuIndex(index);
    }
  };
  const closeSubmenu = () => setOpenSubMenuIndex(null);
  return (
    <>
      <div
        className='sm:hidden fixed inset-x-0 bg-black/10 inset-y-0 '
        onClick={closeModal}
      ></div>
      <div className='fixed flex flex-col bottom-0 inset-x-0   justify-end bg-white sm:static sm:w-full'>
        <div className='ml-4 mr-4 sm:ml-0 sm:mr-0'>
          <div className=' ml-1 sm:ml-2 sm:my-2 sm:mb-0 flex flex-row'>
            {/* ... */}
            <span className='py-1 text-lg font-bold mr-1 hover:text-blue-600'>
              <BsFilter />
            </span>
            <span className=' font-bold text-lg hover:text-blue-600'>
              {" "}
              Filter
            </span>
          </div>
          <ul className='pt-2 ml-3'>
            {Menus.map((Menu, index) => (
              <>
                <li
                  key={index}
                  className={`flex p-2 cursor-pointer hover:bg-blue-400 text-black text-sm items-center gap-x-4 border-t border-slate-300`}
                >
                  {/* ... */}
                  {Menu.icon ? (
                    Menu.icon
                  ) : (
                    <MdOutlineDashboard className=' text-green-600' />
                  )}
                  <span className='flex-1'>{Menu.title}</span>
                  {Menu.subMenus && (
                    <BsChevronDown
                      onClick={() => handleSubMenuClick(index)}
                      className={`${
                        openSubMenuIndex == index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </li>
                {Menu.subMenus && openSubMenuIndex == index && (
                  <ul className=' bg-blue-100 bottom-24 sm:left-0 sm:static'>
                    {Menu.subMenus.map((subMenuItem, idx) => (
                      <li
                        key={idx}
                        className='flex px-5 cursor-pointer text-center text-sm text-black-200 py-1 bottom-1/2'
                      >
                        {/* ... */}
                        <input type='checkbox' />
                        <span className='ml-1'>{subMenuItem.title}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
