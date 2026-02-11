import React from 'react'
import users from '../Data/Data';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
function UserDetail() {


const { id } = useParams();
  const user = users.find(u => u.id === Number(id));

  return (
    <div>
      <h1 className='text-center mt-10 text-lg text-blue-600 '>Hey Here is the details of the corresponding Employee</h1>
       <div className='flex justify-center items-center pt-20 flex-col overflow-x-auto p-5'>
       <table className="border border-indigo-200 w-full min-w-[900px] text-center mb-10 border-collapse" border={1} cellPadding={10} cellSpacing={0}>
         <thead className="bg-indigo-600 text-white ">
           <tr >
             <th className="border p-3">Employer Id</th>
             <th className="border  p-3">Name</th>
             <th className="border p-3">Email</th>
             <th className="border  p-3">Position</th>
             <th className="border p-3">Achievment</th>
             <th className="border  p-3">Age</th>
             <th className="border p-3">Status</th>
             <th className="border  p-3 ">Place</th>
        


            </tr>
         </thead>
         <tbody>
             
                <tr  className="hover:bg-indigo-50">
                  <td className="border  p-3">{user.id}</td>
                  <td className="border  p-3">{user.name}</td>
                  <td className="border   p-3">{user.email}</td>
                   <td className="border   p-3">{user.position}</td>
                    <td className="border p-3">{user.achievement}</td>
                     <td className="border  p-3">{user.age}</td>
                      <td className="border   p-3">{user.status}</td>
                       <td className="border  p-3">{user.place}</td>
                  
               
                </tr>
         </tbody>
    


          
        </table>

        <Link to={"/user"}>
        
        <button className='bg-indigo-500 p-3 rounded text-white '>Go back to Emplooyer's List Page</button>
        
        </Link>
       </div>
   

    </div>
  )
}

export default UserDetail



