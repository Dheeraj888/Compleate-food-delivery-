import React from 'react'
import { Link } from 'react-router-dom'
import {Country,State} from"country-state-city"


const Shipping = () => {
  return (
    <section className='shipping'>
         <main>
        <h1>shipping Details</h1>
        <form action="">
            <div>
                <label>H.no.</label>
                <input type="text" placeholder='Enter your house number' />
            </div>
            <div>
                <label>City</label>
                <input type="text" placeholder='Enter city' />
            </div>
            <div>
            <label htmlFor="">Countries</label>
            <select name="" id="">
                <option value="">country</option>
                {
                    Country && Country.getAllCountries().map((i)=>(
                        <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                    ))
                    
                }
               
            </select>
            </div>
            <div>
            <label htmlFor="">State</label>
            <select name="" id="">
                <option value="">State</option>
                {
                    State && State.getStatesOfCountry("IN").map((i)=>(
                        <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                        
                    ))
                }
               
            </select>
            </div>
            
            
            <div>
                <label>Pin-code</label>
                <input type="number" placeholder='Enter your Pin-code number' />
            </div>
            <div>
                <label>Phone-Number</label>
                <input type="number" placeholder='Enter your Phone number' />
            </div>
            <Link to="/confirmOrder">
            <button>Confirm Order</button>
            
            </Link>
        </form>
       

        </main>
    </section>
  )
}

export default Shipping