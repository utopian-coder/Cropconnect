import React from 'react';
import pic1 from '../pic/photo-1.jpg';
import {BiSolidChat,BiSolidLike,BiSolidDislike} from 'react-icons/bi'
import {MdAccountCircle}from 'react-icons/md'
import {RiMedal2Line}from 'react-icons/ri'
import OtherPart from './OtherPart';
const Profile = () => {
  return (
    <div className='mt-36 m-auto w-[18rem] flex flex-col gap-7'>
      <div className='flex flex-col gap-3 border-2 rounded-md border-gray-400 p-3'>
        <div className='flex justify-center'>
          <div className='relative'>
            <img src={pic1} alt="" className='rounded-full p-1 border-2 m-auto border-black w-28 h-28' />
            <div className='absolute top-0 right-0 mt-20 '>
                <img src="https://imgs.search.brave.com/1ai86d-MHwJnoH4igsTVcQRKoLW44l-V8HBzRhNsdB8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8yMzY5ODU5/LzM5MTAvaS82MDAv/ZGVwb3NpdHBob3Rv/c18zOTEwNDk2Ny1z/dG9jay1waG90by1h/YnN0cmFjdC1ncmVl/bi1iYWNrZ3JvdW5k/LWxpbWUtY29sb3Iu/anBn" className="rounded-full  border-2 m-auto  w-4 h-4" alt="" />
            </div>
          </div>
        </div>
          <h1 className='text-center text-md font-bold '>name</h1>
          <h1 className='text-center text-'>level1</h1>
         <span className='flex justify-center items-center gap-7'><div className='flex flex-row items-center justify-center bg-background border-2 rounded-lg p-2 w-[6rem]'>
            <div className='text-[1.3rem] text-center pt-1'>
            <MdAccountCircle />
            </div>
          <h1>Follow</h1></div>
          <div className='flex justify-center items-center bg-background border-2 rounded-lg p-2 w-[6rem]'>
          <div className='  text-[1.3rem] text-center pt-1'>
            <BiSolidChat />
            </div>
           <h1>Chat</h1>
            
            </div>
            </span> 
          <span>
            <hr />
          </span>
<div className='flex justify-between items-center'>
    <h1>member since</h1>
    <h1>
        date:17.10.28
    </h1>
</div>
<div className='flex justify-between items-center'>
    <h1> sucessfull delivery</h1>
    <span className='flex justify-center items-center'>
        <h1><RiMedal2Line/></h1>
        <h1>
            0%
        </h1>

    </span>
</div>
<span>
            <hr />
          </span>
          <div className='flex justify-between items-center'>
            <h1>last 90 days</h1>
            <span className='flex justify-center items-center gap-1'>
               <BiSolidLike/> 
               <BiSolidDislike/>
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <h1>All time Rating</h1>
            <span className='flex justify-center items-center gap-1'>
               <BiSolidLike/> 
               <BiSolidDislike/>
            </span>
          </div>
          <span>
            <hr />
          </span>
           <div className='flex  items-center justify-around'>
            <span className='flex flex-col items-center'>
                <h1 className=''>6</h1>
            <button className='bg-blue-200 p-1  w-24 rounded-xl'>Follow</button>
            </span>
<span className='mt-2 w-[3px] bg-gray-300 h-20 '>

</span>
            <span className='flex flex-col items-center'>
          <h1>9</h1>
            <button className='bg-blue-200 p-1 w-24 rounded-xl'>Following</button>
            </span>
           </div>
          </div>
          <OtherPart/>
            </div>
  );
};

export default Profile;
