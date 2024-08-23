import React from 'react';
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

//SwiperCore.use([EffectCoverflow,Pagination]);

const dataBlog = [
	{image: pic1, title:"Johan Lee"},
	{image: pic2, title:"Lee Jordon"},
	{image: pic3, title:"Alex Costa"}
];

const TestimonialSlider = () => {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
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
               
				{dataBlog.map((d,i)=>(
					<SwiperSlide key={i}>						
                        <div className="testimonial-1">
							<div className="testimonial-text">
								<p>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni..</p>
							</div>
							<div className="testimonial-details">
								<div className="testimonial-info">
									<div className="testimonial-pic">
										<img src={d.image} alt="" />
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