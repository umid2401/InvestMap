import React from 'react';
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//Images
import pic4 from './../../assets/images/testimonials/large/pic4.jpg';
import pic5 from './../../assets/images/testimonials/large/pic5.jpg';
import pic6 from './../../assets/images/testimonials/large/pic6.jpg';




// import Swiper core and required modules
import { Autoplay, Navigation } from "swiper";

//SwiperCore.use([EffectCoverflow,Pagination]);

const dataBlog = [
    {image:pic4},
    {image:pic5},
    {image:pic6}
];

const SuccessSlider = ({openReadModal}) => {
    return (
        <>
             
            <Swiper className="testimonial-swiper2"
				speed= {1500}
				//parallax= {true}
               // navigation={true}
				slidesPerView= {1}
				spaceBetween= {30}
				loop={true}
				autoplay= {{
				   delay: 3000,
				}}
				modules={[ Autoplay, Navigation ]}
			>	
               
				{dataBlog.map((d,i)=>(
					<SwiperSlide key={i}>						
                        <div className="testimonial-2">
                            <div className="testimonial-media">
                                <img src={d.image} alt="" />
                            </div>
                            <div className="testimonial-content">
                                <h5 className="testimonial-title">Heroes like you helped my son win his battle.</h5>
                                <p className="testimonial-text text-dark">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look. 	
									<Link to={"#"}  data-bs-toggle="modal" onClick={()=>openReadModal(true)}>Read More</Link>
								</p>
                                <div className="testimonial-info">
                                    <div className="quotes">
                                        <i className="fa-solid fa-quote-left"></i>
                                    </div>
                                    <div className="clearfix">
                                        <h5 className="testimonial-name">Lindsay S.</h5>
                                        <span className="testimonial-position">Community Engagement</span>
                                    </div>
                                </div>
                            </div>
                        </div>			
					</SwiperSlide>
				))}				
			</Swiper>
            <div className="swiper-btn swiper-btn-center-lr">
                <div className="test-swiper-prev btn-prev style-2">
                    <i className="flaticon-left-arrow-1"></i>
                </div>
                <div className="test-swiper-next btn-next style-2">
                    <i className="flaticon-next"></i>
                </div>
            </div>
        </>
    );
};


export default SuccessSlider;