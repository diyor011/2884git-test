import React, { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState([])
  const getData =async() => {
    const req = await fetch('https://dummyjson.com/users')
    const res = await req.json()
    setUsers(res.users)

  }
  useEffect(()=>{
    getData()
  }, [])
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
  {users.map(item => (
              <tr key={item.id}>  
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.firstName} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.firstName} {item.lastName}</div>
                      <div className="text-sm opacity-50">{item.username}</div>
                    </div>
                  </div>
                </td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.address.city}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
