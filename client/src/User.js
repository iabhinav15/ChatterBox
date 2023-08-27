import React from 'react'

const User = (props) => {
  return (
    <div className="user">
        <h3>Joined as: {props.username} </h3>
    </div>

  )
}

export default User
