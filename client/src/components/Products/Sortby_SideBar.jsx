import React, { useState } from 'react'
import { FaSort } from 'react-icons/fa'
import { MdPriceChange } from 'react-icons/md'
import { BsChevronDown, BsChatLeftText, BsStar } from 'react-icons/bs'

export default function SideBar() {
  const Menus = [
    {
      title: 'Price',
      src: 'Chart_fill',
      icon: <MdPriceChange className='' />,
      subMenus: [
        {
          title: 'Price--Low to High',
          src: '',
          cName: 'sub-nav',
        },
        {
          title: 'Price--High to Low',
          src: '/services/services2',
          cName: 'sub-nav',
        },
      ],
    },
    {
      title: 'Catagory2',
      src: '',
      icon: <BsChatLeftText className='' />,
      subMenus: [
        {
          title: 'Service 1',
          src: '/services/services1',

          cName: 'sub-nav',
        },
        {
          title: 'Service 2',
          src: '/services/services2',

          cName: 'sub-nav',
        },
      ],
    },
    {
      title: 'Ratting',
      src: 'Services',
      icon: <BsStar className='font-bold text-lg  text-black-600' />,
      subMenus: [
        {
          title: 'Service 1',
          src: '/services/services1',

          cName: 'sub-nav',
        },
        {
          title: 'Service 2',
          src: '/services/services2',

          cName: 'sub-nav',
        },
        {
          title: 'Service 3',
          src: '/services/services3',
        },
      ],
    },
  ];
  const [subMenuOpen, setSubMenuOpen] = useState(Array(Menus.length).fill(false));

  const handleSubMenuClick = (index) => {
    const newSubMenuOpen = subMenuOpen.map((isOpen, i) => i === index ? !isOpen : false);
    setSubMenuOpen(newSubMenuOpen);
  };

  return (
    <div className="flex flex-col justify-end">
      <div>
        <div className='ml-2 my-2 mb-0 flex flex-row'>
          {/* ... */}
          <span className='py-1 text-lg font-bold mr-1 hover:text-blue-600'><FaSort /></span><span className=' font-bold text-lg hover:text-blue-600' > Sort By</span>
        </div>
        <ul className="pt-2 ml-3">
          {Menus.map((Menu, index) => (
            <React.Fragment key={index}>
              <li
                className={`flex p-2 cursor-pointer hover:bg-blue-400 text-black text-sm items-center gap-x-4 border-t  border-slate-300`}
              >
                {/* ... */}
                {Menu.icon ? Menu.icon : <span className='bg-black'><MdOutlineDashboard className="font-bold text-lg text-black stroke-red-500" /></span>}
                <span className="flex-1">{Menu.title}</span>
                {Menu.subMenus && (
                  <BsChevronDown
                    onClick={() => handleSubMenuClick(index)}
                    className={`${subMenuOpen[index] && 'rotate-180'}`}
                  />
                )}
              </li>
              {Menu.subMenus && subMenuOpen[index] && (
                <ul>
                  {Menu.subMenus.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer text-center text-sm text-black-200 py-1"
                    >
                      {/* ... */}
                      <input type="checkbox" />
                      <span className='ml-1'>{subMenuItem.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
