import React from 'react'
import { Link } from 'react-router-dom'
import{AiOutlineEye} from 'react-icons/ai'

const MyOrders = () => {
    const arr= [1,2,3,4]
  return (
    <section className='tabelClass'>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>item Qty</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                 
               {  arr.map((i)=>(
                   <tr key={i}>
                   <td>#erd346t</td>
                   <td>Processing</td>
                   <td>23</td>
                   <td>${129}</td>
                   <td>cod</td>
                   <td>
                       <Link to={`/order/${"qwqwqw"}`}>
                           <AiOutlineEye/>
                       </Link>
                   </td>
               </tr>
               ))}
                </tbody>
            </table>
        </main>
        

    </section>
  )
}

export default MyOrders