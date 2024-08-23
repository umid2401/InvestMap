import React from 'react';
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper";

//SwiperCore.use([EffectCoverflow,Pagination]);

const dataBlog = [
	{icon: "flaticon-raw-food", title:"Health"},
	{icon: "flaticon-responsibility", title:"Care"},
	{icon: "flaticon-vr-glasses", title:"Technology"},
	{icon: "flaticon-open-book", title:"Education"},
	{icon: "flaticon-video", title:"Videos"},
	{icon: "flaticon-like-1", title:"Fashion"},
	{icon: "flaticon-transformation", title:"Design"},
	{icon: "flaticon-doctor-bag", title:"Medical"}
];

const CategoriesSlider = () => {
    //const navigationPrevRef = React.useRef(null)
	//const navigationNextRef = React.useRef(null)
    const paginationRef = React.useRef(null)
    return (
        <>
            <Swiper className="categories-swiper"						
				speed= {1500}
				//parallax= {true}
				slidesPerView= {6}
				spaceBetween= {30}
				loop={false}
				autoplay= {{
				   delay: 3000,
				}}
                //pagination={{ clickable: true }}
                onSwiper={(swiper) => {
					setTimeout(() => {
						//swiper.params.navigation.prevEl = navigationPrevRef.current
						//swiper.params.navigation.nextEl = navigationNextRef.current
						//swiper.navigation.destroy()
						//swiper.navigation.init()
						//swiper.navigation.update()
					})
				}}
                // pagination= {{
                //     el= {.swiper-pagination}
                //     clickable= {true}
                // }}
				modules={[ Autoplay, Pagination ]}
				breakpoints = {{
					1191: {
                        slidesPerView: 6,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 3,
                    },
                    320: {
                        slidesPerView: 2,
                    },
				}}
			>	
               
				{dataBlog.map((d,i)=>(
					<SwiperSlide key={i}>						
                        <div className="icon-bx-wraper text-center style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon-lg m-sm-b20 m-b30"> 
                                <Link to={"/project-categories"} className="icon-cell">
                                    <i className={d.icon}></i>
                                </Link> 
                            </div>
                            <div className="icon-content">
                                <h6 className="dz-tilte m-b5 text-capitalize"><Link to={"/project-categories"}>{d.title}</Link></h6>
                            </div>
                        </div>			
					</SwiperSlide>
				))}			
                <div className="swiper-pagination style-1 text-center" ref={paginationRef}></div>
			</Swiper>
        </>
    );
};


export default CategoriesSlider;
