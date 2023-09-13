import React from 'react'
import ProfileModel from './ProfileModel'
import Dummy from './dummy'
const Profile = () => {
  return (
    <div className='flex  justify-around items-center'>
        <ProfileModel/>
        <Dummy/>
    </div>
  )
}

export default Profile