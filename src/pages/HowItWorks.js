import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
//layouts
import { Accordion } from 'react-bootstrap';
import PageBanner from '../layouts/PageBanner';

//images
import bg from '../assets/images/banner/bnr3.jpg';
import project from '../assets/images/project/pic3.jpg';
import slide from '../assets/images/main-slider/pic2.png';
import shape1 from './../assets/images/pattern/shape1.png';
import shape2 from './../assets/images/pattern/shape2.png';
import shape3 from './../assets/images/pattern/shape3.png';
import shape5 from './../assets/images/pattern/shape5.png';
import shape6 from './../assets/images/pattern/shape6.png';
import TestimonialSlider from '../components/Home/TestimonialSlider';
import UpdateBlog from '../components/Home/UpdateBlog';
import CategoriesIcon from '../components/CategoriesIcon';

const accordBlog = [
    {title:"Cras turpis felis, elementum sed mi at arcu ?"},
    {title:"Vestibulum nibh risus, in neque eleifendulputate ?"},
    {title:"Donec maximus, sapien id auctor ornare ?"},
];

const HowItWorks = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("#");
    }
    return (
        <>
            <div className="page-content bg-white">
                <PageBanner maintitle="Home" pagetitle="How It Works" background={bg} />    
                <section className="content-inner">
                    <div className="container">
                        <div className="row align-items-center flex-column-reverse flex-lg-row">
                            <div className="col-lg-6 align-self-center">
                                <div className="section-head m-b30">
                                    <h2 className="title">What Is Akcel ?</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <Accordion className="accordion dz-accordion accordion-sm" id="accordionFaq1">
                                    {accordBlog.map((item, index)=>(
                                        <Accordion.Item className="accordion-item" key={index} eventKey={index}>
                                            <Accordion.Header as="h2"  id="headingOne1">
                                                {item.title}
                                                <span className="toggle-close"></span>
                                            </Accordion.Header>
                                            <div id="collapseOne1" className="accordion-collapse " eventKey={index}>
                                                <Accordion.Body >
                                                    <p className="m-b0">Vestibulum nibh risus, lobortis in neque eleifend, varius vulputate sem. Donec maximus, sapien id auctor ornare, odio mi luctus massa, id rhoncus velit purus eu turpis onec aliquet mauris est.</p>
                                                </Accordion.Body>
                                            </div>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 m-b30">
                                <div className="dz-media split-box rounded">
                                    <img src={project} alt="FAQ Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-2 section-wrapper6 bg-light section-pattren1">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-5 about-bx3">
                                <div className="dz-media">
                                    <img src={slide} alt="image" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="form-wrapper style-2">
                                    <h2 className="title">We know you are in urgent need of funds.</h2>
                                    <div className="contact-area">
                                        <form className="dz-form dzForm contact-bx" onSubmit={(e)=>handleSubmit(e)}>
                                            <div className="dzFormMsg"></div>
                                            <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                            <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                            
                                            <div className="row sp15">
                                                <div className="col-md-12">
                                                    <label className="form-label">Full Name</label>
                                                    <div className="input-group">
                                                        <input name="dzName" required type="text" className="form-control" placeholder="Marchelo Queque" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Email address</label>
                                                    <div className="input-group">
                                                        <input name="dzEmail" required type="text" className="form-control" placeholder="example@gmail.com" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Phone Number</label>
                                                    <div className="input-group">
                                                        <input name="dzPhoneNumber" required type="text" className="form-control" placeholder="832141251" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Company Name</label>
                                                    <div className="input-group">
                                                        <input name="dzOther[company_Name]" required type="text" className="form-control" placeholder="Marchelo Studios" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Message</label>
                                                    <div className="input-group">
                                                        <textarea name="dzMessage" rows="5" required className="form-control" placeholder="Dear Sir/Madam"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button name="submit" type="submit" value="Submit" className="btn btn-secondary effect ">SEND</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={shape1} className="shape-1 move-1" alt="shape"/>
                    <img src={shape2} className="shape-2 move-2" alt="shape"/>
                    <img src={shape3} className="shape-3 move-1" alt="shape"/>
                    <img src={shape5} className="shape-4 rotating" alt="shape"/>
                    <img src={shape6} className="shape-5 rotating" alt="shape"/>
                    <img src={shape6} className="shape-6 rotating" alt="shape"/>
                </section>
                <section className="content-inner-2">

                    <div className="container">
                        <div className="section-head text-center">
                            <h5 className="sub-title">CATEGORIES</h5>
                            <h2 className="title">Explore Our Crowdfunding <br/> Featured Categories</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className="row">
                            <CategoriesIcon />     
                        </div>
                    </div>
                </section>
                <section className="testimonial-wrapper1 content-inner-2">
                    <div className="section-head text-center">
                        <h2 className="title">Testimonials</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <TestimonialSlider />
                </section>
                <div className="call-action style-1 content-inner-1">
                    <div className="container">
                        <UpdateBlog />
                    </div>
                </div>
            </div>            
        </>
    );
};


export default HowItWorks;