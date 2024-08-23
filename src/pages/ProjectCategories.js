import React from 'react';
import {Link} from 'react-router-dom';
import PageBanner from '../layouts/PageBanner';

import bg from '../assets/images/banner/bnr1.jpg';
import RecentProjectsSlider from '../components/Home/RecentProjectsSlider';
import UpdateBlog from '../components/Home/UpdateBlog';

const cardiconBlog = [
    {title:"Technology", icon:"flaticon-vr-glasses"},
    {title:"Education", icon:"flaticon-open-book"},
    {title:"Videos", icon:"flaticon-video"},
    {title:"Medical", icon:"flaticon-doctor-bag"},
    {title:"Love", icon:"flaticon-like-1"},
    {title:"Design", icon:"flaticon-transformation"},
    {title:"Health", icon:"flaticon-raw-food"},
    {title:"Sports", icon:"flaticon-coins-1"},
    {title:"Care", icon:"flaticon-responsibility"},
    {title:"Support", icon:"flaticon-handshake"},
    {title:"Fashion", icon:"flaticon-coin-stack"},
    {title:"Events", icon:"flaticon-calendar"},
];

const ProjectCategories = () => {
    return (
        <>
            <div className="page-content bg-white">
                <PageBanner maintitle="Project" pagetitle="Project Categories" background={bg}/>
                <div className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            {cardiconBlog.map((item, ind)=>(
                                <div className="col-xl-3 col-lg-4 col-sm-6" key={ind}>
                                    <div className="icon-bx-wraper style-1 m-b30">
                                        <div className="icon-lg m-b30"> 
                                            <Link to={"/project-categories"} className="icon-cell">
                                                <i className={item.icon}></i>
                                            </Link> 
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dz-tilte text-capitalize"><Link to={"/project-categories"}>{item.title}</Link></h5>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>    
                </div> 
                <section className="content-inner-2 overflow-hidden">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2>Recent Projects</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <RecentProjectsSlider />
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


export default ProjectCategories;