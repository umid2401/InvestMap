import React from 'react';
import {Link} from 'react-router-dom';

import baner from '../assets/images/main-slider/slider1/slider-bg1.jpg';
import logowhite from '../assets/images/logo-white-2.png';
import shape4 from '../assets/images/side-images/shape4.png';
import line4 from '../assets/images/side-images/shape-line4.png';
import shape5 from '../assets/images/side-images/shape5.png';
import line5 from '../assets/images/side-images/shape-line5.png';
import location from '../assets/images/footer-location.png';


const Footer2 = () => {
    return (
        <>
            <footer className="site-footer style-2" id="footer">
                <div className="footer-top footer-feature background-luminosity" style={{backgroundImage: "url("+ baner +")"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-12 col-md-12 " >
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-white">
                                        <Link to={"/"}><img src={logowhite} alt="" /></Link> 
                                    </div>
                                    <p>Akcel is a Crowdfunding & Charity Website by DexignZone lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                    <div className="dz-social-icon style-3">
                                        <ul>
                                            <li><a target="_blank" className="fab fa-facebook-f"  rel="noreferrer" href="https://www.facebook.com/"></a></li>
                                            <li><a target="_blank" className="fab fa-instagram"  rel="noreferrer" href="https://www.instagram.com/"></a></li>
                                            <li><a target="_blank" className="fab fa-twitter"  rel="noreferrer" href="https://twitter.com/"></a></li>
                                            <li><a target="_blank" className="fab fa-youtube"  rel="noreferrer" href="https://youtube.com/"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 " >
                                <div className="widget widget_services">
                                    <h4 className="widget-title">Resources</h4>
                                    <div className="separator-2 bg-secondary m-b30"></div>
                                    <ul>
                                        <li><Link to={"/how-it-works"}>How It Works</Link></li>
                                        <li><Link to={"/ask-a-question"}>Ask A Question</Link></li>
                                        <li><Link to={"/project-story"}>Project Story</Link></li>
                                        <li><Link to={"/mission"}>Mission</Link></li>
                                        <li><Link to={"/certificates"}>Certificates</Link></li>
                                        <li><Link to={"/terms-and-condition"}>Terms And Condition</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6 " >
                                <div className="widget recent-posts-entry">
                                    <h4 className="widget-title">Blog Posts</h4>
                                    <div className="separator-2 bg-secondary m-b30"></div>
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title"><Link to={"/blog-details"}>Simple Condition for all Around.</Link></h6>
                                                <span className="post-date"> JUNE 18, 2022</span>
                                            </div>
                                        </div>
                                        <div className="post-separator"></div>
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title"><Link to={"/blog-details"}>Simple Condition for all Around.</Link></h6>
                                                <span className="post-date"> AUGUST 22, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-12 " >
                                <div className="widget widget_locations">
                                    <h4 className="widget-title">Locations</h4>
                                    <div className="separator-2 bg-secondary m-b30"></div>
                                    <div className="clearfix">
                                        <h6 className="title">Washington</h6>
                                        <p>1559 Alabama Ave SE, DC 20032, Washington, USA</p>
                                        <img src={location} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="shape1" src={shape4} alt=""/>
                    <img className="shape2" src={line4 } alt=""/>
                    <img className="shape3" src={shape5} alt=""/>
                    <img className="shape4" src={line5 } alt=""/>
                </div>
                
                <div className="footer-bottom text-center">
                    <div className="container">
                        <span className="copyright-text">Akcel Crowdfunding & Charity Website - © 2023 by <a href="https://dexignzone.com/"  rel="noreferrer" target="_blank">DexignZone</a></span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer2;