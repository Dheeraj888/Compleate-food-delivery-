import React from 'react'
import { Link } from 'react-router-dom'
import me from "../../assets/my4.jpg"

import {RiFindReplaceLine}from "react-icons/ri"

const About = () => {
  return (
<section className='about'>
    <main>
        <h1>About Us</h1>

        <article>
            <h4>Dee Food</h4>
            <p>We make food with feelings </p>
            <p>Explore the various type of food click below to see the menu </p>

            <Link to="/"> <RiFindReplaceLine/></Link>
        </article>

        <div>
            <h2>Founder</h2>
            <article>
                <div>
                    <img src={me} alt="" />
                    <h3>Dheeraj kumar</h3>
                </div>
                <p> I am Dheeraj kumar founder of Dee Resturant</p>
            </article>
        </div>
    </main>
</section>
    )
}

export default About