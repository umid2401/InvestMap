import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import PageBanner from '../layouts/PageBanner';

//images
import bg from '../assets/images/banner/bnr4.jpg';
import grid2 from '../assets/images/blog/blog-grid/pic2.jpg';
import grid6 from '../assets/images/blog/blog-grid/pic6.jpg';

import pic4 from '../assets/images/blog/blog-grid/pic4.jpg';
import pic3 from '../assets/images/blog/blog-grid/pic3.jpg';
import pic2 from '../assets/images/blog/blog-grid/pic2.jpg';
import pic5 from '../assets/images/blog/blog-grid/pic5.jpg';
import pic6 from '../assets/images/blog/blog-grid/pic6.jpg';
import pic7 from '../assets/images/blog/blog-grid/pic7.jpg';
import pic8 from '../assets/images/blog/blog-grid/pic8.jpg';
import pic9 from '../assets/images/blog/blog-grid/pic9.jpg';
import pic1 from '../assets/images/blog/blog-grid/pic1.jpg';

import avat1 from '../assets/images/avatar/avatar1.jpg';
import avat2 from '../assets/images/avatar/avatar2.jpg';
import avat3 from '../assets/images/avatar/avatar3.jpg';
import avat4 from '../assets/images/avatar/avatar4.jpg';
import avat5 from '../assets/images/avatar/avatar5.jpg';
import avat6 from '../assets/images/avatar/avatar6.jpg';
import avat7 from '../assets/images/avatar/avatar7.jpg';
import avat8 from '../assets/images/avatar/avatar8.jpg';
import avat9 from '../assets/images/avatar/avatar9.jpg';



export const cardDetials = [
    {title:"New vaccine for cattle calf loss learned", image:pic4, image2:avat1, tage:"HEALTH", autor:"Hawkins Junior"},
    {title:"4 Things parents learned for they jids in 2020", image:pic3, image2:avat2, tage:"TECHNOLOGY", autor:"Tom wilson"},
    {title:"He Created the Web. Now He’s Out to Remake", image:pic2, image2:avat3, tage:"EDUCATION", autor:"Adam Jordon"},
    {title:"Partnering to create a community", image:pic5, image2:avat4, tage:"DESIGN", autor:"Kaylynn Donin"},
    {title:"Primary School Build for Children", image:pic6, image2:avat5, tage:"FASHION", autor:"Richard Hartisona"},
    {title:"Best & Less published their supplier lists", image:pic7, image2:avat6, tage:"DESIGN", autor:"Cheyenne Curtis"},
    {title:"New vaccine for cattle calf loss learned", image:pic8, image2:avat7, tage:"TECHNOLOGY", autor:"Hawkins Junior"},
    {title:"Smallest of donations can help change a life", image:pic9, image2:avat8, tage:"EDUCATION", autor:"Tom wilson"},
    {title:"It is a long established fact that a reader", image:pic1, image2:avat9, tage:"HEALTH", autor:"Adam Jordon"}
];

