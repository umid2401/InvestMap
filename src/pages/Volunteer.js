import React from 'react';
import {Link} from 'react-router-dom';

import PageBanner from './../layouts/PageBanner';
import UpdateBlog from '../components/Home/UpdateBlog';

import bg from './../assets/images/banner/bnr2.jpg';
import team1 from './../assets/images/team/team1.jpg';
import team2 from './../assets/images/team/team2.jpg';
import team3 from './../assets/images/team/team3.jpg';
import team4 from './../assets/images/team/team4.jpg';
import team5 from './../assets/images/team/team5.jpg';
import team6 from './../assets/images/team/team6.jpg';
import team7 from './../assets/images/team/team7.jpg';
import team8 from './../assets/images/team/team8.jpg';
import team9 from './../assets/images/team/team9.jpg';
import team10 from './../assets/images/team/team10.jpg';
import team11 from './../assets/images/team/team11.jpg';
import team12 from './../assets/images/team/team12.jpg';

const cardDataBlog = [
    {image:team1, title:"Kaylynn Donin", subtitle:"Managing Director"},
    {image:team2, title:"Jakob Bothman", subtitle:"District Accounts Analyst"},
    {image:team3, title:"Lindsey Botosh", subtitle:"National Web Assistant"},
    {image:team4, title:"Phillip Schleifer", subtitle:"National Intranet Specialist"},
    {image:team5, title:"Adam Jordon", subtitle:"Managing Director"},
    {image:team6, title:"Hawkins Junior", subtitle:"District Accounts Analyst"},
    {image:team7, title:"Johan Lee", subtitle:"National Web Assistant"},
    {image:team8, title:"Richard Hartisona", subtitle:"National Intranet Specialist"},
    {image:team9, title:"Lee Jordon", subtitle:"Managing Director"},
    {image:team10, title:"Jakob Bothman", subtitle:"District Accounts Analyst"},
    {image:team11, title:"Sarah Albert", subtitle:"National Web Assistant"},
    {image:team12, title:"Cheyenne Curtis", subtitle:"National Intranet Specialist"},
];

const Volunteer = () => {
    return (
        <>
            <div className="page-content bg-white">
                <PageBanner  maintitle="Home" pagetitle="Volunteer"  background={bg}/>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            {cardDataBlog.map((item, ind)=>(
                                <div className="col-xl-3 col-lg-4 col-sm-6" key={ind}>
                                    <div className="dz-team style-1 m-b30">
                                        <div className="dz-media">
                                            <Link to={"/instructor"}><img src={item.image} alt="" /></Link>
                                            <ul className="team-social">
                                                <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="fab fa-facebook-f"></a></li>
                                                <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="fab fa-instagram"></a></li>
                                                <li><a href="https://twitter.com/" target="_blank" rel="noreferrer" className="fab fa-twitter"></a></li>
                                            </ul>
                                        </div>
                                        <div className="dz-content">
                                            <h5 className="dz-name">{item.title}</h5>
                                            <span className="dz-position text-primary">{item.subtitle}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
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

export default Volunteer;