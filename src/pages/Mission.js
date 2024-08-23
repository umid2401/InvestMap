import React from 'react';
import {Link} from 'react-router-dom';

import Pagebanner from '../layouts/PageBanner';
import CategoriesIcon from '../components/CategoriesIcon';

//images
import bg from '../assets/images/banner/bnr4.jpg';
import shape2 from '../assets/images/pattern/shape2.png';
import shape3 from '../assets/images/pattern/shape3.png';
import shape5 from '../assets/images/pattern/shape5.png';
import shape1 from '../assets/images/pattern/shape1.png';
import shape6 from '../assets/images/pattern/shape6.png';
import large1 from '../assets/images/project/large/pic1.jpg';
import large2 from '../assets/images/project/large/pic2.jpg';
import large3 from '../assets/images/project/large/pic3.jpg';
import sign from '../assets/images/about/signature.png';


import OurMission from '../components/OurMission';
import UpdateBlog from '../components/Home/UpdateBlog';

const Mission = () => {

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
                <Pagebanner pagetitle="Mission" maintitle="Home"  background={bg}/>
                <section className="content-inner">
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
                <section className="content-inner-2 bg-light section-pattren1">
                    <div className="container">
                        <div className="row about-bx3 align-items-center">
                            <OurMission />
                        </div>
                    </div>
                    <img src={shape2} className="shape-6 move-2" alt="shape"/>
                    <img src={shape3} className="shape-5 move-1" alt="shape"/>
                    <img src={shape5} className="shape-1 rotating" alt="shape"/>
                    <img src={shape1} className="shape-3 move-1" alt="shape"/>
                    <img src={shape6} className="shape-4 rotating" alt="shape"/>
                    <img src={shape6} className="shape-2 rotating" alt="shape"/>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="row align-items-center project-bx left m-b30">
                            <div className="col-lg-6 col-md-12">	
                                <div className="dz-media split-box">
                                    <div>
                                        <img src={large1} alt="" className="app-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="dz-content">
                                    <h2 className="title m-b15">Our Mission</h2>
                                    <p className="m-b0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit au</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner bg-light section-pattren1">
                    <div className="container">
                        <div className="row align-items-center project-bx right">
                            <div className="col-lg-6 col-md-12 m-b30">
                                <div className="dz-content">
                                    <h2 className="title m-b15">Our Vision</h2>
                                    <p className="m-b0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit au</p>
                                    <Link to={"/project-story"} className="btn btn-primary m-t30">View More <i className="fa-solid fa-angle-right ms-2"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 m-b30">	
                                <div className="dz-media split-box">
                                    <div>
                                        <img src={large2} alt="" className="app-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={shape1} className="shape-1 move-1" alt="shape" />
                    <img src={shape2} className="shape-2 move-2" alt="shape" />
                    <img src={shape3} className="shape-3 move-1" alt="shape" />
                    <img src={shape5} className="shape-4 rotating" alt="shape"/>
                    <img src={shape6} className="shape-5 rotating" alt="shape"/>
                    <img src={shape6} className="shape-6 rotating" alt="shape"/>
                </section>
                
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row align-items-center project-bx left m-b30">
                            <div className="col-lg-6 col-md-12">	
                                <div className="dz-media split-box">
                                    <div>
                                        <img src={large3} alt="" className="app-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="dz-content">
                                    <h2 className="title m-b15">The Goal</h2>
                                    <p className="m-b0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit au</p>
                                    <div className="signature m-t30">
                                        <img src={sign} alt="image" />
                                        <p className="text-dark m-t20 mb-0">William Durant</p>
                                    </div>
                                </div>
                            </div>
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


export default Mission;