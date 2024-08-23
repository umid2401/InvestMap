import React from 'react';
import {Link} from 'react-router-dom';

import bg from '../assets/images/background/bg2.jpg';

const Error = () => {
    return (
        <>
            <div className="error-page" style={{backgroundImage: "url("+ bg + ")"}}>
                <div className="error-inner text-center">
                    <div className="dz-error">404</div>
                    <h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
                    <Link to={"/"} className="btn btn-secondary">BACK TO HOMEPAGE</Link>
                </div>
            </div>
        </>
    );
};


export default Error;