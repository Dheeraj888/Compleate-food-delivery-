import React from 'react'
import {AiFillInstagram,AiFillLinkedin,AiFillFacebook,AiFillGithub}from "react-icons/ai"


const Footer = () => {
  return (
    <footer>
        <div>
            <h2>DEE Resturant</h2>
            <p>We are try to best food possible</p>geniun feedback
            <br />
            <em>We give attention to </em>
            <strong>All right Recived @DeeDevloper</strong>
        </div>
        <aside>
            <h4>Follow us</h4>
            <a href="Instagram.com"><AiFillInstagram/></a>
            <a href="facebook.com"><AiFillFacebook/></a>
            <a href="linkindin.com"><AiFillLinkedin/></a>
            <a href="github.com"><AiFillGithub/></a>
        </aside>
    </footer>
  )
}

export default Footer