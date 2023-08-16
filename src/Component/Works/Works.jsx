import React from 'react'
import "./Works.css"
import Upwork from "../../img/animation_lldh3qmn_small.gif"
import Fiver from "../../img/animation_lldhagsa_small.gif"
import Amazon from "../../img/animation_lldho3uw_small.gif"
import Shopify from "../../img/animation_lldhhjpi_small.gif"
import Facebook from "../../img/icons8-bootstrap-128.png"
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 
  return (
    <div className="works">
        {/*left side */}
        <div className="awesome">
          <span style={{color: darkMode ? 'white' : ''}}>Building Seamless <br /> Websites</span>
          <span> with Modern <br /> Tech Stack</span>
          <span>
          I offer expert web design using cutting-edge tools like <br />
           React.js, Node.js, Bootstrap, Tailwind, JavaScript, HTML, CSS, and MongoDB.
          <br /> Let's create your digital presence that's both visually appealing and highly functional.
          </span>
         <button className="s-button">Hire Me</button>
          <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/*right side*/}
        <div
        className="w-right">
            <motion.div 
             initial={{rotate:45}}
             whileInView={{rotate: 0}}
             viewport={{margin: '-40px'}}
             transition={{duration: 3.5 , type: 'spring'}}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiver} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </motion.div>
            {/*background circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>

    </div>
  )
}

export default Works