import React from 'react';
import {Link} from 'react-router-dom';

import { SVGICON } from '../../constant/theme';

const servicesBlog = [
    {title:"Industry’s best fundraising success", icon:SVGICON.DoubleHeart },
    {title:"Supported By 55,00,000+ Donors" , icon:SVGICON.Ring},
    {title:"Easy-To-Manage Tools To Boost Results",icon:SVGICON.HeartWindow},
    {title:"Akcel Get Expert Support 24/7",icon:SVGICON.HeartHelp},
    {title:"A Dedicated Smart-Dashboard",icon:SVGICON.DollerBox},
    {title:"Receive donations via all popular payment",icon:SVGICON.HeartHome},
    {title:"nternational Payment Support",icon:SVGICON.ThumbDoller1},
    {title:"Withdraw Funds Without Hassle", icon:SVGICON.ThumbDoller2},
];

const AkcelServices = () => {
    return (
        <>
            <div className="row justify-content-center">
                {servicesBlog.map((data, ind)=>(
                    <div className="col-xl-3 col-lg-4 col-sm-6" key={ind}>
                        <div className="icon-bx-wraper text-center style-4 transparent m-b30 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon-bx-sm m-b20">
                                <Link to={"/project-categories"} className="icon-cell">
                                    {data.icon}
                                </Link>
                            </div>
                            <div className="icon-content">
                                <div className="separator"></div>
                                <p>{data.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row justify-content-center mt-0 mt-md-3 mt-xl-5">
                <div className="col-lg-4 col-md-6 m-t30 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="content-bx style-1 bg-primary text-center">
                        <div className="inner-content">
                            <h2 className="title text-white">Newsletter</h2>
                            <p className="text-white">Sign up for our monthly newsletter to get the latest news, volunteer opportunities.</p>
                            <form className="dzSubscribe">
                                <div className="dzSubscribeMsg text-white"></div>
                                <input name="dzEmail" required="required" type="email" className="form-control transparent m-b15" placeholder="Enter your email address" />
                                <button name="submit" value="Submit" type="submit" className="btn btn-light btn-rounded btn-block">Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 m-t30 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="content-bx style-1 bg-secondary text-center">
                        <div className="inner-content">
                            <div className="icon-lg m-b20">
                                <Link to={"/project-categories"} className="icon-cell">
                                    {SVGICON.HelpHeart}
                                </Link>
                            </div>
                            <h3 className="title">Want To Help?</h3>
                            <p className="m-b30">Your financial support is very important for our global projects.</p>
                            <Link className="btn btn-primary" to={"/become-a-fundraiser"}>Online Voter</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 m-t30 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="content-bx style-1 bg-dark text-center">
                        <div className="inner-content">
                            <h2 className="title text-white">33,986+</h2>
                            <p className="m-b30 text-white">Our campaign is powered by contributions from supporters like you</p>
                            <Link to={"/fundraiser-detail"} className="btn btn-primary">Online Voter</Link>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default AkcelServices;