import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import {IMAGES} from '../../constant/theme';

const dataBlog = [
	{image: IMAGES.BlogGrid1, image2:IMAGES.Avatar1 },
	{image: IMAGES.BlogGrid2, image2:IMAGES.Avatar2 },
	{image: IMAGES.BlogGrid3, image2:IMAGES.Avatar3 }
];


const LatestNewSlider = () => {
    const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
    return (
        <>
            <div className="resize-wrapper">
                <Swiper className="recent-blog1"	
                    speed= {1500}
                    //parallax= {true}
                    slidesPerView={3}
                    spaceBetween= {30}
                    //centeredSlides= {true}
                    loop={true}
                    autoplay= {{
                        delay: 3000,
                    }}
                    modules={[ Autoplay ,Navigation,  Pagination]}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current
                            swiper.params.navigation.nextEl = navigationNextRef.current
                            swiper.navigation.destroy()
                            swiper.navigation.init()
                            swiper.navigation.update()
                        })
                    }}
                    breakpoints = {{
                        1200: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        320: {
                            slidesPerView: 1,
                        },
                    
                    }}
                >	
                    {dataBlog.map((d,i)=>(
                        <SwiperSlide key={i}>						
                           <div className="dz-card style-4 " style={{backgroundImage:"url("+ d.image +")"}}> 
								<div className="dz-info">
									<div className="dz-meta">
										<ul>
											<li className="post-author">
												<img src={d.image2} alt="" /> By Jone Doe
											</li>
											<li className="post-comments">20 Comments</li>
											<li className="post-date">
												<span className="day">20</span>
												<span className="month">January</span>
											</li>
										</ul>
									</div>
									<h5 className="dz-title"><Link to={"/blog-details"}>How to keep your Body.</Link></h5> 
									<p>A wonderful serenity has taken of my entire soul, like these.</p>
									<Link to={"/blog-details"} className="btn btn-primary">Read More</Link>
								</div>
							</div>	
                        </SwiperSlide>
                        
                    ))}	

                </Swiper>                
                <div className="swiper-btn swiper-btn-center-lr">
                    <div className="swiper-button-prev btn-prev style-2" ref={navigationPrevRef}><i className="flaticon-left-arrow-1"></i></div>
                    <div className="swiper-button-next btn-next style-2" ref={navigationNextRef}><i className="flaticon-next"></i></div>
                </div>
            </div>
                    

        </>
    );
};

export default LatestNewSlider;