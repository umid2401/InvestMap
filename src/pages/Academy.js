import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
// import {Accordion, Modal} from 'react-bootstrap';
import CountUp from 'react-countup';
// import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css';

//componenet
import MainSliderIndex3 from '../components/Home3/MainSliderIndex3';
import TrendingSlider2 from '../components/Home3/TrendingSlider2';
import AkcelServices from '../components/Home3/AkcelServices';
import SuccessStoriesSlider from '../components/Home3/SuccessStoriesSlider';

//layouts


import { IMAGES } from '../constant/theme';
import FaqComponent from '../components/FaqComponent';
import ContactComponent from '../components/ContactComponent';

const counterBlog = [
    {title: "Completed Projects", number:"1854", },
    {title: "Countries Served", number:"35", symbal:"+"},
    {title: "People With Clean Water", number:"29", symbal:"M"},
    {title: "People With Clean Tank", number:"41", symbal:"M"}
];

const Home3 = () => {    
   
    const [readModal,setReadModal] = useState(false);
    const [isOpen, setOpen] = useState(false);
    // const nav = useNavigate();
    // const FormSubmit = (e) => {
    //     e.preventDefault();
    //     nav("/contact-us");
    // };
    return (
        <>
            <div className="page-wraper page-wraper-sidebar">
                <div className="page-sidebar">
                    <ul className="dz-social">
                        <li><a href="https://www.facebook.com/" target={'_blank'}>Facebook</a></li>
                        <li><a href="https://twitter.com/" target={'_blank'}>Twitter</a></li>
                        <li><a href="https://www.linkedin.com/" target={'_blank'}>Linkedin</a></li>
                    </ul>
                    <Link to={"#"} className="btn-bottom btn btn-primary light" data-bs-toggle="modal" data-bs-target="#modalDonate">Donate Now</Link>
                </div>  
                <div className="page-content bg-white">	
                    <div className="main-bnr-two">
                        <MainSliderIndex3  />
                    </div>     
                    <section class="content-inner-1 section-wrapper1">
                        <div class="container">
                            <div class="row section-head align-items-center">
                                <div class="col-lg-8 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
                                    <h5 class="sub-title">LATEST CAUSES</h5>
                                    <h2>Courses</h2>
                                </div>
                                <div class="col-lg-4 col-md-12 text-end d-none d-lg-block wow fadeInUp" data-wow-delay="0.4s">
                                    <Link to={"/browse-fundraiser"} class="btn btn-primary">View All Causes</Link>
                                </div>
                            </div>
                        </div>
                        <div class="resize-wrapper">
                            <TrendingSlider2 />
                        </div>
                    </section>           
                    {/* <section className="content-inner">
                        <div className="container">
                            <div className="row about-bx5 align-items-center">
                                <div className="col-lg-6 m-b30">
                                    <div className="dz-about-media">
                                        <div className="img-wrapper">
                                            <img src={IMAGES.AboutPic2} alt="" className="img1" />
                                            <Link to={"#"} className="popup-youtube video-btn" onClick={()=> setOpen(true)} ><i className="fa-solid fa-play" ></i></Link>
                                        </div>
                                        <img src={IMAGES.AboutPic3} alt=""  className="img2"  />
                                    </div>
                                </div>
                                <div className="col-lg-6 m-b30" >
                                    <div className="section-head">
                                        <h5 className="sub-title">About Us</h5>
                                        <h2>Help is <br/>Our Main Goal</h2>
                                    </div>
                                    <h4 className="font-weight-500 m-b10">We Need Your Help</h4>
                                    <p className="m-b20">Nunc vulputate urna ut erat posuere accumsan. Curabitur ut commodo mauris, ac volutpat dui. Nullam eget enim ut mi bibendum ultrices. Pellentesque non feugiat nisi. </p>
                                    <div className="dz-about-info">
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6">
                                                <ul className="list-check-3">
                                                    <li>Food Donate</li>
                                                    <li>Medical Care</li>
                                                    <li>Child Education</li>
                                                    <li>Children's Charities</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-sm-6">
                                                <ul className="list-check-3">
                                                    <li>Human Care</li>
                                                    <li>Pure Water</li>
                                                    <li>Medical Facilities</li>
                                                    <li>Pure Education</li>
                                                </ul>   
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={"/about-us"} className="btn btn-primary">About Us</Link>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    
                    <section className="section-wrapper2 content-inner-2 overlay-black-middle background-luminosity bg-dark" 
                        style={{backgroundImage:"url("+ IMAGES.Background5 +")", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}
                    >
                        <div className="container">
                            <div className="section-head text-center wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="sub-title">Services</h5>
                                <h2 className="title text-white">Advantage</h2>
                            </div>
                                <AkcelServices />
                        </div>                     
                    </section>
                    
                   

                    <section className="testimonial-wrapper3 content-inner" style={{backgroundImage:"url("+ IMAGES.Background10 +")", backgroundPosition: "center"}}>
                        <SuccessStoriesSlider setReadModal={setReadModal}/>
                        <div className="container">
                            <div className="row">
                                {counterBlog.map((item, ind)=>(
                                    <div className="col-lg-3 col-6 m-b30" key={ind}>
                                        <div className="counter-style-3 text-center text-white">
                                            <span className="counter counter-num text-primary">
                                                <CountUp end={item.number} /> {item.symbal}
                                            </span>
                                            <p className="counter-text m-b0">{item.title}</p>
                                        </div>
                                    </div>
                                ))}                            
                            </div>
                        </div>
                    </section>
                    
                  <FaqComponent/>
                  <ContactComponent/>
                    
                </div>
               
               
               
            </div>
        </>
    );
};

export default Home3;