const Blog = () => {
    const [blogDropBtn1,setBlogDropBtn1] = useState('All Categories');
    const [blogDropBtn2,setBlogDropBtn2] = useState('Filter Date');
    const [blogDropBtn3,setBlogDropBtn3] = useState('Latest');
    return (
        <>
            <div className="page-content bg-white">
                <PageBanner maintitle="Home" pagetitle="News " background={bg}/>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">					
                            <div className="col-lg-7 col-md-12 m-b30">
                                <div className="dz-card style-3 overlay">
                                    <div className="dz-media">
                                        <img src={grid2} alt="" />
                                    </div>
                                    <div className="dz-info">
                                        <div className="dz-category">
                                            <ul>
                                                <li><Link to={"#"}>BUSSINESS STRATEGY</Link></li>
                                            </ul>
                                        </div>
                                        <h5 className="dz-title"><Link to={"/blog-details"} className="text-white">How to increase your business skill while pandemic</Link></h5>
                                    </div>
                                </div>
                            </div>					
                            <div className="col-lg-5 col-md-12 m-b30">
                                <div className="dz-card style-3 overlay">
                                    <div className="dz-media">
                                        <img src={grid6} alt="" />
                                    </div>
                                    <div className="dz-info">
                                        <div className="dz-category">
                                            <ul>
                                                <li><Link to={"#"}>BUSSINESS STRATEGY</Link></li>
                                            </ul>
                                        </div>
                                        <h5 className="dz-title"><Link to={"/blog-details"} className="text-white">Akcel Academy 2021 Grand Opening at Jakarta</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-1">
                    <div className="container">
                        <div className="row m-b30">
                            <div className="col-lg-5 search-bx style-2">
                                <div className="input-group  m-b0 m-md-b10">
                                    <input type="text" className="form-control" placeholder="Search Articles" />
                                    <div className="input-group-prepend">
                                        <button className="btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row g-3 justify-content-end ">
                                    <div className="col-sm-4">
                                        {/* <select className="default-select form-select style-2">
                                            <option>All Categories</option>
                                            <option>Newest</option>
                                            <option>Oldest</option>
                                        </select> */}
                                        <Dropdown className="select-drop style-2">
                                            <Dropdown.Toggle as="div" className="i-false select-drop-btn">
                                                <span>{blogDropBtn1}</span>
                                                <i className="fa-regular fa-angle-down"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={()=>setBlogDropBtn1('All Categories')}>All Categories</Dropdown.Item>
                                                <Dropdown.Item onClick={()=>setBlogDropBtn1('Newest')}>Newest</Dropdown.Item>
                                                <Dropdown.Item onClick={()=>setBlogDropBtn1('Oldest')}>Oldest</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="col-sm-4">
                                        {/* <select className="default-select form-select style-2">
                                            <option>Filter Date</option>
                                            <option>7/12/2022</option>
                                            <option>15/2/2022</option>
                                        </select> */}
                                        <Dropdown className="select-drop">
                                            <Dropdown.Toggle as="div" className="i-false select-drop-btn">
                                                <span>{blogDropBtn2}</span>
                                                <i className="fa-regular fa-angle-down"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={()=>setBlogDropBtn2('Filter Date')}>Filter Date</Dropdown.Item>
                                                <Dropdown.Item onClick={()=>setBlogDropBtn2('07/10/2023')}>07/10/2023</Dropdown.Item>
                                                <Dropdown.Item onClick={()=>setBlogDropBtn2('15/11/2023')}>15/11/2023</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="col-sm-4">
                                        {/* <select className="default-select form-select style-2">
                                            <option>Latest</option>
                                            <option>Oldest</option>
                                        </select> */}
                                        <Dropdown className="select-drop">
                                            <Dropdown.Toggle as="div" className="i-false select-drop-btn">
                                                <span>{blogDropBtn3}</span>
                                                <i className="fa-regular fa-angle-down"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={()=>setBlogDropBtn3('Latest')}>Latest</Dropdown.Item>
                                                <Dropdown.Item onClick={()=>setBlogDropBtn3('Oldest')}>Oldest</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {cardDetials.map((item, ind)=>(
                                <div className="col-xl-4 col-md-6 m-b30" key={ind}>
                                    <div className="dz-card style-1">
                                        <div className="dz-media">
                                            <Link to={"/blog-details"}><img src={item.image} alt="" /></Link>
                                            <ul className="dz-badge-list">
                                                <li><Link to={"#"} className="dz-badge">{item.tage}</Link></li>
                                            </ul>
                                            <Link to={"/blog-details"} className="btn btn-secondary">Read More</Link>
                                        </div>
                                        <div className="dz-info">
                                            <h5 className="dz-title"><Link to={"/blog-details"}>{item.title} </Link></h5>
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
                                </div>
                            ))}

                        </div>
                        <div className="row">		
                            <div className="col-12 m-sm-t0 m-t30">		
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
                </section>
            </div>  
        </>
    );
};

export default Blog;