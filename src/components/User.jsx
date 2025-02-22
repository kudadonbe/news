import React from 'react'
import { Link } from 'react-router-dom'



const User = (user) => {

  return (
    <div>
        <p>{user.national_id}</p>
        <p>{user.name}</p>
        <p>{user.dob}</p>
        <p>{user.address.house}</p>
        <p>{user.address.island}</p>
        <Link to={`/user/edit/${user.id}`}>Edit</Link>
        
    </div>
  )
}

export default User