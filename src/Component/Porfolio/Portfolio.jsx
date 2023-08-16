import React from 'react'
import "./Portfolio.css"
import {Swiper,SwiperSlide} from 'swiper/react'
import Siderbar from "../../img/tulaproject.png"
import Ecommerce from "../../img/Screenshot 2023-08-16 150417.png"
import HOC from "../../img/ketoproject.png"
import MusicApp from "../../img/foodfarmbridge.png"
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 
  return (
    <div className="portfolio" id='Portfolio'>
        {/*headinh */}
        <span style={{color: darkMode? 'white' : ''}}>Recent Projects</span>
        <span>Portfolio</span>
        
        {/*slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className='portfolio-slider'
        >
            <SwiperSlide>
                <a href="https://github.com/niveshsaiteja/tulaorg_ngo_project"><img src={Siderbar} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://github.com/niveshsaiteja/ecommerce-landingpage-task-3"><img src={Ecommerce} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://github.com/niveshsaiteja/niveshfarmproject"><img src={MusicApp} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://github.com/niveshsaiteja/ecommerce-landingpage-task-3"><img src={HOC} alt="" /></a>
            </SwiperSlide>
        </Swiper>  
    </div>
  )
}

export default Portfolio