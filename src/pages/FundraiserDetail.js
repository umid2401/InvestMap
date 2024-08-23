import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';

import PageBanner from '../layouts/PageBanner';
import {CommentBlog} from '../components/BlogDetailsLeftBar';

import bg from '../assets/images/banner/bnr4.jpg';
import avat1 from '../assets/images/avatar/avatar1.jpg';
import avat2 from '../assets/images/avatar/avatar2.jpg';
import avat3 from '../assets/images/avatar/avatar3.jpg';
import avat4 from '../assets/images/avatar/avatar4.jpg';
import avat5 from '../assets/images/avatar/avatar5.jpg';
import blog1 from '../assets/images/blog/recent-blog/pic1.jpg';
import blog2 from '../assets/images/blog/recent-blog/pic2.jpg';
import UpdateBlog from '../components/Home/UpdateBlog';
import GallerySlider from '../components/Fundraiser/GallerySlider';


const postBlog = [
    {image:blog1, title:"How To Teach Education Like A Pro."},
    {image:blog2, title:"Quick and Easy Fix For Your Education."},
];
const teamBlog =[
    {title:"Jake Johnson", image:avat1},
    {title:"Celesto Anderson", image:avat2},
    {title:"John Doe", image:avat3},
    {title:"Jake Johnson", image:avat4}
];

const donorsBlog = [
    {title:"Celesto Anderson", image:avat5, price:"$ 1,812"},
    {title:"John Doe", image:avat4, price:"$ 1,564"},
    {title:"Celesto Anderson", image:avat3, price:"$ 1,225"},
    {title:"Jake Johnson", image:avat2, price:"$ 9,00"},
];



