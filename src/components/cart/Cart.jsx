import React from 'react'

import pizza from "../../assets/pp.png"
import { Link } from 'react-router-dom'
import ff from "../../assets/ff.png"
import bb from "../../assets/bb.png"
const CartItem =({value,title,img,increment,decrement})=>(
    <div className='cardName'>
        <div>
            <h4>{title}</h4>
            <img src={img} alt="" />
        </div>
        <div>
            <button onClick={decrement}>-</button>
            <input type="number" readOnly value={value}  />
            <button onClick={increment}>-</button>
        </div>
    </div>
)

const Cart = () => {
    const increment =()=>{}
    const decrement =()=>{}
  
  return (
    <section className='cart'>
        
        <main>
            <CartItem title={"Pizza"}
             img={pizza}
              value={0}
              increment={()=>increment(1)}
              decrement={()=>decrement(1)}
              
              />
                <CartItem title={"French-Fries"}
             img={ff}
              value={0}
              increment={()=>increment(1)}
              decrement={()=>decrement(1)}
              
              />
                <CartItem title={"cheeseburger"}
             img={bb}
              value={0}
              increment={()=>increment(1)}
              decrement={()=>decrement(1)}
              
              />


              <article>
               
               <div>
               <h4>Sub Total</h4>
                <p>£{18.9}</p>
               </div>

               <div>
               <h4>Tax</h4>
                <p>£{18.9*0.8}</p>
               </div>
               <div>
               <h4>shipping charges</h4>
                <p>£{3}</p>
               </div>
               <div>
               <h4>Total</h4>
                <p>£{18.9+18.9*0.8+3}</p>
               </div>
               <Link to="/shipping">Checkout</Link>

              </article>
        </main>
    </section>
  )
}

export default Cart