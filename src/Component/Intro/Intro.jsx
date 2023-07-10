import React from 'react'
import "./Intro.css"
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
  return (
   <div className="intro">
    <div className="i-left">
        <div className="i-name">
            <span>Hy! I Am</span>
            <span>Nivesh Sai Teja</span>
            <span>Frontend Developer with high
                 level of experience in web 
            designing and development, producting
             the Quality work</span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
            <a href="https://github.com/niveshsaiteja">
            <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/nivesh-saiteja-nelluri/">
            <img src={LinkedIn} alt="" />
            </a>
            <a href="https://www.instagram.com/niveshsaiteja/">
            <img src={Instagram} alt="" />
            </a>
        </div>
    </div>
    <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{top:'-4%',  left: '68%'}}>
            <FloatingDiv image={crown} txt1 = "Web" txt2 = "Developer"/>
        </div>
        <div style={{top:'18rem',  left: '1rem'}}>
            <FloatingDiv image={thumbup} txt1 = "UI/UX" txt2 = "Designer"/>
        </div>
        {/* blur divs */}
        <div className="blur" style={{background:"rbg(238 210 255)"}}>

        </div>
        <div className='blur' style={{
            background:"#c1f5ff",
            top:'17rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem'
        }}></div>

        
    </div>
   </div>
  )
}

export default Intro