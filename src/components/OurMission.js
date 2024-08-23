import React from 'react';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';


import slide from './../assets/images/main-slider/pic1.png';

const CounterBlog = [
    {title:"Total Donor", number:"4556"},
    {title:"Volunteer", number:"874"},
    {title:"Total Donation", number:"195234"},
];

const OurMission = () =>{
    return(
        <>
            <div className="col-lg-5">
                <div className="dz-media">
                    <img src={slide} alt="image" />
                </div>
            </div>
            <div className="col-lg-7 m-b50">
                <div className="section-head">
                    <h5 className="sub-title">Our Mission</h5>
                    <h2>Change The World for Better Futures</h2>
                    <p className="m-t20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                </div>
                <div className="row">
                    {CounterBlog.map((item, index)=>(
                        <div className="col-lg-3 col-sm-4 col-6 m-b30" key={index}>
                            <h2>$
                                <span className="counter">
                                    <CountUp
                                        end={item.number} 
                                        separator = ","
                                        duration= "3"
                                    />
                                </span>
                            </h2>
                            <span className="counter-text">{item.title}</span>
                        </div>
                    ))} 
                </div>
                <Link to={"/project-story"} className="m-r30 m-sm-r10 btn btn-secondary">See Projects <i className="flaticon-right-arrows ps-3"></i></Link>
                <Link to={"/how-it-works"} className="btn btn-outline-dark">How It Works</Link>
            </div>
        </>
    )
}
export default OurMission;