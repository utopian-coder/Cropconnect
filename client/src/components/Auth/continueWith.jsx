import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook,BsApple } from 'react-icons/bs'
const continueWith = () => {
  return (
    <>
    <div className=' m-auto w-[95%] p-5 md:w-[90%]'>
    <div className="flex flex-col gap-2  justify-center p-2 m-auto w-[100%]">
            <button className=" flex flex-row  gap-7 justify-center items-center   border-2 rounded-lg hover:bg-slate-50 p-3">
              <span className=" text-3xl md:text-2xl ">
                <FcGoogle /></span>
              <h1 className="text-[13.9px] font-bold">Continue With Google</h1>
            </button>
            <button className=" flex flex-row  gap-4 justify-center items-center   border-2 rounded-lg hover:bg-slate-50 p-3">
              <span className="text-blue-600 text-3xl md:text-2xl ">
                <BsFacebook /></span>
              <h1 className="text-[13.9px] font-bold">Continue With Facebook</h1>
            </button>
            <button className=" flex flex-row  gap-9 justify-center items-center   border-2 rounded-lg hover:bg-slate-50 p-3">
              <span className="text-3xl md:text-2xl ">
                <BsApple /></span>
              <h1 className="text-[13.9px] font-bold">Continue With Apple</h1>
            </button>
          </div>
          </div>
          <div className=" m-auto w-[95%] justify-center items-center gap-2 md:w-[90%] flex  p-5 ">
            <hr className='w-[45%]' />

           <h1 className='font-thin'>Or</h1>
           <hr className='w-[45%]'/>
          </div>

    </>
  )
}

export default continueWith