import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Swiper styles
import "swiper/css";

//Images
import logo1 from './../../assets/images/clients-logo/logo1.png';
import logo2 from './../../assets/images/clients-logo/logo2.png';
import logo3 from './../../assets/images/clients-logo/logo3.png';
import logo4 from './../../assets/images/clients-logo/logo4.png';
import logo5 from './../../assets/images/clients-logo/logo5.png';




// import Swiper core and required modules
import { Autoplay } from "swiper";

//SwiperCore.use([EffectCoverflow,Pagination]);

const dataBlog = [
	{image: logo1},
	{image: logo2},
	{image: logo3},
	{image: logo4},
	{image: logo5}
];

const BanerLogoSlider = () => {
    return (
        <>
             <h5 className="text-primary mt-5">Our Partners</h5>
            <Swiper className="banner-clients-swiper"						
				speed= {1500}
				//parallax= {true}
				slidesPerView= {3}
				spaceBetween= {70}
				loop={true}
				autoplay= {{
				   delay: 3000,
				}}
				modules={[ Autoplay ]}
				breakpoints = {{
					575: {
                        slidesPerView: 3,
                    },
                    320: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 2,
                    },
				}}
			>	
               
				{dataBlog.map((d,i)=>(
					<SwiperSlide key={i}>						
                        <div className="clients-logo">
                            <img className="logo-main" src={d.image} alt="" />
                        </div>				
					</SwiperSlide>
				))}				
			</Swiper>
        </>
    );
};


export default BanerLogoSlider;
