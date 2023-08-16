import React from 'react'
import "./Experience.css"
import { themeContext } from "../../Context";
import { useContext } from "react";

const Experience = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 
  return (
    <div className="experience" id='Experience'>
      <div className="achievement">
        <div className="circle">5+</div>
        <span>Open Source</span>
        <span>Contribution</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">9+</div>
        <span>TechStack</span>
        <span>Known</span>
      </div>

    </div>
  )
  
}

export default Experience