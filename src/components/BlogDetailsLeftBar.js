import React from 'react';
import {Link} from 'react-router-dom';

import  large from '../assets/images/blog/large/pic1.jpg';
import  blog2 from '../assets/images/blog/blog-grid/pic2.jpg';
import  blog1 from '../assets/images/blog/blog-grid/pic1.jpg';
import  test from '../assets/images/testimonials/pic2.jpg';
import avat1 from '../assets/images/avatar/avatar1.jpg';
import avat2 from '../assets/images/avatar/avatar2.jpg';
import avat3 from '../assets/images/avatar/avatar3.jpg';
import avat4 from '../assets/images/avatar/avatar4.jpg';


export const CommentBlog = (props) =>{
    return(
        <>
            <div className="comment-body">
                <div className="comment-author vcard"> 
                    <img  className="avatar photo" src={props.image} alt="" /> 
                    <cite className="fn">{props.title}</cite>
                </div>               
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="reply"> 
                    <Link to={"#"} className="comment-reply-link"><i className="fa fa-reply"></i>Reply</Link>
                </div>
            </div>
        </>
    )
}

const BlogDetailsLeftBar = () => {
    return (
        <>
            <div className="dz-card blog-single sidebar">
                <div className="dz-media">
                    <img src={large} alt="" />
                </div>
                <div className="dz-info">
                    <div className="dz-meta">
                        <ul>
                            <li className="post-date"><i className="fa-solid fa-calendar-days"></i> 7 March, 2022</li>
                            <li className="post-author"><Link to={"#"}><i className="fa-solid fa-user"></i> By Johne Doe</Link></li>
                        </ul>
                    </div>
                    <div className="dz-post-text">
                        <h1 className="dz-title">When Professionals Run Into Problems With Agency</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, tortor in varius lobortis, sapien arcu ornare nisi, ut volutpat ante augue quis arcu. Phasellus lacinia magna elit, at maximus leo tristique non. Phasellus laoreet, nisi quis fermentum blandit, leo dolor bibendum arcu, vel dignissim diam odio a elit. In dapibus congue urna vitae porta. Quisque tincidunt velit sed ullamcorper pretium. Nullam vitae luctus libero.</p>
                        <ul className="wp-block-gallery columns-3">
                            <li className="blocks-gallery-item"><img alt="" src={blog2} /></li>
                            <li className="blocks-gallery-item"><img alt="" src={blog1} /></li>
                        </ul>
                        <p>Vestibulum porttitor purus commodo sagittis molestie. Fusce facilisis ipsum ut tincidunt suscipit. Vivamus tristique lectus quis dignissim convallis. Cras eget ipsum bibendum, feugiat libero in, scelerisque erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                        <blockquote className="block-quote style-1">
                            <p>“You can make anything look good. Only a quarter of young adults are financially literate. You don’t want to overwhelm them with terrible advice.”</p>
                            <cite> Akcel </cite>
                        </blockquote>
                        <p>Aliquam in laoreet dui. Aliquam blandit nisl lacus, sed suscipit massa pulvinar vitae. Proin non dui eros. Mauris lobortis arcu a quam tincidunt, at consectetur urna dapibus. Curabitur sagittis nisl vel dolor porta, eu fringilla est accumsan. Donec eleifend dignissim risus a tempor. Sed suscipit ultrices viverra.</p>
                        <ul>
                            <li>Aliquam blandit nisl lacus, sed suscipit massa pulvinar vitae</li>
                            <li>Donec eleifend dignissim risus a tempor Sed suscipit ultrices viverra.</li>
                            <li>Only a quarter of young adults are financially literate overwhelm them advice.</li>
                            <li>Lorem ipsum dolor sit amet tortor in varius lobortis, sapien arcu ornare nisi</li>
                            <li>Curabitur sagittis nisl vel dolor fringilla est eleifend dignissim risus.</li>
                        </ul>
                        <p>Aliquam in laoreet dui. Aliquam blandit nisl lacus, sed suscipit massa pulvinar vitae. Proin non dui eros. Mauris lobortis arcu a quam tincidunt, at consectetur urna dapibus. Curabitur sagittis nisl vel dolor porta, eu fringilla est accumsan. Donec eleifend dignissim risus a tempor. Sed suscipit ultrices viverra.</p>
                    </div>
                </div>
                <div className="dz-share-post">
                    <div className="dz-social-icon">
                        <h6 className="title">Share:</h6>
                        <ul>
                            <li><Link to={"#"} className="fab fa-facebook-f"></Link></li>
                            <li><Link to={"#"} className="fab fa-instagram"></Link></li>
                            <li><Link to={"#"} className="fab fa-twitter"></Link></li>
                        </ul>
                    </div>
                    <div className="post-tags">
                        <Link to={"#"}>#Mobile</Link>
                        <Link to={"#"}>#Software</Link>
                        <Link to={"#"}>#Technology</Link>
                    </div>
                </div>
            </div>  
            <div className="author-box blog-user m-b60">
                <div className="author-profile-info">
                    <div className="author-profile-pic">
                        <img src={test} alt="Profile Pic" />
                    </div>
                    <div className="author-profile-content">
                        <h4>Jake Johnson</h4>
                        <p>We were making our way to the Rila Mountains, where we were visiting the Rila Monastery where we enjoyed.</p>
                        <ul className="list-inline m-b0">
                            <li><a href="https://www.facebook.com" target="_blank"  rel="noreferrer"  className="btn-link"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.twitter.com" target="_blank"  rel="noreferrer"  className="btn-link"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.google.com" target="_blank"  rel="noreferrer"  className="btn-link"><i className="fab fa-google-plus"></i></a></li>
                            <li><a href="https://www.youtube.com" target="_blank"  rel="noreferrer"  className="btn-link"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
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
                                    <label for="author">Name <span className="required">*</span></label>
                                    <input type="text" name="Author"  placeholder="Author" id="author" />
                                </p>
                                <p className="comment-form-email">
                                    <label for="email">Email <span className="required">*</span></label>
                                    <input type="text" placeholder="Email" name="email" id="email" />
                                </p>
                                <p className="comment-form-comment">
                                    <label for="comment">Comment</label>
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
        </>
    );
};

export default BlogDetailsLeftBar;