import React from 'react'

import me from "../../assets/my4.jpg"

const User = () => {
    const arr= [1,2,3,4]

  return (
    <section className='tabelClass'>
<main>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>Role</th>
                        <th>since Method</th>
                    </tr>
                </thead>
                <tbody>
                 
               {  arr.map((i)=>(
                   <tr key={i}>
                   <td>#erd346t</td>
                   <td>Dheeraj</td>
                   <td>
<img src={me} alt="" />

                   </td>
                   <td>Admin</td>
                   <td>{"23-01-2024"}</td>
                 
               </tr>
               ))}
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default User