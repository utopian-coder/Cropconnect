import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import SignIn from '../Auth/SignIn';
const Navbar = () => {

    const AllLinks = [
        { name: "Home", link: "/" },
        { name: "Products", link: "/products" },
        { name: "About", link: "/" },
        { name: "Contact", link: "/" },

    ];

    return (
        <>
            <header className="sticky top-0 border bg-background flex items-center justify-between p-4  shadow-lg md:pb-4 fixed w-full z-10 top-0">
                <div className="flex  items-center justify-between mb-4 md:mb-0">
                    <h1 className="leading-none text-2xl text-grey-darkest">
                        <Link className="no-underline text-grey-darkest hover:text-black" to="/">
                            Logo
                        </Link>
                    </h1>
                </div>
                <div className=" hidden text-center border-2 rounded-xl  w-full md:flex md:w-2/5 lg:flex">
                    <input className="bg-grey-lightest focus:border-orange p-2 rounded-xl shadow-inner w-full" placeholder="Search" type="text" />
                    <button type='submit'className=" text-2xl font-extrabold p-2  text-black hover:text-gray-800">
                        <BsSearch />
                    </button>
                </div>
                <div>
                    <nav className='flex gap-2'>
                        <ul className=" hidden md:flex md:items-center ">

                            {AllLinks.map((link) => (
                                <li className="text-text md:ml-2 md:p-2 rounded-xl  hover:bg-gray-100  " key={link.name}> {/* Add key */}
                                    <Link
                                        className="block  py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                                        to={link.link}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
<span  className='ml-2 mr-2'><SignIn/></span>

                        </ul>

                    </nav>


                </div>
            </header>






        </>
    )
}

export default Navbar;
