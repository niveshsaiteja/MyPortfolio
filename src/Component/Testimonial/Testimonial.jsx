import React from 'react'
import "./Testimonial.css"
import {Swiper,SwiperSlide} from "swiper/react"
import profilePic1 from "../../img/social-media_10034175.png"
import profilePic2 from "../../img/enter_6779791.png"
import profilePic3 from "../../img/public-domain_6466003.png"
import profilePic4 from "../../img/browser_1730079.png"
import profilePic5 from "../../img/browser_874222.png"
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
    const clients = [
        {
            img: profilePic1,
            heading: "Responsive Design",
            review:
            "Enjoy a seamless browsing experience on any device. Our websites are meticulously designed to adapt effortlessly to various screen sizes, ensuring accessibility and engagement for all users. Embrace a flawless user experience across all devices. Our websites feature responsive design, adapting seamlessly to smartphones, tablets, and desktops. Whether your audience accesses your site on the go or from the comfort of their home, they'll always enjoy optimal functionality and visual appeal."
        },
        {
            img: profilePic2,
            heading: "Intuitive Navigation",
            review:
            "User-friendly navigation is at the core of our design philosophy. With clear and intuitive menus, visitors can effortlessly explore your content, find what they're looking for, and stay engaged. Navigation shouldn't be a puzzle. Our designs prioritize intuitive navigation, making it effortless for visitors to explore your content. Clear and concise menus, strategically placed call-to-action buttons, and a thoughtfully organized layout ensure that users can swiftly find the information they seek, enhancing engagement and satisfaction."
        },
        {
            img: profilePic3,
            heading: "Visually Captivating",
            review:
            "Your website is a digital reflection of your brand. We craft visually captivating designs that align with your identity, using a harmonious blend of colors, typography, and imagery to leave a lasting impression. Stand out with captivating aesthetics that resonate with your brand's essence. Our design approach seamlessly blends colors, typography, and imagery to create a visually appealing narrative. From attention-grabbing hero sections to carefully curated visuals, each element is chosen with purpose to leave an indelible mark on your visitors."
        },
        {
            img: profilePic4,
            heading: "Optimized Performance",
            review:
            "Slow-loading websites are a thing of the past. We prioritize performance optimization to ensure your site loads quickly, delivering a smooth and enjoyable experience for your visitors. Speed matters in the digital world. Our commitment to optimized performance guarantees swift loading times, preventing frustrating delays that can deter users. By employing best practices in website optimization, we ensure your audience experiences a seamless journey through your content, enhancing their engagement and overall satisfaction."
        },
        {
            img: profilePic5,
            heading: "Conversion-Focused Layouts",
            review:
            "Beyond aesthetics, our designs are strategically structured to drive conversions. We place key elements strategically to guide visitors toward your desired actions, be it making a purchase, filling out a form, or subscribing to your content. Your website is more than just a virtual presence – it's a conversion tool. Our design strategies prioritize user experience and guide visitors towards valuable actions. Through strategic placement of elements such as prominent contact forms, compelling CTAs, and well-structured product/service showcases, we create layouts that convert curious visitors into loyal customers."
        }
    ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Quality-Centric Web Design  </span>
            <span>Services</span>
            <span>You Can Trust ...</span>
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
                        <h1 className='head-client'>{client.heading}</h1>
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