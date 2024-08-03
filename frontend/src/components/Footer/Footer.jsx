import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id = "footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, labore excepturi enim nisi obcaecati ex sunt temporibus harum. Vero similique maxime cumque cum quos officiis? Id quae beatae totam repellat!</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter_icon}/>
                    <img src={assets.linkedin_icon}/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91-225-426-5356</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'> copyright 2024 © Tomato.com- All Rights Reserved</p>
    </div>
  )
}

export default Footer