/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
//Images
import team1 from './../../assets/images/team/team1.jpg';
import team2 from './../../assets/images/team/team2.jpg';
import team3 from './../../assets/images/team/team3.jpg';
import team4 from './../../assets/images/team/team4.jpg';
// import Swiper core and required modules
import { Autoplay } from "swiper";
//SwiperCore.use([EffectCoverflow,Pagination]);
const dataBlog = [
	{image: team1, title:'Kaylynn Donin', subtitle:'Managing Director'},
	{image: team2, title:'Jakob Bothman', subtitle:'District Accounts Analyst'},
	{image: team3, title:'Lindsey Botosh', subtitle:'National Web Assistant'},
	{image: team4, title:'Phillip Schleifer', subtitle:'National Intranet Specialist'}
];

const TeamSlider = () => {
    return (
        <>
            <Swiper className="team-slider"						
				speed= {1500}
				//parallax= {true}
				slidesPerView= {4}
				spaceBetween= {5}
				loop={true}
				autoplay= {{
				   delay: 3000,
				}}
				modules={[ Autoplay ]}
				breakpoints = {{
					1200: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    },
				}}
			>	
               
				{dataBlog.map((d,i)=>(
					<SwiperSlide key={i}>						
                        <div className="dz-team style-1 m-b30">
                            <div className="dz-media">
                                <Link to={"/instructor"}><img src={d.image} alt="" /></Link>
                                <ul className="team-social">
                                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="fab fa-facebook-f"></a></li>
                                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="fab fa-instagram"></a></li>
                                    <li><a href="https://twitter.com/" target="_blank" rel="noreferrer" className="fab fa-twitter"></a></li>
                                </ul>
                            </div>
                            <div className="dz-content">
                                <h5 className="dz-name">{d.title}</h5>
                                <span className="dz-position text-primary">{d.subtitle}</span>
                            </div>
                        </div>			
					</SwiperSlide>
				))}				
			</Swiper>
        </>
    );
};


export default TeamSlider;