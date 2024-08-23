import React,{useState,useContext, useEffect,} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import CountUp from 'react-countup'
import {Modal} from 'react-bootstrap';


//images
import bg from "../assets/images/background/bg2.jpg";
import slide2 from '../assets/images/side-images/pic2.png';
import bg10 from '../assets/images/background/bg10.png';
import sideimage from '../assets/images/side-images/pic1.png';
import shape3 from '../assets/images/side-images/shape3.png';
import bgimage10 from '../assets/images/background/bg10.jpg';
import map from '../assets/images/map.png';
import shape1 from '../assets/images/side-images/shape1.png';
import line1 from '../assets/images/side-images/shape-line1.png';
import shape2 from '../assets/images/side-images/shape2.png';
import line2 from '../assets/images/side-images/shape-line2.png';
import shape5 from '../assets/images/pattern/shape5.png';
import shape6 from '../assets/images/pattern/shape6.png';
import bnrgrid from '../assets/images/blog/blog-grid-2/pic1.jpg';
import grid1 from '../assets/images/blog/blog-grid/pic1.jpg';
import grid2 from '../assets/images/blog/blog-grid/pic2.jpg';

//Layouts
import { ThemeContext } from "../context/ThemeContext";
import Header2 from '../layouts/Header2';
import Footer2 from './../layouts/Footer2';
import { IMAGES } from '../constant/theme';
//componenet
import Mainslider2 from '../components/Home2/Mainslider2';
import ServiceBlog from '../components/Home2/ServiceBlog';
import {ThreeStepBlog} from '../components/Home2/ServiceBlog';
import TrendingSlider from '../components/Home2/TrendingSlider';
import SuccessSlider from '../components/Home2/SuccessSlider';
import PartnershipSlider from './../components/Home/PartnershipSlider';
import FooterTop from './../components/Home2/FooterTop';



const priceBlog = [
    {price:"10"},
    {price:"25"},
    {price:"50"},
    {price:"100"},
];

const griddataBlog = [
    {image:grid1},
    {image:grid2}
];

