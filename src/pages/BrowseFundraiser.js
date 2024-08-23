import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

import bg from '../assets/images/banner/bnr2.jpg';
import PageBanner from '../layouts/PageBanner';
import LeftSidebar from '../components/LeftSidebar';
import FundCard from '../components/FundCard';
import UpdateBlog from '../components/Home/UpdateBlog';

const BrowseFundraiser = () => {
    const [dropbtn,setDropbtn] = useState('Newest');
    return (
        <>
            <div className="page-content bg-white">
                <PageBanner maintitle="Fundraiser" pagetitle="Browse Fundraiser" background={bg}/>
                
                <div className="content-inner-2">
                    <div className="container">
                        <div className="row reverse-sidebar">
                            <div className="col-xl-4 col-lg-4">
                                <LeftSidebar />
                            </div>
                            <div className="col-xl-8 col-lg-8 m-b50">
                                <div className="row align-items-center">
                                    <div className="col-md-9 col-sm-8 mb-3 mb-sm-4">
                                        <h4 className="m-b0">824 Projects Found</h4>
                                    </div>
                                    <div className="col-md-3 col-sm-4 m-b30">                                        
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
                <div className="call-action style-1 content-inner-1">
                    <div className="container">
                        <UpdateBlog />
                    </div>
                </div>
            </div>   
        </>
    );
};

export default BrowseFundraiser;