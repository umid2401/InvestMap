import React from 'react';
import {Link} from 'react-router-dom';
//images
import pic1 from '../assets/images/project/pic1.jpg';
import pic2 from '../assets/images/project/pic2.jpg';
import pic3 from '../assets/images/project/pic3.jpg';
import pic4 from '../assets/images/project/pic4.jpg';
import pic5 from '../assets/images/project/pic5.jpg';
import pic6 from '../assets/images/project/pic6.jpg';
import avat1 from '../assets/images/avatar/avatar1.jpg';
import avat2 from '../assets/images/avatar/avatar2.jpg';
import avat3 from '../assets/images/avatar/avatar3.jpg';
import avat4 from '../assets/images/avatar/avatar4.jpg';
import avat5 from '../assets/images/avatar/avatar5.jpg';
import avat6 from '../assets/images/avatar/avatar6.jpg';


const cardBlog = [
    {image: pic1, image2: avat1, progres:"75%", title:"EDUCATION", subtitle:"New vaccine for cattle calf loss learned", authar:"Cheyenne Curtis", raised:"3,542", days:"43"},
    {image: pic2, image2: avat2, progres:"85%", title:"TECHNOLOGY", subtitle:"He Created the Web. Now He’s Out to Remake", authar:"Kaylynn Donin", raised:"35,542", days:"63"},
    {image: pic3, image2: avat3, progres:"70%", title:"FOOD", subtitle:"4 Things parents learned for they jids in 2020", authar:"Adam Jordon", raised:" 2,542", days:"23"},
    {image: pic4, image2: avat4, progres:"40%", title:"FRIENDS", subtitle:"Partnering to create a community", authar:"Kaylynn Donin", raised:"6,542", days:"35"},
    {image: pic5, image2: avat5, progres:"30%", title:"HEALTH", subtitle:"Primary School Build for Children", authar:"Richard Hart", raised:"1,542", days:"47"},
    {image: pic6, image2: avat6, progres:"50%", title:"CHILDRENS", subtitle:"Best & Less published their supplier lists ", authar:"Cheyenne Curtis", raised:"8,354", days:"75"},
];

const FundCard = () => {
    return (
        <>
            {cardBlog.map((item, index)=>(
                <div className="col-xl-6 m-b30" key={index}>
                    <div className="dz-card style-2 ">
                        <div className="dz-media">
                            <Link to="/club-detail"><img src={item.image} alt="" /></Link>
                        </div>
                        <div className="dz-info">
                            <ul className="dz-category">
                                <li><Link to={"#"}>{item.title}</Link></li>
                            </ul>
                            <h5 className="dz-title"><Link to={"fundraiser-detail"}>{item.subtitle}</Link></h5>
                            <div className="progress-bx style-1">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-secondary progress-bar-striped progress-bar-animated" style={{width: item.progres}}></div>
                                </div>
                                <ul className="progress-tag">
                                    <li className="raised">
                                        <i className="las la-coins"></i> <span>Total Raised $ {item.raised}</span>
                                    </li>
                                    <li className="goal">
                                        <i className="lar la-calendar"></i> <span>{item.days} Days left</span>
                                    </li>
                                </ul> 
                            </div>
                            <div className="author-wrappper">
                                <div className="author-media">
                                    <img src={item.image2} alt="" /> 
                                </div>
                                <div className="author-content">
                                    <div className="author-head">
                                        <h6 className="author-name">{item.authar}</h6>
                                        <ul className="rating-list">
                                            <li><i className="fa fa-star"></i></li>
                                            {" "}<li><i className="fa fa-star"></i></li>
                                            {" "}<li><i className="fa fa-star"></i></li>
                                            {" "}<li><i className="fa fa-star gray-light"></i></li>
                                            {" "}<li><i className="fa fa-star gray-light"></i></li>
                                        </ul>
                                    </div>
                                    <ul className="author-meta">
                                        <li className="campaign">12 Campaign</li>
                                        <li className="location">New York, London</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}   
        </>
    );  
};

export default FundCard;