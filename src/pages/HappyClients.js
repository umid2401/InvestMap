import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';

import PageBanner from '../layouts/PageBanner';
//images
import bg from './../assets/images/banner/bnr2.jpg';
import test1 from './../assets/images/testimonials/large/pic1.jpg';
import test2 from './../assets/images/testimonials/large/pic2.jpg';
import test3 from './../assets/images/testimonials/large/pic3.jpg';
import test4 from './../assets/images/testimonials/large/pic1.jpg';
import shape1 from './../assets/images/pattern/shape1.png';
import shape2 from './../assets/images/pattern/shape2.png';
import shape3 from './../assets/images/pattern/shape3.png';
import shape5 from './../assets/images/pattern/shape5.png';
import shape6 from './../assets/images/pattern/shape6.png';

function LeftImage({sideimage, paraModal}){
    
    return(
        <>
            <div className="col-lg-10 m-b50">
                <div className="testimonial-3">
                    <div className="testimonial-media">
                        <img src={sideimage} alt="" />
                    </div>
                    <div className="testimonial-content">
                        <h5 className="testimonial-title">Heroes like you helped my son<br/> win his battle.</h5>
                        <p className="testimonial-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, or randomised words which <Link to={"#"} onClick={()=>paraModal(true)} >Read More</Link></p>
                        <div className="testimonial-info">
                            <div className="quotes">
                                <i className="fa-solid fa-quote-left"></i>
                            </div>
                            <div className="clearfix">
                                <h5 className="testimonial-name">Lindsay S.</h5>
                                <span className="testimonial-position">Community Engagement</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function RightImage({mainImage, paraModal}){
    return(
        <>
            <div className="col-lg-10 offset-lg-2 m-b50">
                <div className="testimonial-3 right">
                    <div className="testimonial-content">
                        <h5 className="testimonial-title">Heroes like you helped my son<br/> win his battle.</h5>
                        <p className="testimonial-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, or randomised words which <Link to={"#"} onClick={()=>paraModal(true)}>Read More</Link></p>
                        <div className="testimonial-info">
                            <div className="quotes">
                                <i className="fa-solid fa-quote-left"></i>
                            </div>
                            <div className="clearfix">
                                <h5 className="testimonial-name">Lindsay S.</h5>
                                <span className="testimonial-position">Community Engagement</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-media">
                        <img src={mainImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

const HappyClients = () => {
    const [paraModal, setParaModal] = useState(false);

    // const showModal = () =>{
    //     setParaModal(true);
    // }
    const hideModal = () =>{
        setParaModal(false);
    }

    return (
        <>
            <div className="page-content bg-white">
                <PageBanner maintitle="Home" pagetitle="Happy Clients" background={bg}/>
                <section className="content-inner bg-light section-pattren1">
                    <div className="container">
                        <div className="row">
                            <LeftImage  paraModal={setParaModal} sideimage={test1}/>
                            <RightImage paraModal={setParaModal} mainImage={test2}/>
                            <LeftImage  paraModal={setParaModal} sideimage={test3}/>
                            <RightImage paraModal={setParaModal} mainImage={test4}/>
                            <LeftImage  paraModal={setParaModal} sideimage={test2}/>                       
                        </div>
                    </div>
                    <img src={shape1} className="shape-1 move-1" alt="shape"/>
                    <img src={shape2} className="shape-2 move-2" alt="shape"/>
                    <img src={shape3} className="shape-3 move-1" alt="shape"/>
                    <img src={shape5} className="shape-4 rotating" alt="shape"/>
                    <img src={shape6} className="shape-5 rotating" alt="shape"/>
                    <img src={shape6} className="shape-6 rotating" alt="shape"/>
                </section>
            </div>
            <Modal className="modal fade modal-wrapper" id="read" show={paraModal} onHide={hideModal} centered> 
                <div className="modal-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </Modal>
        </>
    );
};



export default HappyClients;