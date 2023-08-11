import React from 'react'
import "./Works.css"
import Upwork from "../../img/Upwork.png"
import Fiver from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
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
          <span style={{color: darkMode ? 'white' : ''}}>Worrks for all these</span>
          <span>Brands & Clients</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            <br />
             quod odio temporibus iure praesentium inventore
              <br />
             sed amet animi minus
             <br />
              Delectus, itaque incidunt.
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