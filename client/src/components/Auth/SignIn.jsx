import React, { useState } from 'react'
import {IoIosContact} from 'react-icons/io'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [IssignIN,setsighIN]=useState(true)
  return (
    <>
    <button className='border-2 gap-[2px] flex justify-center items-center p-2 m-auto w-[95%] rounded-md hover:bg-gray-50'>
      <span className='hidden text-2xl md:flex '>
        <IoIosContact/></span>{IssignIN?<Link to='/Auth'onClick={()=>setsighIN(!IssignIN)}>SignIn</Link>:<Link to='/Auth'onClick={()=>setsighIN(!IssignIN)}>SignUp</Link>}</button>
    </>
  )
}

export default SignIn