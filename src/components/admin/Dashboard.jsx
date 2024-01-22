import React from 'react'
import { Link } from 'react-router-dom'
import {Doughnut}from "react-chartjs-2"
import {Chart as Chartjs,Tooltip,ArcElement,Legend} from "chart.js"


Chartjs.register(Tooltip,ArcElement,Legend)


const Box =({title,value})=>(
<div>
    <h3>
        {title==="income" && "$"}
        {value}
    </h3>
    <p>{title}</p>
</div>
);

const Dashboard = () => {
const data = {
    labels:["preparing","shipped","Delivered"],
   datasets:[
    {
        label:"#of orders",
        data:[2,3,4],
        backgroundColor:["rgb(159,63,176,0.1)","rgb(78,63,176,0.1)","rgb(156,0,60,0.1)"],
        borderColor:["rgb(159,63,176)","rgb(78,63,176)","rgb(156,0,60)"],
        borderWidth:1
    }
   ]
}

  return (
    <section className='dashboard'>
        <main>
            <article>

                <Box title="users" value={223}/>
                <Box title="orders" value={223}/>
                <Box title="income" value={223}/>
            </article>

            <section>
                <div>
                    <Link to="/admin/orders" >View Orders</Link>
                    <Link to="/admin/users" >View users</Link>
                </div>
                <aside>
                    <Doughnut data={data}/>
                </aside>
            </section>
        </main>

    </section>
  )
}

export default Dashboard