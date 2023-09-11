import React, { Component } from 'react'

export default function Sortby_details({closeModal}) {
    return (
        <>
            <div className='fixed inset-x-0 bg-black/10 inset-y-0 sm:bg-blue-100'onClick={closeModal}></div>
            <div className='fixed w-full bg-white bottom-0 inset-x-0 mr-5 '>
                <h1 className='mb-1 ml-2 border-b border-gray-400 font-semibold'>Sort By</h1>
                <ul className='  ml-2 w-full'>
                    <li className='flex justify-between'>
                        <span className='font-normal '>Catagory 1</span>
                        <input type="checkbox" className='mr-5'/> 
                    </li>
                    <li className='flex justify-between my-1'>
                        <span className=' font-normal'>Catagory 1</span>
                        <input type="checkbox" className='mr-5'/> 
                    </li>
                    <li className='flex justify-between my-1'>
                        <span className='font-normal '>Catagory 1</span>
                        <input type="checkbox" className='mr-5'/> 
                    </li>
                    <li className='flex justify-between my-1'>
                        <span className='font-normal '>Catagory 1</span>
                        <input type="checkbox" className='mr-5'/> 
                    </li>
                </ul>
            </div>
        </>
      
    )
}
