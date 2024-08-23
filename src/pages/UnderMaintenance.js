import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../assets/images/logo.png';
import shape1 from '../assets/images/pattern/shape1.png';
import shape2 from '../assets/images/pattern/shape2.png';
import shape3 from '../assets/images/pattern/shape3.png';
import shape4 from '../assets/images/pattern/shape4.png';

const UnderMaintenance = () => {
    return (
        <>
            <div className="under-construction overlay-white-dark background-luminosity" style={{backgroundImage:"url(" + require("../assets/images/background/bg5.jpg") +")", backgroundPosition: "center"}}>
		
                <div className="inner-construction">
                
                    <div className="logo-header clearfix">
                        <Link to={"/"}><img src={logo} alt="" /></Link>
                    </div>
                    <h1 className="dz-head">Site Is Down<br />For Maintenance</h1>
                    <p>This is the Technical Problems Page.<br/> Or any other page.</p>
                    
                    <svg className="shape-1 move-2" viewBox="0 0 187 559" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M158 245C71.6 224.2 -50.6667 146.333 -101 110V497C95.8 534.6 153.667 344.667 158 245Z" fill="#ffd22f"/>
                        <path d="M-113 2C-12 190 292.675 -12.9435 143 241C54 392 93 529 -100 556" stroke="#ff7468" strokeWidth="6"/>
                    </svg>
                    
                    <svg className="shape-2 rotating" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.2">
                        <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="#D54400"/>
                        <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="#D54400"/>
                        <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="#D54400"/>
                        <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="#D54400"/>
                        </g>
                    </svg>
                    
                    <svg className="shape-10 rotating" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.2">
                        <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="#D54400"/>
                        <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="#D54400"/>
                        <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="#D54400"/>
                        <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="#D54400"/>
                        </g>
                    </svg>
                    
                    <svg className="shape-3" viewBox="0 0 482 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 3C53.9035 88.8689 116.283 185.582 247.28 195.034C333.831 201.279 435.198 155.222 489 277" stroke="#ff7468" strokeWidth="8"/>
                        <path d="M343.949 87.7759C238.291 82.6 232.707 40.9079 204 3H483V202C463.517 120.839 430.681 92.0248 343.949 87.7759Z" fill="#ffd22f"/>
                    </svg>
                    
                    <svg className="shape-4" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_528_342" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="95">
                            <circle cx="47.5" cy="47.5" r="47" fill="#D9D9D9" stroke="#3B6FF5"/>
                        </mask>
                        <g mask="url(#mask0_528_342)">
                            <path d="M35.0444 -64.7866L-48.7213 55.2218" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M85.0977 -11.8818L1.33193 108.127" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M43.3867 -55.969L-40.379 64.0394" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M93.4399 -3.06445L9.67421 116.944" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M51.729 -47.1516L-32.0367 72.8568" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M101.782 5.75317L18.0165 125.762" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M60.0708 -38.3342L-23.6949 81.6742" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M110.125 14.5706L26.3588 134.579" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M68.4136 -29.5166L-15.3522 90.4918" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M118.467 23.3882L34.7011 143.397" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M76.7554 -20.6992L-7.01036 99.3092" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M39.2153 -60.3779L-44.5504 59.6305" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M89.269 -7.47339L5.50331 112.535" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M47.5576 -51.5605L-36.2081 68.4479" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M97.6113 1.34424L13.8456 121.353" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M55.8999 -42.7429L-27.8658 77.2655" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M105.953 10.1619L22.1874 130.17" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M64.2422 -33.9255L-19.5235 86.0829" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M114.296 18.979L30.5302 138.987" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M72.5845 -25.1082L-11.1813 94.9003" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M122.638 27.7964L38.872 147.805" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M80.9268 -16.2908L-2.83897 103.718" stroke="#F7CF47" strokeWidth="2" strokeLinecap="round"/>
                        </g>
                    </svg>
                    
                    <svg className="shape-9 move-2" viewBox="0 0 95 393" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 153.397C60.3799 138.853 145.825 84.4055 181 59V329.604C43.468 355.895 3.02832 223.087 0 153.397Z" fill="#D54400"/>
                        <path d="M212 2C141.176 133.668 -72.4699 -8.46584 32.4863 169.386C94.8953 275.141 67.5475 371.09 202.884 390" stroke="#F7CF47" strokeWidth="6"/>
                    </svg>

                    <img src={shape1} className="shape-5 move-2" alt="shape"/>
                    <img src={shape2} className="shape-6 move-2" alt="shape"/>
                    <img src={shape3} className="shape-7 move-5" alt="shape"/>
                    <img src={shape4} className="shape-8 move-2" alt="shape"/>
                    
                    <svg className="shape-11" viewBox="0 0 482 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M489 276C439.096 190.131 376.717 93.4177 245.72 83.9658C159.169 77.7208 57.8022 123.778 3.99999 2" stroke="#F7CF47" strokeWidth="8"/>
                        <path d="M149.051 191.224C254.709 196.4 260.293 238.092 289 276H10V77C29.4832 158.161 62.3188 186.975 149.051 191.224Z" fill="#D54400"/>
                    </svg>

                </div>

            </div>   
        </>
    );
};

export default UnderMaintenance;