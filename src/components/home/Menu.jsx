import React from 'react'
import Menucard from './Menucard'
import pizza from "../../assets/pp.png"
import ff from "../../assets/ff.png"
import bb from "../../assets/bb.png"


const Menu = () => {
    const addToCartHAndler =(itemNum)=>{

    }
  return (
    <section id='menu'>
        <h1>MENU</h1>
        <div>
            <Menucard 
            delay={0.1}
             resturantSrc={pizza}
            itemNum={1}
            price={8.9}
            title="Pizza"
            handler={addToCartHAndler}/>

            <Menucard 
            delay={0.5}
             resturantSrc={ff}
            itemNum={2}
            price={18.9}
            title=" french-fries"
            handler={addToCartHAndler}/>

            <Menucard 
            delay={0.8}
             resturantSrc={bb}
            itemNum={3}
            price={10.9}
            title="burger"
            handler={addToCartHAndler}/>
        </div>
    </section>
  )
}

export default Menu