import React from 'react'
import users from '../Data/Data'
import {Link} from 'react-router-dom'

function UsersList() {
  return (
    <div>
      <h1 className='text-center text-lg mt-10 text-blue-600'>These are the List of Newly Joined Employees!</h1>
      <div className='flex justify-center items-center pt-20'>
        <table className="border border-indigo-200 w-[600px] text-center" border={1} cellPadding={10} cellSpacing={0}>
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="border  p-3">Employer Id</th>
              <th className="border  p-3">Name</th>
              <th className="border  p-3">Details</th>
            </tr>
          </thead>
          <tbody>


            {
              users.map(user=>(
                <tr key={user.id} className="hover:bg-indigo-50 ">
                  <td className="border border-gray-300 p-3 ">{user.id}</td>
                  <td className="border border-gray-300 p-3">{user.name}</td>
                     <td className="border border-gray-300 p-3">
            <Link
              to={`/user/${user.id}`}
              className="text-blue-600 underline"
            >
              View Details
            </Link>
          </td>
               
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default UsersList
