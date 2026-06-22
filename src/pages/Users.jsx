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
  <div className="min-h-screen bg-slate-100 p-8">
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6">
      <h1 className="text-3xl font-bold text-center text-slate-700 mb-6">
        Users Dashboard
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-slate-700 text-white">
            <tr>
              <th>
                <input type="checkbox" className="checkbox checkbox-sm" />
              </th>
              <th>User</th>
              <th>Email</th>
              <th>Age</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-slate-100 transition duration-200"
              >
                <td>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full ring ring-slate-300 ring-offset-2">
                        <img
                          src={item.image}
                          alt={item.firstName}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="font-bold text-slate-700">
                        {item.firstName} {item.lastName}
                      </div>
                      <div className="text-sm text-slate-500">
                        @{item.username}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="text-slate-600">{item.email}</td>

                <td>
                  <span className="badge badge-info badge-outline">
                    {item.age} yosh
                  </span>
                </td>

                <td>
                  <span className="badge badge-success">
                    {item.address.city}
                  </span>
                </td>

                <td>
                  <button className="btn btn-primary btn-sm">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)
}

export default Users
