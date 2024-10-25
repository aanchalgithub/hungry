import React from 'react'
import { useSelector } from 'react-redux'

export default function ProfileView() {
    const {user} = useSelector((state:any) => state.userData)
    console.log(user, 'y user ka phone no hai');
    
  return (
    <div>User Phone No. : {user}</div>
  )
}
