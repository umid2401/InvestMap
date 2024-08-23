import React from 'react';
import {Link} from 'react-router-dom';

const PageBanner = ({maintitle, pagetitle, background}) => {
    return (
        <>
            <div className="dz-bnr-inr dz-bnr-inr-sm style-1 text-center overlay-primary-dark" style={{backgroundImage:"url("+ background + ")"}}>
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>{pagetitle}</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={"/"}>{maintitle}</Link></li>
                                <li className="breadcrumb-item active">{pagetitle}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};


export default PageBanner;