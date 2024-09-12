import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Swiper styles
//import "swiper/css";

//Images
import pic1 from './../../assets/images/testimonials/pic1.jpg';
import pic2 from './../../assets/images/testimonials/pic2.jpg';
import pic3 from './../../assets/images/testimonials/pic3.jpg';

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import axios from 'axios';

//SwiperCore.use([EffectCoverflow,Pagination]);



const TestimonialSlider = () => {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	const [data, setData] = useState(null);
	const api_url = process.env.REACT_APP_INVEST_MAP_API;
	const getData = async()=>{
		try {
			const res = await axios.get(`${api_url}/api/testimonials/`);
			setData(res?.data);
			console.log(res)
		} catch (error) {
			console.log(error)
			
		}
	}
	useEffect(()=>{
		getData();
	},[]);
	const dataBlog = [
		{image: pic1, title:"Johan Lee"},
		{image: pic2, title:"Lee Jordon"},
		{image: pic3, title:"Alex Costa"}
	];
	if(!data || data.length===0){
		setData(dataBlog)
	}
    return (
        <>
            <Swiper className="testimonial-swiper"	
				speed= {1500}
				//parallax= {true}
				slidesPerView={"auto"}
				spaceBetween= {0}
				centeredSlides= {true}
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
			>	
               
				{data&&data.map((d,i)=>(
					<SwiperSlide key={i}>						
                        <div className="testimonial-1">
							<div className="testimonial-text">
								<p>{d?.comment}</p>
							</div>
							<div className="testimonial-details">
								<div className="testimonial-info">
									<div className="testimonial-pic">
										<img src={`${api_url}${d.image}`} alt="" />
									</div>
									<div className="clearfix">
										<h5 className="testimonial-name">{d.title}</h5>
										<span className="testimonial-position">Joe’s Parents</span>
									</div>
								</div>
								<div className="testimonial-rating">
									<ul>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star gray-light"></i></li>
										<li><i className="fa fa-star gray-light"></i></li>
									</ul>
								</div>
							</div>
						</div>				
					</SwiperSlide>
					
				))}		
				<div className="swiper-btn container swiper-btn-center-lr">
					<div className="test-swiper-prev btn-prev style-1" ref={navigationPrevRef}><i className="fa fa-arrow-left-long"></i></div>
					<div className="test-swiper-next btn-next style-1" ref={navigationNextRef}><i className="fa fa-arrow-right-long"></i></div>
				</div>	
			</Swiper>
        </>
    );
};


export default TestimonialSlider;