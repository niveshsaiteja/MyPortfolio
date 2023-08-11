import React from 'react'
import "./Testimonial.css"
import {Swiper,SwiperSlide} from "swiper/react"
import profilePic1 from "../../img/profile1.jpg"
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
    const clients = [
        {
            img: profilePic1,
            review:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eaque tempora, consequuntur ducimus et nobis molestiae recusandae consectetur aut fugiat iure cumque dolorem harum neque quasi vitae doloremque. Perspiciatis, doloribus!"
        },
        {
            img: profilePic1,
            review:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eaque tempora, consequuntur ducimus et nobis molestiae recusandae consectetur aut fugiat iure cumque dolorem harum neque quasi vitae doloremque. Perspiciatis, doloribus!"
        },
        {
            img: profilePic1,
            review:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eaque tempora, consequuntur ducimus et nobis molestiae recusandae consectetur aut fugiat iure cumque dolorem harum neque quasi vitae doloremque. Perspiciatis, doloribus!"
        },
        {
            img: profilePic1,
            review:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eaque tempora, consequuntur ducimus et nobis molestiae recusandae consectetur aut fugiat iure cumque dolorem harum neque quasi vitae doloremque. Perspiciatis, doloribus!"
        },
        {
            img: profilePic1,
            review:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eaque tempora, consequuntur ducimus et nobis molestiae recusandae consectetur aut fugiat iure cumque dolorem harum neque quasi vitae doloremque. Perspiciatis, doloribus!"
        }
    ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me ...</span>
            <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background:"skyblue"}}></div>
        </div>
        {/*slider */}
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{clickable:true}}
        >
            {clients.map((client,index) =>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonial