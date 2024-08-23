import React from 'react';
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Swiper styles
//import "swiper/css";

//Images
import project1 from './../../assets/images/project/project1/pic1.jpg';
import project2 from './../../assets/images/project/project1/pic2.jpg';
import project3 from './../../assets/images/project/project1/pic3.jpg';
import project4 from './../../assets/images/project/project1/pic4.jpg';

import avat1 from './../../assets/images/avatar/avatar1.jpg';
import avat2 from './../../assets/images/avatar/avatar2.jpg';
import avat3 from './../../assets/images/avatar/avatar3.jpg';


// import Swiper core and required modules
import { Autoplay } from "swiper";

//SwiperCore.use([EffectCoverflow,Pagination]);

const dataBlog = [
	{title:"He Created the Web. Now He’s Out to Remake", subtitle:"EDUCATION", image: project1, image2:avat1, autor:"Adam Jordon", progres:"50%"},
	{title:"Online legal advice for asylum seekers in Greece", subtitle:"HEALTH", image: project2, image2: avat2, autor:"KK Sharma", progres:"70%"},
	{title:"Things parents learned for they jids in 2020", subtitle:"TECHNOLOGY", image: project3, image2: avat3, autor:"Tom wilson", progres:"90%"},
	{title:"He Created the Web. Now He’s Out to Remake", subtitle:"EDUCATION", image: project4, image2: avat1, autor:"Adam Jordon", progres:"60%"},
	
];

const TrendingSlider = () => {
    return (
        <>
             
            <Swiper className="recent-blog2"
				speed= {1500}
				//parallax= {true}
				slidesPerView= {4}
				spaceBetween= {30}
				loop={true}
				autoplay= {{
				   delay: 3000,
				}}
				modules={[ Autoplay ]}
				breakpoints = {{
					1680: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    },
				}}
			>	
               
				{dataBlog.map((d,i)=>(
					<SwiperSlide key={i}>						
                        <div className="dz-card style-5">
                            <div className="dz-media">
                                <Link to={"/fundraiser-detail"}><img src={d.image} alt="" /></Link>
                            </div>
                            <div className="dz-info">
                                <ul className="dz-category">
                                    <li><Link to={"#"}>{d.subtitle}</Link></li>
                                </ul>
                                <h4 className="dz-title"><Link to={"/fundraiser-detail"}>{d.title} </Link></h4>  
                                <ul className="dz-meta">
                                    <li className="author-wrappper author-wrappper-sm mt-0">
                                        <div className="author-media">
                                            <img src={d.image2} alt="" /> 
                                        </div>
                                        <span>{d.autor}</span>
                                    </li>
                                    <li className="dz-date">
                                        <i className="fa-solid fa-calendar"></i>
                                        {" "}<span>45 Days left</span>
                                    </li>
                                </ul>
                                <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex..</p> 
                                <div className="progress-bx style-2">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:d.progres}}>
                                            <span className="progress-value">{d.progres}</span>
                                        </div>
                                    </div>
                                    <ul className="progress-tag">
                                        <li className="raised">
                                            <p>Raised: <span className="text-primary">$ 5,345</span></p>
                                        </li>
                                        <li className="goal">
                                            <p>Goal: <span className="text-primary">$70,000</span></p>
                                        </li>
                                    </ul> 
                                </div>
                            </div>
                        </div>				
					</SwiperSlide>
				))}				
			</Swiper>
        </>
    );
};


export default TrendingSlider;
