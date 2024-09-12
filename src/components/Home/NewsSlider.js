import React from 'react';
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import { LazyLoadImage } from 'react-lazy-load-image-component';




//Images
import pic2 from './../../assets/images/blog/blog-grid/pic2.jpg';
import pic3 from './../../assets/images/blog/blog-grid/pic3.jpg';
import pic4 from './../../assets/images/blog/blog-grid/pic4.jpg';
import avat2 from './../../assets/images/avatar/avatar2.jpg';
import avat3 from './../../assets/images/avatar/avatar3.jpg';
import avat4 from './../../assets/images/avatar/avatar4.jpg';


import { Autoplay } from "swiper";

const dataBlog = [
	{subtitle:"Hawkins Junior",image: pic4, image2:avat2, title:"New vaccine for cattle calf loss learned", tage:"HEALTH"},
	{subtitle:"Tom wilson",image: pic3, image2:avat3, title:"4 Things parents learned for they jids in 2020",tage:"TECHNOLOGY"},
	{subtitle:"Adam Jordon",image: pic2, image2:avat4, title:"He Created the Web. Now He’s Out to Remake",tage:"EDUCATION"},
];

const NewsSlider = ({blog}) => {
    const api_url = process.env.REACT_APP_INVEST_MAP_API;

    return (
        <>             
            <Swiper className="blog-slider-full"
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
               
				{blog &&blog.map((d,i)=>(
					<SwiperSlide key={i}>						
                        <div className="dz-card style-1 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="dz-media">
                                <Link to={"/blog-details"}><img src={`${api_url}${d.image}`} alt="" /></Link>
                                <ul className="dz-badge-list">
                                    <li><Link to={"#"} className="dz-badge">{d.tage}</Link></li>
                                </ul>
                                <Link to={"/blog-details"} className="btn btn-secondary">Read More</Link>
                            </div>
                            <div className="dz-info">
                                <h5 className="dz-title"><Link to={"/blog-details"}>{d.title} </Link></h5>
                                <p>{d.content}</p>  
                                <p>Created: <span className='' style={{fontWeight:"bold"}}>{d.created_at.split('T')[0]}</span></p>                              
                                <div className="author-wrappper">
                                    <div className="author-media">
                                        <img src={d.image2} alt="" /> 
                                    </div>
                                    <div className="author-content">
                                        <div className="author-head">
                                            <h6 className="author-name">{d.subtitle}</h6>
                                        </div>
                                        <ul className="author-meta">
                                            {/* <li className="date">{d.created_at.split('T')[0]}</li> */}
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


export default NewsSlider;