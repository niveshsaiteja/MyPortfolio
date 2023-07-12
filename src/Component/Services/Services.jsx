import React from 'react'
import Card from '../Card/Card'
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Glasses from "../../img/glasses.png"
import Resume from "../../img/resume.pdf"

const Services = () => {
  return (
    <div className='services'>
        {/*left side */}
        <div className="awesome">
          <span>My Awesome</span>
          <span>services</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing <br />
             quod odio temporibus iure praesentium inventore sed amet animi minus
              Delectus, itaque incidunt.
          </span>
         <a href={Resume} download>
         <button className="s-button">Download CV</button>
         </a>
          <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/*right side */}
        <div className="cards">
          <div style={{left: "14rem"}}>
            <Card 
              emoji = {HeartEmoji}
              heading = {"Design"}
              detail = {"Figma, Sketch , Photoshop, Adobe, Adobe xd"}
            />
          </div>

          <div style={{top: "12rem", left: "-4rem"}}>
            <Card 
              emoji = {Glasses}
              heading = {"Developer"}
              detail = {"Html, Css, JavaScript, React"}
            />
          </div>

          <div style={{top: "19rem", left: "12rem"}}>
            <Card 
              emoji = {Humble}
              heading = {"UI/UX"}
              detail = {"Figma, Sketch , Photoshop, Adobe, Adobe xd"}
            />
          </div>
          <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services