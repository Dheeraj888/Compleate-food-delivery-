import React from 'react'
import burger from"../../assets/ff.png"
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className='contact'>
        <motion.form
        initial={{
          x:"-100vh",
          opacity:0
        }}
        animate={{
          x:0,
          opacity:1,

        }}
        transition={{delay:0.1}}>

<h2>Contact US</h2>
<input type="text" name="" id="" placeholder='Name' />
<input type="email" name="" id="" placeholder='Email' />

<textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
<button type='submit'>Send</button>


        </motion.form>
        <motion.div 
        initial={{
          x:"100vh",
          opacity:0,
        }}
        animate={{
          x:0,
          opacity:1
        }}
        transition={{delay:0.1}}
        className='formBorder'>
          <motion.div
          initial={{
            y:"-100vh",
            x:"50%",
            opacity:0
          }}
          animate={{
            y:"-50%",
            x:"50%",

            opacity:1
          }}
          transition={{delay:1}}>
          <img src={burger} alt="" />

          </motion.div>
        </motion.div>

    </section>
  )
}

export default Contact