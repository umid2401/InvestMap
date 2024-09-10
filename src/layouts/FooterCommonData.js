/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {Link} from 'react-router-dom';

const FooterCommonData = ({logoImage, iconStyle}) => {
    return (
        <>
            <div className="col-xl-4 col-lg-12 col-md-12">
                <div className="widget widget_about">
                    <div className="footer-logo logo-white">
                        <Link  to={"/"}><img className='w-25' src={logoImage} alt="" /></Link> 
                    </div>
                    <p>
                    Investmap is a platform that connects investors with promising startups and projects. It provides detailed insights and analytics to help users make informed investment decisions. The platform simplifies the investment process with tools for tracking project progress and funding goals.</p>
                    <div className="dz-social-icon style-1">
                        <ul>
                            <li><a target="_blank" className="fab fa-facebook-f"  rel="noreferrer" href="#"></a></li>
                            
                            {" "}<li><a target="_blank" className="fab fa-instagram"  rel="noreferrer" href="#"></a></li>
                            {" "}<li><a target="_blank" className="fab fa-twitter"  rel="noreferrer" href="#"></a></li>
                            {" "}<li><a target="_blank" className="fab fa-youtube"  rel="noreferrer" href="#"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-3 col-6">
                <div className="widget widget_services">
                    <h5 className="footer-title">Company</h5>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/investing"}>Investing</Link></li>
                        <li><Link to={"/raising"}>Raising</Link></li>
                        <li><Link to={"/academy"}>Academy</Link></li>
                        
                    </ul>
                </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-3 col-6">
                <div className="widget widget_services">
                    <h5 className="footer-title"> Resources</h5>
                    <ul>
                        <li><Link to={"/about-us"}>About Us</Link></li>
                        {/* <li><Link to={"/volunteer"}>Volunteer</Link></li> */}
                        <li><Link to={"/investing"}>Events</Link></li>
                        <li><Link to={"/project"}>Project</Link></li>
                        <li><Link to={"/contact"}>Contact Us</Link></li>
                        <li><Link to={"/faq"}>Faq</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="widget widget_getintuch">
                    <h5 className="footer-title">Get in Touch with Us</h5>
                    <ul>
                        <li>
                            {iconStyle   ? 
                                <i className="fas fa-map-marker-alt text-primary"></i>
                                :  
                                <i className="fas fa-map-marker-alt"></i>
                            }
                            <span>832  Toshkent shahar, Mirzo Ulug'bek tumani, Ziyolilar ko'chasi, 9 uy</span>
                        </li>
                        <li>
                            {iconStyle   ? 
                                <i className="fa-solid fa-phone text-primary"></i>
                                :
                                <i className="fa-solid fa-phone"></i>
                            }
                            <span>(+998)93 392 72 22</span>
                        </li>
                        <li>
                            {iconStyle   ? 
                                <i className="fa fa-envelope text-primary"></i> 
                                :
                                <i className="fa fa-envelope"></i> 
                            }
                            <span>info@greatsoft.uz</span>
                        </li>
                    </ul>
                </div>
            </div> 
        </>
    );
};

export default FooterCommonData;
