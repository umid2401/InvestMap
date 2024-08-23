import React from 'react';

import  FooterCommonData from './FooterCommonData';
import {IMAGES} from '../constant/theme';

const Footer3 = () => {
    return (
        <>
            <footer className="site-footer style-3 background-luminosity overlay-black-dark" style={{backgroundImage: "url("+ IMAGES.SliderBg2 +")"}}>
                <div className="footer-subscribe-wrapper">
                    <div className="container">
                        <div className="wrapper-inner">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-9 wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="title text-white m-b0">Don’t miss our weekly updates about donations</h2>
                                </div>
                                <div className="col-xl-6 col-lg-9 wow fadeInUp" data-wow-delay="0.4s">
                                    <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                        <div className="dzSubscribeMsg text-white"></div>
                                        <div className="input-group">
                                            <input name="dzEmail" required="required" type="email" className="form-control transparent m-r20" placeholder="Enter your email address..." />
                                            <button name="submit" value="Submit" type="submit" className="btn btn-primary">
                                                <span>SUBSCRIBE</span>
                                                <i className="fa-solid fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                           <FooterCommonData logoImage={IMAGES.logoWhite3} iconStyle={true}/>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="text-center">
                            <span className="copyright-text">Akcel Crowdfunding & Charity Website  -  © 2023 by <a href="https://dexignzone.com/" target="_blank">DexignZone</a></span> 
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer3;