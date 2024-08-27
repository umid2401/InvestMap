import React from 'react';
import {Link} from 'react-router-dom';
import PageBanner from '../layouts/PageBanner';
import CountUp from 'react-countup';
import TestimonialSlider from '../components/Home/TestimonialSlider';
import UpdateBlog from '../components/Home/UpdateBlog';
import bg from '../assets/images/banner/bnr3.jpg';
import large4 from '../assets/images/project/large/pic4.jpg';
import large5 from '../assets/images/project/large/pic5.jpg';
import large6 from '../assets/images/project/large/pic6.jpg';
import avat1 from '../assets/images/avatar/avatar1.jpg';
import avat2 from '../assets/images/avatar/avatar2.jpg';
import avat3 from '../assets/images/avatar/avatar3.jpg';


const ProjectStory = () => {
    function isScrolledIntoView(elem){
        const spliBox = document.querySelectorAll(elem);        
        spliBox.forEach(myFunction);
        function myFunction(item, index) {
            console.log('splitbox',item);
            const docViewTop = window.scrollY;
            const docViewBottom = docViewTop + window.innerHeight;
            let elemTop = item.getBoundingClientRect().top + docViewTop;
            const elemBottom = elemTop + item.offsetHeight;
            if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){                
                item.classList.add('split-active');
            }
        }
         
    }
    window.addEventListener("scroll", () => {
        isScrolledIntoView('.split-box');
    }); 
    return (
        <>
            <div className="page-content bg-white">
                <PageBanner maintitle="Project" pagetitle="Success Project Story" background={bg}/>
                <section className="content-inner-2">
                    <div className="container">						
                        <div className="row align-items-center project-bx left m-b50">
                            <div className="col-lg-6 col-md-12 m-b30">
                                <div className="dz-media split-box">
                                    <div>
                                        <img src={large4} alt="" className="app-1"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 m-b30">
                                <h3 className="m-b20">Samcung Okulus Rivt PC - Powered VR  Gaming Headset</h3>
                                <p className="m-b0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit au</p>
                                <div className="fund-count m-t20 m-b25">
                                    <h2 className="text-primary">$ {" "}
                                        <span className="counter">
                                            <CountUp 
                                                end="24553852.24" 
                                                separator=","
                                                decimals= "2"
                                            /> 
                                        </span>
                                    </h2>
                                    <h6>Total funded</h6>
                                </div>
                                <div className="author-wrappper">
                                    <div className="author-media">
                                        <img src={avat1} alt="" /> 
                                    </div>
                                    <div className="author-content">
                                        <div className="author-head">
                                            <h6 className="author-name">Hendric Anderson</h6>
                                            <ul className="rating-list">
                                                <li><i className="fa fa-star"></i></li>
                                                {" "}<li><i className="fa fa-star"></i></li>
                                                {" "}<li><i className="fa fa-star"></i></li>
                                                {" "}<li><i className="fa fa-star gray-light"></i></li>
                                                {" "}<li><i className="fa fa-star gray-light"></i></li>
                                            </ul>
                                        </div>
                                        <ul className="author-meta">
                                            <li className="campaign">12 Campaign</li>
                                            <li className="location">New York, London</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>	
                        <div className="row align-items-center project-bx right m-b50">
                            <div className="col-lg-6 col-md-12 m-b30">
                                <h3 className="m-b20">Super Bass Headset by Beast Monster Technology Development</h3>
                                <p className="m-b0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit au</p>
                                <div className="fund-count m-t20 m-b25">
                                    <h2 className="text-primary">$ {" "}
                                        <span className="counter">
                                            <CountUp 
                                                end="9425552.43" 
                                                separator=","
                                                decimals= "2"
                                            /> 
                                        </span>
                                    </h2>
                                    <h6>Total funded</h6>
                                </div>
                                <div className="author-wrappper">
                                    <div className="author-media">
                                        <div>
                                            <img src={avat2} alt="" /> 
                                        </div>    
                                    </div>
                                    <div className="author-content">
                                        <div className="author-head">
                                            <Link to={"#"}><h6 className="author-name">Bella Simalungun</h6></Link>
                                            <ul className="rating-list">
                                                <li><i className="fa fa-star"></i></li>
                                                {" "}<li><i className="fa fa-star"></i></li>
                                                {" "}<li><i className="fa fa-star"></i></li>
                                                {" "}<li><i className="fa fa-star gray-light"></i></li>
                                                {" "}<li><i className="fa fa-star gray-light"></i></li>
                                            </ul>
                                        </div>
                                        <ul className="author-meta">
                                            <li className="campaign">12 Campaign</li>
                                            <li className="location">New York, London</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 m-b30">
                                <div className="dz-media split-box">
                                    <img src={large5} alt="" className="app-1" />
                                </div>
                            </div>
                        </div>	
                        <div className="row align-items-center project-bx left">
                            <div className="col-lg-6 col-md-12 m-b30">
                                <div className="dz-media split-box">
                                   <div>
                                        <img src={large6} alt="" className="app-1" />
                                   </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 m-b30">
                                <h3 className="m-b20">Mega Drone Stabilizier </h3>
                                <p className="m-b0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit au</p>
                                <div className="fund-count m-t20 m-b25">
                                    <h2 className="text-primary">$ {" "}
                                        <span className="counter">
                                            <CountUp 
                                                end="79412552.90" 
                                                separator=","
                                                decimals= "2"
                                            />    
                                        </span>
                                    </h2>
                                    <h6>Total funded</h6>
                                </div>
                                <div className="author-wrappper">
                                    <div className="author-media">
                                        <img src={avat3} alt="" /> 
                                    </div>
                                    <div className="author-content">
                                        <div className="author-head">
                                            <h6 className="author-name">Dedi Cahyadi</h6>
                                            <ul className="rating-list">
                                                <li><i className="fa fa-star"></i></li>
                                                {" "}<li><i className="fa fa-star"></i></li>
                                                {" "}<li><i className="fa fa-star"></i></li>
                                                {" "}<li><i className="fa fa-star gray-light"></i></li>
                                                {" "}<li><i className="fa fa-star gray-light"></i></li>
                                            </ul>
                                        </div>
                                        <ul className="author-meta">
                                            <li className="campaign">12 Campaign</li>
                                            <li className="location">New York, London</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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

export default ProjectStory;