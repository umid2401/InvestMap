import React from 'react';
import {Link} from 'react-router-dom';

//import pic1 from '../assets/images/blog/recent-blog/pic1.jpg';
//import pic2 from '../assets/images/blog/recent-blog/pic2.jpg';
//import pic3 from '../assets/images/blog/recent-blog/pic3.jpg';
//import pic4 from '../assets/images/blog/recent-blog/pic4.jpg';
import NewsSlider from '../components/Home/NewsSlider';
import UpdateBlog from '../components/Home/UpdateBlog';
import BlogDetailsLeftBar from '../components/BlogDetailsLeftBar';
import { IMAGES } from '../constant/theme';

const widgetBlog = [
    {title:"New vaccine for cattle calf loss learned.", image:IMAGES.Recentblog1},
    {title:"He Created the Web. Now He’s Out to Remake.", image:IMAGES.Recentblog2},
    {title:"Partnering to create a community.", image:IMAGES.Recentblog3},
    {title:"Best & Less published their supplier lists.", image:IMAGES.Recentblog4},
];

const tagData = [
    { title:"Business"},
    { title:"Corporate"},
    { title:"Blog"},
    { title:"Marketing"},
    { title:"Creative"},
    { title:"Web"},
    { title:"Workers"},
    { title:"Modern"},
];

const BlogDetails = () => {
    
    return (
        <>
            <div className="page-content bg-white">
                <section className="content-inner-2">
                    <div className="container">			
                        <div className="row ">
                            <div className="col-xl-8 col-lg-8 m-b30">
                                <BlogDetailsLeftBar />
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <aside className="side-bar sticky-top">
							
                                    <div className="widget style-1">
                                        <div className="widget-title">
                                            <h5 className="title">Search</h5>
                                        </div>
                                        <div className="search-bx">
                                            <form role="search">
                                                <div className="input-group">
                                                    <input name="text" className="form-control" placeholder="Search Here..." type="text" />
                                                    <span className="input-group-btn">
                                                        <button type="submit" className="btn btn-primary sharp radius-no"><i className="la la-search scale3"></i></button>
                                                    </span> 
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget style-1 widget_categories">
                                        <div className="widget-title">
                                            <h5 className="title">Categories</h5>
                                        </div>
                                        <ul>
                                            <li className="cat-item"><Link to={"#"}>business (10)</Link></li>
                                            <li className="cat-item"><Link to={"#"}>Case Study (13)</Link></li>
                                            <li className="cat-item"><Link to={"#"}>Insights (9)</Link></li>
                                            <li className="cat-item"><Link to={"#"}>World (3)</Link></li>
                                            <li className="cat-item"><Link to={"#"}>Tax Solutions (12)</Link></li> 
                                            <li className="cat-item"><Link to={"#"}>Creative (6)</Link></li> 
                                        </ul>
                                    </div>
                                    <div className="widget style-1 recent-posts-entry">
                                        <div className="widget-title">
                                            <h5 className="title">Recent Post</h5>
                                        </div>
                                        <div className="widget-post-bx">
                                            {widgetBlog.map((item, ind)=>(
                                                <div className="widget-post clearfix" key={ind}>
                                                    <div className="dz-media"> 
                                                        <img src={item.image} alt=""/>
                                                    </div>
                                                    <div className="dz-info">
                                                        <h6 className="title"><Link to={"/blog-details"}>{item.title}</Link></h6>
                                                        <div className="dz-meta">
                                                            <ul>
                                                                <li className="post-date"><i className="fa-solid fa-calendar-days"></i> 7 March, 2022</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="widget style-1 widget_tag_cloud">
                                        <div className="widget-title">
                                            <h5 className="title">Popular Tags</h5>
                                        </div>
                                        <div className="tagcloud"> 
                                            {tagData.map((item, ind)=>(
                                                <Link to={"#"} key={ind}>{item.title}</Link>
                                            ))}                                            
                                        </div>
                                    </div>
                                    
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="section-head">
                            <h2 className="title">Related Articles</h2>
                        </div>
                        <NewsSlider />
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

export default BlogDetails;