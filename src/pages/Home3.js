import React,{useState,useContext, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css';

//componenet
import MainSliderIndex3 from '../components/Home3/MainSliderIndex3';
import TrendingSlider2 from '../components/Home3/TrendingSlider2';
import AkcelServices from '../components/Home3/AkcelServices';
import SuccessStoriesSlider from '../components/Home3/SuccessStoriesSlider';
import LatestNewSlider from '../components/Home3/LatestNewSlider';
import PartnershipSlider from '../components/Home/PartnershipSlider';

//layouts
import Header2 from '../layouts/Header2';
import Footer3 from '../layouts/Footer3';
import { ThemeContext } from "../context/ThemeContext";
import { IMAGES } from '../constant/theme';

const counterBlog = [
    {title: "Completed Projects", number:"1854", },
    {title: "Countries Served", number:"35", symbal:"+"},
    {title: "People With Clean Water", number:"29", symbal:"M"},
    {title: "People With Clean Tank", number:"41", symbal:"M"}
];

const Home3 = () => {    
    const { changeBackground, changePrimaryColor } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "data-typography-2", label: "data-typography-2" });
		changePrimaryColor("color-skin-3");
	}, []);
    const [readModal,setReadModal] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const nav = useNavigate();
    const FormSubmit = (e) => {
        e.preventDefault();
        nav("/contact-us");
    };
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
                <Header2   changeStyle="header-transparent" changeLogo={true}/>              
                <div className="page-content bg-white">	
                    <div className="main-bnr-two">
                        <MainSliderIndex3  />
                    </div>     
                    <section class="content-inner-1 section-wrapper1">
                        <div class="container">
                            <div class="row section-head align-items-center">
                                <div class="col-lg-8 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
                                    <h5 class="sub-title">LATEST CAUSES</h5>
                                    <h2>Trending Fundraisers</h2>
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
                    <section className="content-inner">
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
                    </section>
                    
                    <section className="section-wrapper2 content-inner-2 overlay-black-middle background-luminosity bg-dark" 
                        style={{backgroundImage:"url("+ IMAGES.Background5 +")", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}
                    >
                        <div className="container">
                            <div className="section-head text-center wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="sub-title">Services</h5>
                                <h2 className="title text-white">Why Akcel</h2>
                            </div>
                                <AkcelServices />
                        </div>                     
                    </section>
                    
                    <section className="content-inner">
                        <div className="container">
                            <div className="row align-items-center content-bx style-2">
                                <div className="col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="dz-media video-bx4 rounded">
                                        <img src={IMAGES.ProjectPic13} alt="image"/>
                                        <Link to={"#"} className="popup-youtube vedio-btn" onClick={()=> setOpen(true)} ><i className="fa-solid fa-play" ></i></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="inner-content">
                                        <div className="section-head">
                                            <h2 className="title">Save The<br/> Planet For Better Future</h2>
                                            <p className="max-w400">Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse.</p>
                                        </div>
                                        <Link to={"/project-story"} className="btn btn-primary">Project Story</Link>
                                    </div>
                                </div>
                            </div>
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
                    {/* Section-5  end*/}
                    {/* Section-6*/}
                    <section className="bg-primary form-wrapper1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="section-head">
                                        <h5 className="sub-title text-white">JOIN US</h5>
                                        <h2 className="title text-white">We Need Your Help</h2>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <form className="dzForm" onSubmit={(e)=>FormSubmit(e)}>
                                        <div className="dzFormMsg"></div>
                                        <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                        <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                        
                                        <div className="row g-4">
                                            <div className="col-md-4 col-sm-6">
                                                <input name="dzFirstName" required="" type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <input name="dzLastName" required="" type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <input name="dzEmail" required="" type="text" className="form-control" placeholder="Email Address" />
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <input name="dzPhoneNumber" required="" type="text" className="form-control" placeholder="Phone Number" />
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <input name="dzMessage" required="" type="text" className="form-control" placeholder="Your Message" />
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <button name="submit" type="submit" value="Submit" className="btn btn-dark btn-block h-100">Submit Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Section-6  end*/}
                    {/* Section-7 */}
                    <section className="content-inner">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="section-head">
                                        <h2 className="title">Latest News Feed</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 m-b30 text-end d-none d-lg-block wow fadeInUp" data-wow-delay="0.4s">
                                    <Link to={"/blog-grid"} className="btn btn-primary">All Blogs</Link>
                                </div>
                            </div>
                        </div>
                        <div className="container position-relative">
                            <LatestNewSlider />
                        </div>
                    </section>
                    {/* Section-7  end*/}
                    <hr class="container" />
                    {/* Section-8 */}
                    <section class="content-inner-3">
                        <div class="container">
                            <div class="section-head text-center m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                <h2 class="title text-capitalize">Donate to charity projects <br />around the world</h2>
                            </div>	
                            <div class="text-center wow fadeInUp" data-wow-delay="0.4s">	
                                <Link to={"/become-a-fundraiser"} class="btn btn-primary">View All Feed</Link>
                            </div>	
                        </div>
                    </section>
                    {/* Section-8  end*/}
                    <div class="clients-wrapper">
                        <div class="container">
                            <PartnershipSlider />
                        </div>
                    </div>
                </div>
                <Footer3 />
                <Modal className="modal fade modal-wrapper" id="read" centered show={readModal} onHide={setReadModal}> 
                    <div className="modal-body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </Modal>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="bdBG5VO01e0" onClose={() => setOpen(false)} />
                {/* <Link to={"#"} className={classChange} onClick={()=> setOpen(true)} ><i className="fa-solid fa-play" ></i></Link> */}
                {/* <DonateModal /> */}
            </div>
        </>
    );
};

export default Home3;