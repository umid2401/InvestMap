import React from 'react';
import {Link} from 'react-router-dom';

const wrapperBlog = [
    {icon:"flaticon-like-1", title:"Giving Love"},
    {icon:"flaticon-open-book", title:"Education"},
    {icon:"flaticon-raw-food", title:"Healthy Food"},
    {icon:"flaticon-doctor-bag", title:"Medical"},
];

const CategoriesIcon = () => {
    return (
        <>
           {wrapperBlog.map((item, index)=>(
                <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
                    <div className="icon-bx-wraper style-1 text-center m-b30">
                        <div className="icon-lg m-b30"> <Link to={"/project-categories"} className="icon-cell">
                            <i className={item.icon}></i>
                        </Link> </div>
                        <div className="icon-content">
                            <h5 className="dz-tilte text-capitalize"><Link to={"/project-categories"}>{item.title}</Link></h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        </div>
                    </div>
                </div>
            ))}      
        </>
    );
};



export default CategoriesIcon;