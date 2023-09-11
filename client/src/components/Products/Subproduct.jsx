import React from 'react';
import SideBar from './SideBar';
import Sortby_SideBar from './Sortby_SideBar';
import { FaMoneyBillWave, FaUser, FaCheckCircle } from 'react-icons/fa';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import {AiOutlineStar,} from "react-icons/ai";
function Subproduct (props){
  return (
    <>
  <Navbar/>
    <div className=" mx-auto  flex h-full flex-col py-2  bg-white w-full  sm:flex-row xl:max-w-screen-xl my-10 sm:my-0">
      <>
        <div className=" w-1/4 shadow-md h-max hidden sm:block">
          <div className="flex flex-col justify-between ">
            {/* Filters Sidebar */}
            <SideBar/>
            {/* Product List */}
            <Sortby_SideBar/>
          </div>
        </div>
      </>
      <div className='w-full  flex flex-col sm:ml-2 py-4 shadow-md sm:w-9/12 '>
        <Link to="/Productdetails">
          <div className="flex flex-row border-b justify-between sm:justify-between border-gray-300 max-w-full hover:bg-slate-100">
          <div className='  sm:w-1/2 mr-2 my-3 mb-5 pl-2 sm:pl-4 sm:pr-4'>
              <img src="https://img.freepik.com/premium-photo/raw-jasmine-rice-grain-with-ear-paddy-agricultural-products-food-asian-thai-rice-white-bowl-sack-background_73523-3077.jpg?w=1060" alt="product image" className='w-36 rounded sm:h-[12rem] sm:w-full ' />
          </div>
          <div className='flex flex-col w-1/2 ml-3 sm:ml-1 mt-1 mr-2 2xl:ml-5 md:mb-5 md:flex-row md:justify-between md:w-11/12 xl:mt-3'>
            <div className='w-full'>
              <div className='text-sm font-medium sm:font-bold text-black-800 mb-1 md:mb-1 sm:text-xl'>
                  <span className='hover:text-blue-600 no-underline '>Golden Rice</span>
                  <div className='flex ml-1'>
                      <div className='flex items-center'>
                        <AiOutlineStar className='text-xs sm:text-sm'/>
                        <AiOutlineStar className='text-xs sm:text-sm'/>
                        <AiOutlineStar className='text-xs sm:text-sm'/>
                        <AiOutlineStar className='text-xs sm:text-sm'/>
                        <AiOutlineStar className='text-xs sm:text-sm'/>
                       </div>   
                  </div>
              </div>
              <p className=' hidden text-gray-600 text-xs mb-4 sm:inline sm:mb-4 sm:text-base '>
                  This premium quality rice is known for its rich flavor and aroma. It's carefully cultivated using traditional methods.
              </p>
              <div className='flex items-center mb-2 sm:mt-2'>
                  <FaMoneyBillWave className='text-black-600 mr-2 text-sm sm:text-lg' />
                  <h2 className='text-xs font-semibold text-green-600 hover:text-blue-600 cursor-pointer sm:text-base'>Price:</h2>
                  <p className='ml-1 text-xs font-semibold text-gray-800 sm:text-base'>₹90,000</p>
              </div>
              <div className='flex items-center'>
                  <FaUser className='text-black-600 mr-2 text-sm ' />
                  <h2 className='text-xs font-semibold text-green-600 hover:text-blue-600 cursor-pointer sm:text-base'>Sold By:</h2>
                  <p className='ml-1 text-xs text-gray-700 sm:text-base'>John</p>
              </div>
            </div>
            <div className='flex my-1.5 md:mr-6 md:flex-col md:ml-10'>
              <div className='flex items-center'>
                  <FaCheckCircle className='text-black-600 mr-2 text-sm' />
                  <p className='text-xs font-semibold text-green-600 hover:text-blue-600 cursor-pointer sm:text-base'>Status:</p>
              </div>
              <div className='text-xs text-gray-700 ml-3 sm:text-base'>In Stock</div>
            </div>
          </div> 
        </div>
        </Link>
        <Link to="/Productdetails">
          <div className="flex flex-row border-b justify-between sm:justify-between border-gray-300 max-w-full hover:bg-slate-100">
          <div className='  sm:w-1/2 mr-2 my-3 mb-5 pl-2 sm:pl-4 sm:pr-4'>
              <img src="https://img.freepik.com/premium-photo/raw-jasmine-rice-grain-with-ear-paddy-agricultural-products-food-asian-thai-rice-white-bowl-sack-background_73523-3077.jpg?w=1060" alt="product image" className='w-36 rounded sm:h-[12rem] sm:w-full ' />
          </div>
          <div className='flex flex-col w-1/2 ml-3 sm:ml-1 mt-1 mr-2 2xl:ml-5 md:mb-5 md:flex-row md:justify-between md:w-11/12 xl:mt-3'>
            <div className='w-full'>
              <div className='text-sm font-medium sm:font-bold text-black-800 mb-1 md:mb-1 sm:text-xl'>
                  <span className='hover:text-blue-600 no-underline '>Golden Rice</span>
                  <div className='flex ml-1'>
                      <div className='flex items-center'>
                        <AiOutlineStar className='text-xs sm:text-sm'/>
                        <AiOutlineStar className='text-xs sm:text-sm'/>
                        <AiOutlineStar className='text-xs sm:text-sm'/>
                        <AiOutlineStar className='text-xs sm:text-sm'/>
                        <AiOutlineStar className='text-xs sm:text-sm'/>
                       </div>   
                  </div>
              </div>
              <p className=' hidden text-gray-600 text-xs mb-4 sm:inline sm:mb-4 sm:text-base '>
                  This premium quality rice is known for its rich flavor and aroma. It's carefully cultivated using traditional methods.
              </p>
              <div className='flex items-center mb-2 sm:mt-2'>
                  <FaMoneyBillWave className='text-black-600 mr-2 text-sm sm:text-lg' />
                  <h2 className='text-xs font-semibold text-green-600 hover:text-blue-600 cursor-pointer sm:text-base'>Price:</h2>
                  <p className='ml-1 text-xs font-semibold text-gray-800 sm:text-base'>₹90,000</p>
              </div>
              <div className='flex items-center'>
                  <FaUser className='text-black-600 mr-2 text-sm ' />
                  <h2 className='text-xs font-semibold text-green-600 hover:text-blue-600 cursor-pointer sm:text-base'>Sold By:</h2>
                  <p className='ml-1 text-xs text-gray-700 sm:text-base'>John</p>
              </div>
            </div>
            <div className='flex my-1.5 md:mr-6 md:flex-col md:ml-10'>
              <div className='flex items-center'>
                  <FaCheckCircle className='text-black-600 mr-2 text-sm' />
                  <p className='text-xs font-semibold text-green-600 hover:text-blue-600 cursor-pointer sm:text-base'>Status:</p>
              </div>
              <div className='text-xs text-gray-700 ml-3 sm:text-base'>In Stock</div>
            </div>
          </div> 
        </div>
        </Link>
      </div>
      </div>
      </>
  );
}

export default Subproduct