import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Menucard = ({resturantSrc,itemNum,price,title,handler,delay=0}) => {
  return (
    <motion.section className='menucard'
    initial={{
        x:"-100%",
        opacity:0,
    }}
    whileInView={{
        x:0,
        opacity:1

    }}
    transition={{
        delay
    }}
    >
        <div>Item{itemNum}</div>
        <main>
            <img src={resturantSrc} alt="" />
            <h5>€{price}</h5>
            <p>{title}</p>
            <Link to="/cart">
            <button onClick={handler(itemNum)}>
                Buy Now
            </button>
            </Link>

           
        </main>
        

    </motion.section>
  )
}

export default Menucard