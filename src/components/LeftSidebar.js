import React from 'react';
import {Link} from 'react-router-dom';

const LeftSidebar = () => {
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
                <div className="widget style-1 widget_tag_cloud">
                    <div className="widget-title">
                        <h4 className="title">Popular Tags</h4>
                    </div>
                    <div className="tagcloud"> 
                        <Link to={"#"}>Mock-Ups</Link>
                        <Link to={"#"}>UI</Link>
                        <Link to={"#"}>Websites</Link>
                        <Link to={"#"}>PSD Templates</Link>
                        <Link to={"#"}>Branding</Link>
                        <Link to={"#"}>WordPress</Link>
                        <Link to={"#"}>Graphic Design</Link>
                        <Link to={"#"}>UI Kit</Link>
                        <Link to={"#"}>Development</Link>
                    </div>
                </div>
            </aside>            
        </>
    );
};


export default LeftSidebar;