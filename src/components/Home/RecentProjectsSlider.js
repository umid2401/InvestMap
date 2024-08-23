import React from 'react';
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Swiper styles
import "swiper/css";

//Images
import pic1 from './../../assets/images/project/pic1.jpg';
import pic2 from './../../assets/images/project/pic2.jpg';
import pic3 from './../../assets/images/project/pic3.jpg';
import avt1 from './../../assets/images/avatar/avatar1.jpg';
import avt2 from './../../assets/images/avatar/avatar2.jpg';
import avt3 from './../../assets/images/avatar/avatar3.jpg';



// import Swiper core and required modules
import { Autoplay } from "swiper";

//SwiperCore.use([EffectCoverflow,Pagination]);

const dataBlog = [
	{image: pic1, image2:avt1},
	{image: pic2, image2:avt2},
	{image: pic3, image2:avt3},
];

const RecentProjectsSlider = () => {
    return (
        <>
             
            <Swiper className="recent-blog p-b5"
				speed= {1500}
				//parallax= {true}
				slidesPerView= {3}
				spaceBetween= {30}
				loop={true}
				autoplay= {{
				   delay: 3000,
				}}
				modules={[ Autoplay ]}
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
                        <div className="dz-card style-2 overlay-skew wow fadeInUp" data-wow-delay="0.2s">
                            <div className="dz-media">
                                <Link to={"/fundraiser-detail"}><img src={d.image} alt="" /></Link>
                            </div>
                            <div className="dz-info">
                                <ul className="dz-category">
                                    <li><Link to={"#"}>EDUCATION</Link></li>
                                </ul>
                                <h5 className="dz-title"><Link to={"/fundraiser-detail"}>New vaccine for cattle calf loss learned</Link></h5>
                                <div className="progress-bx style-1">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-secondary progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}></div>
                                    </div>
                                    <ul className="progress-tag">
                                        <li className="raised">
                                            <i className="las la-coins"></i> <span>Total Raised $ 3,542</span>
                                        </li>
                                        <li className="goal">
                                            <i className="lar la-calendar"></i> <span>43 Days left</span>
                                        </li>
                                    </ul> 
                                </div>
                                <div className="author-wrappper">
                                    <div className="author-media">
                                        <img src={d.image2} alt="" /> 
                                    </div>
                                    <div className="author-content">
                                        <div className="author-head">
                                            <h6 className="author-name">Cheyenne Curtis</h6>
                                            <ul className="rating-list">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star gray-light"></i></li>
                                                <li><i className="fa fa-star gray-light"></i></li>
                                            </ul>
                                        </div>
                                        <ul className="author-meta">
                                            <li className="campaign">12 Campaign</li>
                                            <li className="location">New York, London</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>			
					</SwiperSlide>
				))}				
			</Swiper>
        </>
    );
};


export default RecentProjectsSlider;
