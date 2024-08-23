import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

import bg from '../assets/images/banner/bnr2.jpg';
import about2 from '../assets/images/about/pic2.jpg';
import icon from '../assets/images/icon.png';
import FundCard from '../components/FundCard';
import PartnershipSlider from '../components/Home/PartnershipSlider';
import UpdateBlog from '../components/Home/UpdateBlog';

const ProjectSidebar = () => {
    const [dropbtn,setDropbtn] = useState('Newest');
    const [dropbtn2,setDropbtn2] = useState('All Category');
    return (
        <>
            <div className="page-content bg-white">
                <div className="dz-bnr-inr style-1 text-center overlay-primary-dark" >
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>Project Sidebar</h1>                        
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/"}>Project</Link></li>
                                    <li className="breadcrumb-item active">Project Sidebar</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="clearfix">
                    <div className="container">
                        <div className="find-bx bg-white">
                            <form className="dezPlaceAni">
                                <div className="row align-items-center">
                                    <div className="col-lg-3">
                                        <div className="">                                            
                                            <Dropdown className="select-drop-2">
                                                <Dropdown.Toggle as="div" className="i-false select-drop-btn-2">
                                                    <span>{dropbtn2}</span>
                                                    <i className="fa-regular fa-angle-down"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={()=>setDropbtn2('All Category')}>All Category</Dropdown.Item>
                                                    <Dropdown.Item onClick={()=>setDropbtn2('Newest')}>Newest</Dropdown.Item>
                                                    <Dropdown.Item onClick={()=>setDropbtn2('Oldest')}>Oldest</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Find Projects" />
                                            <div className="input-group-prepend">
                                                <button className="btn"><i className="las la-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="tag-list"> 
                            <span className="title text-black">Popular Search:</span>
                            <Link to={"#"}>Technology Projects,</Link>
                            <Link to={"#"}>Cancer Charity Programs,</Link>
                            <Link to={"#"}>Design Interior</Link>
                        </div>
                    </div>
                </div>
                <div className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 m-b40 dz-order-1">
                                <div className="section-head">
                                    <h3>Filter</h3>
                                </div>
                                <aside className="side-bar sticky-top">
                                    <div className="widget style-1 widget_checkbox_filter">
                                        <div className="widget-title">
                                            <h4 className="title">Category</h4>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="form-check custom-checkbox checkbox-secondary">
                                                    <input type="checkbox" className="form-check-input" id="custom1" required />
                                                    <label className="form-check-label" for="custom1">All Projects</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check checkbox-secondary m-b5">
                                                    <input type="checkbox" className="form-check-input filled" id="check2" name="example1" />
                                                    <label className="form-check-label" for="check2">Technology</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check checkbox-secondary m-b5">
                                                    <input type="checkbox" className="form-check-input filled" id="check3" name="example1" />
                                                    <label className="form-check-label" for="check3">Medical</label>
                                                </div>
                                            </li>  
                                            <li>
                                                <div className="form-check checkbox-secondary m-b5">
                                                    <input type="checkbox" className="form-check-input filled" id="check4" name="example1" />
                                                    <label className="form-check-label" for="check4">Business</label>
                                                </div>
                                            </li>  
                                            <li>
                                                <div className="form-check checkbox-secondary m-b5">
                                                    <input type="checkbox" className="form-check-input filled" id="check5" name="example1" />
                                                    <label className="form-check-label" for="check5">Fashion</label>
                                                </div>
                                            </li> 
                                        </ul>
                                        <Link to={"#"} className="btn btn-primary">SEARCH PROJECTS</Link>
                                    </div>
                                    <div className="widget_contact" style={{backgroundImage:"url("+ about2 +")" }}>
                                        <div className="widget-content">
                                            <img src={icon} width="80" alt="" />
                                            <h4>Donate to World <br/>Cancer Society</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                            <Link to={"/contact-us"} className="btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#modalDonate"> Donate Now <i className="flaticon-like font-12 ms-2"></i></Link>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-xl-8 col-lg-7 m-b50">
						        <div className="row align-items-center">
                                    <div className="col-xl-9 mb-3 mb-sm-4">
                                        <h4 className="m-b0">824 Projects Found</h4>
                                    </div>
                                    <div className="col-xl-3 m-b30">
                                        <Dropdown className="select-drop">
                                            <Dropdown.Toggle as="div" className="i-false select-drop-btn">
                                                <span>{dropbtn}</span>
                                                <i className="fa-regular fa-angle-down"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={()=>setDropbtn('Newest')}>Newest</Dropdown.Item>
                                                <Dropdown.Item onClick={()=>setDropbtn('Oldest')}>Oldest</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="row">							        
                                    <FundCard />                                    
                                </div>
                                <div className="row">
                                    <div className="col-12 m-sm-t0 m-t30">		
                                        <nav aria-label="Blog Pagination" className="pagination-bx">
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
                        </div>
                       
                    </div>
                </div>
                
                <section className="clients-wrapper p-0">
                    <div className="container">
                        <div className="section-head text-center">
                            <h3 className="title">Our Partnership</h3>
                        </div>
                        <PartnershipSlider />
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


export default ProjectSidebar;