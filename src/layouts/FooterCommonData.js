import React from 'react';
import {Link} from 'react-router-dom';

const FooterCommonData = ({logoImage, iconStyle}) => {
    return (
        <>
            <div className="col-xl-4 col-lg-12 col-md-12">
                <div className="widget widget_about">
                    <div className="footer-logo logo-white">
                        <Link  to={"/"}><img className='w-50' src={logoImage} alt="" /></Link> 
                    </div>
                    <p>Akcel is a Crowdfunding & Charity Website by DexignZone lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    <div className="dz-social-icon style-1">
                        <ul>
                            <li><a target="_blank" className="fab fa-facebook-f"  rel="noreferrer" href="https://www.facebook.com/"></a></li>
                            
                            {" "}<li><a target="_blank" className="fab fa-instagram"  rel="noreferrer" href="https://www.instagram.com/"></a></li>
                            {" "}<li><a target="_blank" className="fab fa-twitter"  rel="noreferrer" href="https://twitter.com/"></a></li>
                            {" "}<li><a target="_blank" className="fab fa-youtube"  rel="noreferrer" href="https://youtube.com/"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-3 col-6">
                <div className="widget widget_services">
                    <h5 className="footer-title">Resources</h5>
                    <ul>
                        <li><Link to={"/how-it-works"}>How It Works</Link></li>
                        <li><Link to={"/Linksk-a-question"}>Ask A Question</Link></li>
                        <li><Link to={"/project-story"}>Project Story</Link></li>
                        <li><Link to={"/mission"}>Mission</Link></li>
                        <li><Link to={"/certificates"}>Certificates</Link></li>
                        <li><Link to={"/terms-and-condition"}>Terms And Condition</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-3 col-6">
                <div className="widget widget_services">
                    <h5 className="footer-title">Company</h5>
                    <ul>
                        <li><Link to={"/about-us"}>About Us</Link></li>
                        <li><Link to={"/volunteer"}>Volunteer</Link></li>
                        <li><Link to={"/happy-clients"}>Happy Clients</Link></li>
                        <li><Link to={"/project"}>Project</Link></li>
                        <li><Link to={"/contact-us"}>Contact Us</Link></li>
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
                            <span>832  Thompson Drive, San Fransisco CA 94107, United States</span>
                        </li>
                        <li>
                            {iconStyle   ? 
                                <i className="fa-solid fa-phone text-primary"></i>
                                :
                                <i className="fa-solid fa-phone"></i>
                            }
                            <span>394-091-3312</span>
                        </li>
                        <li>
                            {iconStyle   ? 
                                <i className="fa fa-envelope text-primary"></i> 
                                :
                                <i className="fa fa-envelope"></i> 
                            }
                            <span>support@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div> 
        </>
    );
};

export default FooterCommonData;
