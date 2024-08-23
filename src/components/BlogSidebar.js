import React from 'react';
import {Link} from 'react-router-dom';

import img1 from '../assets/images/blog/recent-blog/pic1.jpg';
import img2 from '../assets/images/blog/recent-blog/pic2.jpg';
import img3 from '../assets/images/blog/recent-blog/pic3.jpg';

const widgetBlog = [
    {image:img1, date:"7 March, 2022", title:"Aliqua sodales vestibulum risus nterdum malesuad"},
    {image:img2, date:"6 March, 2022", title:"How To Make Money From The agency Phenomenon"},
    {image:img3, date:"5 March, 2022", title:"The 8 Biggest Agency Mistakes You Can Easily"},
];

const tagsBlog = [
    {title:"Mock-Ups"},
    {title:"UI"},
    {title:"Websites"},
    {title:"PSD Templates"},
    {title:"Branding"},
    {title:"WordPress"},
    {title:"Graphic Design"},
    {title:"UI Kit"},
    {title:"Development"},
];


const BlogSidebar = () => {
    return (
        <>
            <aside className="side-bar sticky-top right">
                <div className="widget style-1">
                    <div className="widget-title">
                        <h4 className="title">Search</h4>
                    </div>
                    <div className="search-bx">
                        <form role="search" method="post">
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
                        <h4 className="title">Category</h4>
                    </div>
                    <ul>
                        <li className="cat-item"><Link to={"#"}>Software</Link></li>                                         
                        <li className="cat-item"><Link to={"#"}>Analysis</Link></li>                                         
                        <li className="cat-item"><Link to={"#"}>Cryptocurrency</Link></li>                                         
                        <li className="cat-item"><Link to={"#"}>Technology</Link></li>                                         
                        <li className="cat-item"><Link to={"#"}>Mobile App</Link></li> 
                        <li className="cat-item"><Link to={"#"}>Development</Link></li> 
                    </ul>
                </div>
                <div className="widget style-1 recent-posts-entry">
                    <div className="widget-title">
                        <h4 className="title">Recent Post</h4>
                    </div>
                    <div className="widget-post-bx">
                        {widgetBlog.map((data, ind)=>(
                            <div className="widget-post clearfix" key={ind}>
                                <div className="dz-media"> 
                                    <img src={data.image} alt="" />
                                </div>
                                <div className="dz-info">
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date">{data.date}</li>
                                        </ul>
                                    </div>
                                    <h6 className="title"><Link to={"/blog-details"}>{data.title}</Link></h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="widget style-1 widget_tag_cloud">
                    <div className="widget-title">
                        <h4 className="title">Popular Tags</h4>
                    </div>
                    <div className="tagcloud"> 
                        {tagsBlog.map((d,i)=>(
                            <Link to={"#"} key={i}>{d.title}</Link>
                        ))}
                    </div>
                </div>
                
            </aside>
             
        </>
    );
};

export default BlogSidebar;