import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineX } from 'react-icons/hi';
import { RxHamburgerMenu } from 'react-icons/rx';
import SignIn from '../Auth/SignIn';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaFacebook, FaYoutube, FaPinterest } from 'react-icons/fa'

// import { icons } from 'react-icons';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const AllLinks = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },

  ];

  return (
    <div className="md:hidden lg:hidden">
      {!isOpen ? (
        <RxHamburgerMenu
          className="text-red-400 fixed z-30 flex items-center cursor-pointer text-2xl right-6 top-6"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <HiOutlineX
          className="fixed z-30 flex items-center flex-row cursor-pointer text-2xl gap-[108px] right-6 top-6"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      <div
        className={`bg-white right-0 w-72 top-0 h-full pt-16 p-8 z-20 fixed text-text flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } ease-in-out duration-100`}
      >
        <ul className="flex justify-center flex-col p-4">
          <span className='m-2'><SignIn /></span>
          {AllLinks.map((link) => (
            <li className="text-text m-auto w-[90%]  hover:bg-gray-100" key={link.name}>
              <Link
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                to={link.link}
              >
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            </li>
          ))}
          <span className='m-auto w-[95%] flex flex-col gap-3 '>
            <h1 className='bold text-gray-400'>Contact with Us</h1>
            <span className='flex flex-row gap-2 text-xl '>
              <Link to='/'><AiOutlineTwitter /></Link>
              <Link to='/'><FaFacebook /></Link>
              <Link to='/'><FaYoutube /></Link>
              <Link to='/'><FaPinterest /></Link>
              <Link to='/'><AiFillInstagram /></Link>
            </span>
          </span>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
