import React from 'react'
import "./Footer.css"
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
        <img className='footer-img' src={Wave} alt=""  style={{width:'100%'}}/>
        <div className="f-content">
            
            <div className="f-icons">
                <a href="https://www.instagram.com/niveshsaiteja/"><Insta color='white' size='3rem'/></a>
                <a href="https://www.linkedin.com/in/nivesh-saiteja-nelluri/"><LinkedIn color='white' size='3rem'/></a>
                <a href="https://github.com/niveshsaiteja"> <Github color='white' size='3rem'/></a>
            </div>
            <div className='copoyrights-div'>
              
          <span>developed by <strong>niveshtech</strong></span>
        </div>
        </div>
    </div>
  )
}

export default Footer