import React from 'react'
import {CiCircleAlert}from 'react-icons/ci'
const OtherPart = () => {
  return (

    <>
<div className='flex flex-col gap-3 rounded-lg border-2  p-2'>
    <div className='p-1'>
        <h1 className='text-xl font-bold'>Description</h1>
        <span>
            No Profile Description
        </span>
    </div>
    <div>
        <hr />
    </div>
    <div className='p-1'>
    <h1 className='text-xl font-bold'>Languages</h1>
        <span>
            No Languages selected
        </span>
    </div>

</div>
<div className='border-2 p-3 flex  rounded-lg justify-start items-center'>
        <div className='text-red-500 text-xl'>
<CiCircleAlert/>
        </div>
        <h1 className='underline'>
            Block this user
        </h1>

    </div>
    </>
  )

}

export default OtherPart