const Home2 = () => {
    const { changeBackground, changePrimaryColor } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "data-typography-1", label: "data-typography-1" });
		changePrimaryColor("color-skin-2");
	}, []);

    const [donateValue, setDonateValue] = useState(priceBlog[0].price);
    function changeValue(price){
        setDonateValue(price);
    }
    const nav = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        nav("/contact-us");
    };

    // const [modalDonate, setModalDonate] = useState(false);
    
    const [readModal, setReadModal] = useState(false);
    return (
        <>
            <Header2  logoStyle={IMAGES.logo2}/>
            <div className="page-content bg-white">	
                <div className="main-bnr-one">
                    <Mainslider2 />
                </div>
                <section className="content-inner section-wrapper4">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 ">
                                <div className="donate-form form-wrapper" style={{backgroundImage:"url("+ bg + ")"}}>
                                    <div className="donate-info">
                                        <h2 className="title m-b20">Donate Today</h2>
                                        <p>Charity law within the UK varies among England and Wales, Scotland and Northern Ireland, but the fundamental principles are the same</p>
                                    </div>
                                    <div className="form-content">
                                        <form className="dzForm" method="POST">
                                            <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                            <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                            <div className="dzFormMsg"></div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input type="text" name="dzOther[Other_Amount]" className="form-control donate-input" value={donateValue} required placeholder="Other Amount (USD)" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="tag-donate style-3">
                                                        {priceBlog.map((data, ind)=>(
                                                            <div className="donate-categories" key={ind}>
                                                                <div className="form-check">
                                                                    <input defaultChecked={data.price == donateValue ? true : false} className="form-check-input donate-fill" 
                                                                        type="radio" name="flexRadioDefault" id={`flexRadioDefault1d${ind+5}`}  
                                                                    />
                                                                    <label className="form-check-label" htmlFor={`flexRadioDefault1d${ind+5}`} onClick={()=>changeValue(data.price)}>${data.price}</label>
                                                                </div>
                                                            </div>
                                                        ))}                                                       
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <button name="submit" type="submit" value="Submit" className="btn btn-dark">Donate Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 m-b30">
                                <div className="section-inner">
                                    <div className="section-head m-b30">
                                        <h5 className="sub-title">About Us</h5>
                                        <h2 className="title">Help is<br/> Our Main Goal</h2>
                                    </div>
                                    <div className="row m-b30">
                                        <div className="col-xl-7">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it.</p>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        </div>
                                        <div className="col-xl-5">
                                            <div className="counter-text-wrapper">
                                                <div className="counter-text m-b30">
                                                    <h4>Donation Raised</h4>
                                                    <div className="counter-num text-primary">
                                                        $<span className="counter">
                                                            <CountUp end="55000" separator=','/>
                                                        </span> 
                                                    </div>
                                                </div>
                                                <div className="counter-text">
                                                    <h4>Donation Goal</h4>
                                                    <div className="counter-num text-primary">
                                                        $<span className="counter">
                                                            <CountUp end="25000" separator=','/>    
                                                        </span> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={"/about-us"} className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="img-1" src={slide2} alt="images" />
                </section>
                <section className="clearfix">
                    <div className="container-fluid">
                        <div className="content-inner bg-gray" style={{backgroundImage:"url("+ bg10 +")" ,backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                            <div className="container">
                                <div className="section-head text-center wow fadeInUp" data-wow-delay="0.2s">
                                    <h5 className="sub-title">Services</h5>
                                    <h2 className="title">Why Akcel</h2>
                                </div>
                                <div className="row justify-content-center">
                                    <ServiceBlog />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-1 section-wrapper3">
                    <div className="container">
                        <div className="section-head text-center">
                            <h6 className="sub-title">START YOUR FUNDRAISER</h6>
                            <h2 className="title">Start A Fundraiser In Three<br/> Simple Steps</h2>
                        </div>
                        <div className="row justify-content-center">
                            <ThreeStepBlog />
                        </div>
                        <div className="text-center btn-bottom wow fadeInUp" data-wow-delay="0.8s">
                            <Link to={"/browse-fundraiser"} className="btn btn-primary">Start your fundraiser</Link>
                        </div>
                        <img src={sideimage} alt="images" className="img-1" />
			            <img src={shape3} alt="images" className="img-2" />
                    </div>
                </section>
                <section className="clearfix section-wrapper7">
                    <div className="container-fluid">
                        <div className="content-inner bg-gray section-inner" style={{backgroundImage:"url("+ bg10 + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                            <div className="section-head text-center">
                                <h5 className="sub-title">LATEST CAUSES</h5>
                                <h2>Trending Fundraisers</h2>
                            </div>
                            <TrendingSlider />
                            <div className="text-center m-t30 m-b30 wow fadeInUp" data-wow-delay="1.0s">
                                <Link to={"/browse-fundraiser"} className="btn btn-primary" >View All Causes</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner testimonial-wrapper2" style={{backgroundImage:"url("+ bgimage10 +")",  backgroundPosition: "center"}}>
                    <div className="container">
                        <div className="section-head text-center wow fadeInUp" data-wow-delay="0.8s">
                            <h5 className="sub-title">What people are saying</h5>
                            <h2 className="title">Success Stories</h2>
                        </div>
                    </div>
                    <div className="min-container position-relative">
                        <SuccessSlider openReadModal={setReadModal}/>
                    </div>
                    <div className="container text-center m-t30">
                        <Link to={"/fundraiser-detail"} className="btn btn-secondary m-r15 m-b15">Start A Fundraiser For Free</Link>
                        <Link to={"/contact-us"} className="btn btn-dark m-b15">Talk To Us</Link>
                    </div>
                </section>
                <div className="content-inner-3 section-wrapper7">
                    <div className="container">
                        <div className="map-wrapper">
                            <img src={map} className="main-img" alt=""/>
                            <ul>
                                <li className="icon-dropdown">
                                    <div className="right"><p>It is 30% poor in the country</p><Link to={"#"} className="btn-link" data-bs-toggle="modal" data-bs-target="#modalDonate">Donate Now</Link></div>
                                </li>
                                <li className="icon-dropdown">
                                    <div className="right"><p>It is 50% poor in the country</p><Link to={"#"} className="btn-link" data-bs-toggle="modal" data-bs-target="#modalDonate">Donate Now</Link></div>
                                </li>
                                <li className="icon-dropdown">
                                    <div className="left"><p>It is 25% poor in the country</p><Link to={"#"} className="btn-link" data-bs-toggle="modal" data-bs-target="#modalDonate">Donate Now</Link></div>
                                </li>
                            </ul>
                        </div>
                        <div className="counter-wrapper-2">
                            <div className="counter-inner">
                                <div className="row">
                                    <div className="col-sm-4 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="counter-style-2">
                                            <span className="counter counter-num text-primary">
                                                <CountUp end="1854" />
                                            </span>
                                            <p className="counter-text">Completed Projects</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="counter-style-2">
                                            <span className="counter-num text-primary">
                                                <span className="counter">
                                                    <CountUp end="35" />
                                                </span> +
                                            </span>
                                            <p className="counter-text">Countries Served</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="counter-style-2">
                                            <span className="counter-num text-primary">
                                                <span className="counter">
                                                    <CountUp end="29" />
                                                </span> M
                                            </span>
                                            <p className="counter-text">People With Clean Water</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={shape1} alt="image" className="shape1" />
                    <img src={line1} alt="image" className="shape2" />
                    <img src={shape2} alt="image" className="shape3" />
                    <img src={line2} alt="image" className="shape4" />
                    <img src={shape5} alt="image" className="shape5" />
                    <img src={shape6} alt="image" className="shape6" />
                    <img src={shape5} alt="image" className="shape7" />
                </div>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-12">
                                <div className="section-head wow fadeInUp" data-wow-delay="0.2s">
                                    <h5 className="sub-title">FROM OUR BLOG</h5>
                                    <h2 className="title">Recent News & Updates</h2>
                                </div>
                                {griddataBlog.map((item, ind)=>(
                                    <div className="dz-card style-6 blog-half">
                                        <div className="dz-media">
                                            <Link to={"/blog-details"}><img src={item.image} alt=""/></Link>
                                            <ul className="dz-badge-list">
                                                <li><Link to={"#"} className="dz-badge">14 Fan 2022</Link></li>
                                            </ul>
                                            <Link to={"/blog-details"} className="btn btn-secondary">Read More</Link>
                                        </div>
                                        <div className="dz-info">
                                            <h4 className="dz-title"><Link to={"/blog-details"}>Start a fundraiser for yourself in World</Link></h4>
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="dz-user">
                                                        <i className="fa-solid fa-user"></i>
                                                        By <span>KK Sharma</span>
                                                    </li>
                                                    <li className="dz-date">
                                                        <i className="fa-solid fa-message"></i>
                                                        24 Comments
                                                    </li>
                                                </ul>
                                            </div> 
                                            <p>Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata.</p>
                                        </div>
                                    </div>
                                ))}                                
                            </div>
                            <div className="col-xl-5 col-lg-12 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="dz-card style-7" style={{backgroundImage: "url("+ bnrgrid +")"}}>
                                    <div className="dz-category">
                                        <ul className="dz-badge-list">
                                            <li><Link to={"#"} className="dz-badge">14 Fan 2022</Link></li>
                                        </ul>
                                    </div>
                                    <div className="dz-info">
                                        <h2 className="dz-title"><Link to={"/blog-details"} className="text-white">Directly support individuals Charity</Link></h2>
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="dz-user">
                                                    <i className="fa-solid fa-user"></i>
                                                    By <span>KK Sharma</span>
                                                </li>
                                                <li className="dz-date">
                                                    <i className="fa-solid fa-message"></i>
                                                    24 Comments
                                                </li>
                                            </ul>
                                        </div>
                                    </div>							
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="clients-wrapper">
			        <div className="container">
                        <PartnershipSlider />
                    </div>
                </div>
                <div className="footer-feature-wrapper">
                    <div className="container">
                        <FooterTop />
                    </div>
                </div>
            </div>
           <Footer2 />
            <Modal className="modal fade modal-wrapper" id="read" centered show={readModal} onHide={setReadModal}> 
                <div className="modal-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>                
            </Modal>
            
        </>
    );
};

export default Home2;