const FundraiserDetail = () => {
    const [modalDonate, setModalDonate] = useState(false);
    const [referModal, setReferModal] = useState(false);
    return (
        <>
            <div className="page-content bg-white">
                <PageBanner maintitle="Fundraiser" pagetitle="Fundraiser Detail" background={bg}/>
                <section className="content-inner-2">
                    <div className="container">	
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 m-b30">
						        <div className="fundraiser-single">
                                    <div className="swiper fundraiser-gallery-wrapper">
                                        <GallerySlider />
                                    </div>
                                    <h2 className="title">Schooling Special Needs Children Education</h2>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                    
                                    <h5>About the Fundraiser</h5>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                    
                                    <ul className="fundraiser-bottom">
                                        <li>
                                            <Link to={"#"} className="btn btn-primary btn-sm" onClick={()=>setModalDonate(true)} data-bs-target="#modalDonate">
                                                <i className="flaticon-like me-2"></i> Donate Now 
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/login/" target="_blank" rel="noreferrer" className="btn facebook btn-primary btn-sm">
                                                <i className="fa-brands fa-facebook-square me-2"></i> Spread The World
                                            </a>
                                        </li>
                                        <li><a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer" className="btn whatsapp btn-primary btn-sm"><i className="fa-brands fa-whatsapp me-2"></i>Share</a></li>
                                    </ul>
                                </div>
                                <div className="widget style-1 widget_refer">
                                    <div className="widget-title">
                                        <h4 className="title">Refer a Friend</h4>
                                    </div>	
                                    <p>In need of funds for medical treatment or know someone who might be? Share the details and Akcel will get in touch with.</p>
                                    <Link to={"#"} className="btn btn-outline-primary"
                                        onClick={()=>setReferModal(true)}
                                    >Refer Now</Link>
                                </div>
                                <div className="clear" id="comment-list">
                                    <div className="comments-area" id="comments">
                                        <div className="widget-title style-1">
                                            <h4 className="title">Comments</h4>
                                        </div>
                                        <div className="clearfix">                                            
                                            <ol className="comment-list">
                                                <li className="comment">
                                                    <CommentBlog title="Celesto Anderson"  image={avat1}/>
                                                    <ol className="children">
                                                        <li className="comment odd parent"></li>
                                                        <CommentBlog title="Jake Johnson" image={avat2}/>
                                                    </ol>
                                                </li>
                                                <li className="comment">
                                                    <CommentBlog title="John Doe" image={avat3}/>
                                                </li>
                                                <li className="comment">
                                                    <CommentBlog title="Celesto Anderson" image={avat4}/>
                                                </li>

                                            </ol>
                                            <div className="comment-respond" id="respond">
                                                <div className="widget-title style-1">
                                                    <h4 className="title" id="reply-title">Leave Your Comment
                                                        <small><Link to={"#"} style={{display:"none"}} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link></small>
                                                    </h4>
                                                </div>
                                                <form className="comment-form" id="commentform">
                                                    <p className="comment-form-author">
                                                        <label htmlFor="author">Name <span className="required">*</span></label>
                                                        <input type="text" name="Author"  placeholder="Author" id="author" />
                                                    </p>
                                                    <p className="comment-form-email">
                                                        <label htmlFor="email">Email <span className="required">*</span></label>
                                                        <input type="text" placeholder="Email" name="email" id="email" />
                                                    </p>
                                                    <p className="comment-form-comment">
                                                        <label htmlFor="comment">Comment</label>
                                                        <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                                    </p>
                                                    <p className="form-submit">
                                                        <button type="submit" className="btn btn-primary" id="submit">SUBMIT</button>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4">
                                <aside className="side-bar sticky-top">
                                    <div className="widget style-1 widget_donate">
                                        <Link to={"#"} className="btn btn-donate btn-primary w-100"  data-bs-toggle="modal" data-bs-target="#modalDonate"><i className="flaticon-like me-3"></i> Donate Now </Link>
                                        <div className="tagcloud"> 
                                            <Link to={"#"}  data-bs-toggle="modal" data-bs-target="#modalDonate">Cards</Link>
                                            <Link to={"#"}  data-bs-toggle="modal" data-bs-target="#modalDonate">Net Banking</Link>
                                            <Link to={"#"}  data-bs-toggle="modal" data-bs-target="#modalDonate">UPI</Link>
                                        </div>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="btn btn-primary facebook w-100 btn-bottom"><i className="fa-brands fa-facebook-square me-2"></i> Spread The World</a>
                                    </div>
                                    
                                    {/* <!--  Widget Fund --> */}
                                    <div className="widget style-1 widget_fund">
                                        <h3 className="title">₹ 45,00,000</h3>
                                        <p>raised of <span>₹ 50,00,000</span> goal</p>
                                        <div className="progress-bx style-1">
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-secondary progress-bar-striped progress-bar-animated" role="progressbar" style={{width:"90%"}}></div>
                                            </div> 
                                        </div>
                                        <ul className="detail">
                                            <li className="d-flex"><h5>2422</h5><span className="ms-2">supporters</span></li>
                                            <li className="d-flex"><h5>52</h5><span className="ms-2">days left</span></li>
                                        </ul>
                                    </div>
                                    
                                    {/* <!-- Fundraiser Post --> */}
                                    <div className="widget style-1 recent-posts-entry">
                                        <div className="widget-title">
                                            <h5 className="title">Fundraiser Post</h5>
                                        </div>	
                                        <div className="widget-post-bx">
                                            {postBlog.map((data, ind)=>(
                                                <div className="widget-post clearfix" key={ind}>
                                                    <div className="dz-media"> 
                                                        <img src={data.image} alt="" />
                                                    </div>
                                                    <div className="dz-info">
                                                        <h6 className="title"><Link to={"/blog-details"}>{data.title}</Link></h6>
                                                        <div className="dz-meta">
                                                            <ul>
                                                                <li className="post-date"><i className="flaticon-placeholder"></i> Coimbatore</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Fundraising Team --> */}
                                    <div className="widget style-1 widget_avatar">
                                        <div className="widget-title">
                                            <h5 className="title">Fundraising Team</h5>
                                        </div>
                                        <div className="avatar-wrapper">
                                            {teamBlog.map((data, ind)=>(
                                                <div className="avatar-item" key={ind}>
                                                    <div className="avatar-media"> 
                                                        <img src={data.image} alt="" />
                                                    </div>
                                                    <div className="avatar-info">
                                                        <h6 className="title"><Link to={"#"}>{data.title}</Link></h6>
                                                    </div>
                                                </div>
                                            ))}                                            
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Top Donors --> */}
                                    <div className="widget style-1 widget_avatar">
                                        <div className="widget-title">
                                            <h5 className="title">Top Donors</h5>
                                        </div>
                                        <div className="avatar-wrapper">
                                            {donorsBlog.map((item, ind)=>(
                                                <div className="avatar-item" key={ind}>
                                                    <div className="avatar-media"> 
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                    <div className="avatar-info">
                                                        <h6 className="title"><Link to={"#"}>{item.title}</Link></h6>
                                                        <span className="donors-item">{item.price}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </aside>
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
            <Modal className="modal fade modal-wrapper" id="modalRefer" show={referModal} onHide={setReferModal} centered>               
                <div className="modal-header">
                    <h5 className="modal-title">Refer a Friend</h5>
                    <button type="button" className="btn-close" onClick={()=>setReferModal(false)}><i className="flaticon-close"></i></button>
                </div>
                <div className="modal-body">
                    <form className="dz-form contact-bx" method="POST">
                        <div className="form-group style-1 align-items-center">
                            <label className="form-label">Name</label>
                            <div className="input-group">
                                <input name="dzName" required="" type="text" className="form-control" placeholder="Jakob Bothman" />
                            </div>
                        </div>
                        <div className="form-group style-1 align-items-center">
                            <label className="form-label">Email address</label>
                            <div className="input-group">
                                <input name="dzEmail" required="" type="text" className="form-control" placeholder="marseloque@mail.com" />
                            </div>
                        </div>
                        <div className="form-group style-1 align-items-center">
                            <label className="form-label">Phone Number</label>
                            <div className="input-group">
                                <input name="dzPhoneNumber" type="number" className="form-control" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="form-group mb-0 text-center">
                            <button name="submit" type="submit" value="Submit" className="btn btn-primary">Refer Now</button>
                        </div>
                    </form>
                </div>
            </Modal>
            <Modal className="modal fade modal-wrapper" id="modalDonate" show={modalDonate} onHide={setModalDonate} > 
                <div className="modal-header">
                    <h5 className="modal-title">Choose a donation amount</h5>
                    <button type="button" className="btn-close" onClick={()=>setModalDonate(false)}><i className="flaticon-close"></i></button>
                </div>
                <div className="modal-body">
                    <form action="index.html">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tag-donate style-1">
                                    <div className="donate-categories">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                $500
                                            </label>
                                        </div>
                                    </div>
                                    <div className="donate-categories">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                $1000
                                            </label>
                                        </div>
                                    </div>
                                    <div className="donate-categories">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                $2000
                                            </label>
                                        </div>
                                    </div>
                                    <div className="donate-categories">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                $5000
                                            </label>
                                        </div>
                                    </div>
                                    <p>Most Donors donate approx <span>$1000</span> to this Fundraiser</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Other Amount</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control"  placeholder="Other Amount" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <div className="input-group">
                                        <input name="dzName" required="" type="text" className="form-control" placeholder="Jakob Bothman" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Email address</label>
                                    <div className="input-group">
                                        <input name="dzEmail" required type="text" className="form-control" placeholder="info@mail.com" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Phone Number</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="Phone Number" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Address</label>
                                    <div className="input-group">
                                        <input required type="text" className="form-control" placeholder="Address" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Pancard</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="Pancard" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-0 text-center">
                                    <button name="submit" type="submit" value="Submit" className="btn btn-primary btn-block">Proceed To Pay</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>                    
            </Modal>
        </>
    )
}

export default FundraiserDetail;