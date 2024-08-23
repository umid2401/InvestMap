import React from 'react';


import FooterCommonData from './FooterCommonData';

import logo_new1 from './../assets/images/logo_new1.png';
import shape7 from './../assets/images/pattern/shape7.png';
import shape8 from './../assets/images/pattern/shape8.png';
import shape9 from './../assets/images/pattern/shape9.png';

const Footer = () => {
    return (
        <>
            <footer className="site-footer style-1" id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <FooterCommonData logoImage={logo_new1} />
                        </div>
                    </div>
                    <img src={shape7} className="shape-1 move-2" alt="shape" />
                    <img src={shape8} className="shape-2 move-2" alt="shape" />
                    <img src={shape9} className="shape-3 move-2" alt="shape" />
                    
                </div>               
                <div className="footer-bottom">
                    <div className="container">
                        <div className="text-center"> 
                            <span className="copyright-text">Copyright © 2023 <a href="https://dexignzone.com/" target="_blank"  rel="noreferrer">DexignZone</a>. All rights reserved.</span> 
                        </div>
                    </div>
                </div>
            </footer>  
        </>
    );
};


export default Footer;