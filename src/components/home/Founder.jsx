import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/myPortfolio.png"


const Founder = () => {
    const options ={
        initial:{
            x:"100%",
            opacity:0,
        },
        whileInView:{
            x:0,
            opacity:1
        }
        
    }
  return (
    <section className='founder'>
        <motion.div {...options}>
            <img src={me} alt="" height={200} width={200}/>
            <h3>Dheeraj Kumar</h3>
            <p>Hey, Everyone I Am Dheeraj Kumar founder of Dee Resturant.{""}
            <br />

                our aim is to create best food in my region
            </p>
        </motion.div>
    </section>
  )
}

export default Founder