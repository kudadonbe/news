import React from 'react'



const User = (user) => {

  return (
    <div>
        <p>{user.national_id}</p>
        <p>{user.name}</p>
        <p>{user.dob}</p>
        <p>{user.address.house}</p>
        <p>{user.address.island}</p>
    </div>
  )
}

export default User