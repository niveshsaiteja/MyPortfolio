import React from 'react'
import Card from '../Card/Card'
import "./Services.css"
import HeartEmoji from "../../img/animation_lldgc48b_small.gif";
import Humble from "../../img/animation_lldgo3u5_small.gif";
import Glasses from "../../img/animation_lldgka04_small.gif"
import Resume from "../../img/resume.pdf"
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from "framer-motion";

const Services = () => {
const transition = {duration : 1, type: 'spring'};

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 
  return (
    <div className='services' id='Services'>
        {/*left side */}
        <div className="awesome">
          <span style={ {color : darkMode? 'white': ''}}>My Awesome</span>
          <span>services</span>
          <span>
          Elevate your brand online with my expert web design services. <br />
           Whether you're an entrepreneur, small business, or creative individual,
      <br /> I specialize in crafting websites that capture your unique essence.
           <br /> Let's collaborate to bring your digital vision to life.
          </span>
         <a href={Resume} download>
         <button className="s-button">Download CV</button>
         </a>
          <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/*right side */}
        <div className="cards">
          <motion.div
           whileInView = {{ left : "14rem"}}
            initial={{ left : "25%"}}
           transition={transition}
          style={{left: "14rem"}}>

            <Card 
              emoji = {HeartEmoji}
              heading = {"Design"}
              detail = {"Sketch , Photoshop, Adobe, Adobe xd"}
            />
          </motion.div>

          <motion.div
          whileInView = { {top: "11rem", left: "-3rem"}}
          initial={{ left : "5rem"}}
         transition={transition}
          style={{top: "12rem", left: "-4rem"}}>
            <Card 
              emoji = {Glasses}
              heading = {"Developer"}
              detail = {"Html, Css, JavaScript, React"}
            />
          </motion.div>

          <motion.div
            whileInView = { {top: "18rem", left: "12rem"}}
            initial={{ left : "6rem"}}
           transition={transition}
          style={{top: "19rem", left: "12rem"}}>
            <Card 
              emoji = {Humble}
              heading = {"UI/UX"}
              detail = {"Figma, Word Press, Adobe xd"}
            />
          </motion.div>
          <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services