import React from 'react';
import {Link} from 'react-router-dom';

import PageBanner from '../layouts/PageBanner';
import BlogSidebar from '../components/BlogSidebar';

import bg from '../assets/images/banner/bnr5.jpg';
import pic4 from '../assets/images/blog/blog-grid/pic4.jpg';
import pic3 from '../assets/images/blog/blog-grid/pic3.jpg';
import pic2 from '../assets/images/blog/blog-grid/pic2.jpg';
import pic1 from '../assets/images/blog/blog-grid/pic1.jpg';
import pic5 from '../assets/images/blog/blog-grid/pic5.jpg';
//import avat1 from '../assets/images/avatar/avatar1.jpg';
//import avat2 from '../assets/images/avatar/avatar2.jpg';
//import avat3 from '../assets/images/avatar/avatar3.jpg';
//import avat4 from '../assets/images/avatar/avatar4.jpg';
//import avat5 from '../assets/images/avatar/avatar5.jpg';


import UpdateBlog from '../components/Home/UpdateBlog';
import { IMAGES } from '../constant/theme';

const cardBlog = [
    {image1: pic4, image2: IMAGES.Avatar1, tage:"HEALTH",title:"Partnering to create a community", autor:"Hawkins Junior"},
    {image1: pic3, image2: IMAGES.Avatar2, tage:"TECHNOLOGY",title:"4 Things parents learned for they jids in 2020", autor:"Richard Hartisona"},
    {image1: pic2, image2: IMAGES.Avatar3, tage:"EDUCATION",title:"He Created the Web. Now He’s Out to Remake", autor:"Tom wilson"},
    {image1: pic1, image2: IMAGES.Avatar4, tage:"FASHION",title:"New vaccine for cattle calf loss learned", autor:"Adam Jordon"},
    {image1: pic5, image2: IMAGES.Avatar5, tage:"DESIGN",title:"Partnering to create a community", autor:"Kaylynn Donin"},
];

const BlogList = () => {
    return (
        <>
            <div className="page-content bg-white">
                <PageBanner maintitle="Blog" pagetitle="Blog List" background={bg}/>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 m-b40">
                                <div className="col-12 m-b30">
                                    {cardBlog.map((item, index)=>(
                                        <div className="dz-card style-1 blog-half" key={index}>
                                            <div className="dz-media">
                                                <Link to={"/blog-details"}><img src={item.image1} alt="" /></Link>
                                                <ul className="dz-badge-list">
                                                    <li><Link to={"#"} className="dz-badge">{item.tage}</Link></li>
                                                </ul>
                                                <Link to={"/blog-details"} className="btn btn-secondary">Read More</Link>
                                            </div>
                                            <div className="dz-info">
                                                <h5 className="dz-title"><Link to={"/blog-details"}>{item.title}</Link></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.</p>
                                                
                                                <div className="author-wrappper">
                                                    <div className="author-media">
                                                        <img src={item.image2} alt="" /> 
                                                    </div>
                                                    <div className="author-content">
                                                        <div className="author-head">
                                                            <h6 className="author-name">{item.autor}</h6>
                                                        </div>
                                                        <ul className="author-meta">
                                                            <li className="date">November 21th, 2022</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="row">		
                                    <div className="col-12 m-sm-t0 m-t30 m-b15">		
                                        <nav  className="pagination-bx">
                                            <div className="page-item">
                                                <Link to={"#"} className="page-link prev"><i className="fas fa-chevron-left"></i></Link>
                                            </div>
                                            <ul className="pagination">
                                                <li className="page-item"><Link to={"#"} className="page-link">1</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link active">2</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link">4</Link></li>
                                            </ul>
                                            <div className="page-item">
                                                <Link to={"#"} className="page-link next"><i className="fas fa-chevron-right"></i></Link>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>     
                            <div className="col-xl-4 col-lg-4">
                                <BlogSidebar />   
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

export default BlogList;