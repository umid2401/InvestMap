import React from 'react';
import {useNavigate} from 'react-router-dom';

//layouts
import PageBanner from '../layouts/PageBanner';
import bnr1 from './../assets/images/banner/bnr1.jpg';
import bg10 from './../assets/images/background/bg10.jpg';

const AskQuestion = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("#");
    }
    return (
        <>
            <div className="page-content bg-white">
                <PageBanner maintitle="Home" pagetitle="Ask A Question" background={bnr1}/>
            </div>
            <section className="content-inner-1 gradient-white" style={{backgroundImage:"url("+ bg10 +")", backgroundPosition: "center"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-md-9 col-sm-12">
                            <div className="form-wrapper style-2">
                                <h2 className="title">Write us a message</h2>
                                <div className="contact-area">
                                    <form className="dz-form dzForm contact-bx" onSubmit={(e)=>handleSubmit(e)}> 
                                        <div className="dzFormMsg"></div>
                                        <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                        <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                    
                                        <div className="row sp15">
                                            <div className="col-md-12">
                                                <label className="form-label">Full Name</label>
                                                <div className="input-group">
                                                    <input name="dzName" required type="text" className="form-control" placeholder="Marchelo Queque" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label">Email address</label>
                                                <div className="input-group">
                                                    <input name="dzEmail" required type="text" className="form-control" placeholder="marseloque@mail.com" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label">Phone Number</label>
                                                <div className="input-group">
                                                    <input name="dzPhoneNumber" required type="text" className="form-control" placeholder="832141251" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label">Message</label>
                                                <div className="input-group">
                                                    <textarea name="dzMessage" rows="5" required className="form-control" placeholder="Dear Sir/Madam"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12 m-b20">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Accept terms & conditions
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button name="submit" type="submit" value="Submit" className="btn btn-secondary effect">SEND</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default AskQuestion;