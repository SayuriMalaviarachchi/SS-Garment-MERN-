import React from 'react'


export default function User(props) {
    const{_id,name,gmail,phone,address} = props.user
  return (
    <div>
      
      <h1>User Details</h1>

      <br></br>

      <h1>ID:{_id}</h1>
      <h1>Name:{name}</h1>
      <h1>Gmail:{gmail}</h1>
      <h1>Phone:{phone}</h1>
      <h1>Address:{address}</h1>
      <button>Update:</button>
      <button>Delete:</button>

    </div>
  )
}
