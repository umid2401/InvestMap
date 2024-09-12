import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//import "swiper/css/pagination";

import { Autoplay, Navigation, EffectFade } from "swiper";

import DonateModal from '../Modal/DonateModal';

import slide1 from "../../assets/images/main-slider/slider1/slider-bg1.jpg";
import slide2 from "../../assets/images/main-slider/slider1/slider-bg2.jpg";
import slide3 from "../../assets/images/main-slider/slider1/slider-bg3.jpg";
import shape1 from "../../assets/images/main-slider/slider1/shape1.svg";
import line1 from "../../assets/images/main-slider/slider1/shape-line1.svg";
import shape2 from "../../assets/images/main-slider/slider1/shape2.svg";
import line2 from "../../assets/images/main-slider/slider1/shape-line2.svg";
import pic1 from "../../assets/images/main-slider/slider1/pic1.jpg";
import pic2 from "../../assets/images/main-slider/slider1/pic2.jpg";
import pic3 from "../../assets/images/main-slider/slider1/pic3.jpg";
import pic4 from "../../assets/images/main-slider/slider1/pic4.jpg";
import pic5 from "../../assets/images/main-slider/slider1/pic5.jpg";
import pic6 from "../../assets/images/main-slider/slider1/pic6.jpg";
import pic7 from "../../assets/images/main-slider/slider1/pic7.jpg";
import pic8 from "../../assets/images/main-slider/slider1/pic8.jpg";
import pic9 from "../../assets/images/main-slider/slider1/pic9.jpg";


const dataBlog = [
	{title1:"GIVE A HAND TO MAKE", title2:"Your Donation Can Change the World ",baner:slide1, img2: pic1, img3: pic2, img4:pic3 },
	{title1:"Empower Your Startup with Investhub", title2:"Start raising capital today",baner:slide2, img2: pic4, img3: pic5, img4:pic6 },
	{title1:"CHILD THE OF EDUCATION", title2:"Give  a Child the of Education",baner:slide3, img2: pic7, img3: pic8, img4: pic9},
	
];

const Mainslider2 = ({onShowDonate}) => {
    const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
    //const paginationRef = React.useRef(null)
	const modalRef = useRef(null);
    return (
        <>
            <Swiper className="main-slider"						
				speed= {1500}
				//parallax= {true}
				slidesPerView= {1}
                effect="fade"
				spaceBetween= {0}
				loop={true}
				autoplay= {{
				   delay: 3000,
				}}
                //pagination={{ clickable: true }}
                onSwiper={(swiper) => {
					setTimeout(() => {
						swiper.params.navigation.prevEl = navigationPrevRef.current
						swiper.params.navigation.nextEl = navigationNextRef.current
						swiper.navigation.destroy()
						swiper.navigation.init()
						swiper.navigation.update()
					})
				}}
                // pagination= {{
                //     el= {.swiper-pagination}
                //     clickable= {true}
                // }}
				modules={[ Autoplay, Navigation, EffectFade ]}
				
			>	
               
				{dataBlog.map((d,i)=>(
					<SwiperSlide key={i}>						
                       <div className="banner-inner" style={{backgroundImage: "url("+ d.baner +")"}}>
							<div className="container-fluid">
								<div className="row">
									<div className="col-lg-6 col-md-12">
										<div className="banner-content">
											<div className="top-content">
												<h5 className="sub-title text-secondary">{d.title1}</h5>
												<h1 className="title">{d.title2} </h1>
<p>Take the first step towards unlocking your startup’s potential. Submit your project, and our platform will match you with investors who share your vision. Together, we’ll make your entrepreneurial dreams a reality.</p>												<div className="d-flex align-items-center">
													
													<Link to={"/about-us"} className="btn btn-secondary btnhover2">Learn More <i className="flaticon-right-arrows ms-3"></i></Link>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="banner-media row gx-4">
											<div className="col-5">
												<div className="main-img1">
													<img src={d.img2} alt="" />
												</div>
												<div className="main-img2">
													<img src={d.img3} alt="" />
												</div>
											</div>
											<div className="col-7">	
												<div className="main-img3">
													<img src={d.img4} alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<img className="shape1" src={shape1} alt="" />
							<img className="shape2" src={line1} alt="" />
							<img className="shape3" src={shape2} alt="" />
							<img className="shape4" src={line2} alt="" />
						</div>			
					</SwiperSlide>
				))}			
                
                <div className="bottom-wrapper">
					<ul className="social-list">
						<li><a href="https://www.facebook.com/" rel="noreferrer">Facebook</a></li>
						<li><a href="https://twitter.com/" rel="noreferrer">Twitter</a></li>
						<li><a href="https://www.instagram.com/" rel="noreferrer">Instagram</a></li>
					</ul>
					<div className="btn-wrapper">
						<div className="main-btn main-btn-prev" ref={navigationPrevRef}><i className="fa fa-angle-left"></i></div>
						<div className="main-btn main-btn-next" ref={navigationNextRef}><i className="fa fa-angle-right"></i></div>
					</div>
				</div>
			</Swiper>
			<DonateModal 
                ref={modalRef}
            />
        </>
    );
};


export default Mainslider2;