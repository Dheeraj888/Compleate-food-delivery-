import {React} from 'react'
import {MdOutlineRestaurant}from "react-icons/md"
import {Link}from "react-router-dom"

import {FaUser}from "react-icons/fa"
import {FiShoppingCart,FiLogIn}from "react-icons/fi"
import {motion} from "framer-motion"

const Header = ({isAuthantacitated= false}) => {
  return (
    <div>
        <nav>
            <Link to="/">
            <motion.div
            initial ={{x:"-100%"}} whileInView={{x:0}}>
                <MdOutlineRestaurant/> 
            </motion.div>
            </Link>

          <div>
          <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/cart"><FiShoppingCart/></Link>

            <Link to={isAuthantacitated ? "/me" :"/login" }>
                {isAuthantacitated ? <FaUser/>:<FiLogIn/>}
            </Link>
          </div>
        </nav>
    </div>
  )
}

export default Header