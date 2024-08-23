import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


import bnr3 from './../assets/images/banner/bnr3.jpg';
import BgImage from './../assets/images/background/bg10.jpg';
import pattern1 from './../assets/images/counter/pattren1.png';
import pattern2 from './../assets/images/counter/pattren2.png';
import pattern3 from './../assets/images/counter/pattren3.png';
import pattern4 from './../assets/images/counter/pattren4.png';
import pattern5 from './../assets/images/counter/pattren5.png';
import pattern6 from './../assets/images/counter/pattren6.png';

//components
import OurMission from '../components/OurMission';
import CounterBlog from '../components/Home/CounterBlog';
import CategoriesIcon from '../components/CategoriesIcon';
import UpdateBlog from '../components/Home/UpdateBlog';



const BecomeVolunteer = () => {
    const nav = useNavigate();
    const FormSubmit = (e) => {
        e.preventDefault();
        nav("/contact-us");
    };
    return (
        <>
            <div className="page-content bg-white">
                <div className="dz-bnr-inr style-1 text-center overlay-primary-dark" style={{backgroundImage:"url(" + bnr3 + ")"}}>
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>Become A Volunteer</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                                    <li className="breadcrumb-item active">Become A Volunteer</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <section className="gradient-white" style={{backgroundImage:"url("+ BgImage +")", backgroundPosition: "center" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 col-md-9 col-sm-12">
                                <div className="form-wrapper style-3">
                                    <div className="contact-area">
                                        <form className="dz-form dzForm contact-bx" onClick={(e)=>FormSubmit(e)}>
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
                                                        <input name="dzEmail" required type="text" className="form-control" placeholder="marseloque@mail.com" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Phone Number</label>
                                                    <div className="input-group">
                                                        <input name="dzPhoneNumber" required type="text" className="form-control" placeholder="987 654 3210" />
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
                                                <div className="col-md-12 m-b20">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" for="flexCheckDefault">
                                                            Accept terms & conditions
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button name="submit" type="submit" value="Submit" className="btn btn-secondary effect">SEND</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row about-bx3 align-items-center">
                            <OurMission />
                        </div>
                    </div>
                </section>
                <div className="counter-wrapper-1">
                    <div className="container">
                        <div className="counter-inner bg-secondary">
                            <div className="row">
                                <CounterBlog />
                            </div>
                            <img src={pattern1} className="pattren1 move-2" alt="" />
                            <img src={pattern2} className="pattren2 move-2" alt="" />
                            <img src={pattern3} className="pattren3 move-2" alt="" />
                            <img src={pattern4} className="pattren4 move-2" alt="" />
                            <img src={pattern5} className="pattren5 move-2" alt="" />
                            <img src={pattern6} className="pattren6 move-2" alt="" />
                        </div>
                    </div>
                </div>
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
                <div className="call-action style-1 content-inner-1">
                    <div className="container">
                        <UpdateBlog /> 
                    </div>
                </div>
            </div>
        </>
    );
};



export default BecomeVolunteer;