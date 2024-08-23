import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import BanerLogoSlider from "./../components/Home/BanerLogoSlider";
import PartnershipSlider from "./../components/Home/PartnershipSlider";
import TestimonialSlider from "./../components/Home/TestimonialSlider";
import CounterBlog from "./../components/Home/CounterBlog";
import NewsSlider from "./../components/Home/NewsSlider";
import DonateModal from "./../components/Modal/DonateModal";
import ServiceBlog from "../components/Home2/ServiceBlog";
import ThreeStepBlog from "../components/Home2/ServiceBlog";
import TrendingSlider from "../components/Home2/TrendingSlider";
//images
import main from "./../assets/images/main-slider/pic1.png";
import bg10 from "../assets/images/background/bg10.png";
import sideimage from "../assets/images/side-images/pic1.png";
import shape3 from "../assets/images/side-images/shape3.png";
import shape1 from "../assets/images/pattern/shape1.png";

import shape5 from "../assets/images/pattern/shape5.png";
import shape6 from "../assets/images/pattern/shape6.png";

import { IMAGES } from "../constant/theme";
import { Accordion } from "react-bootstrap";

const Home = () => {
  const modalRef = useRef();
  const { changeBackground, changePrimaryColor } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "default", label: "default" });
    changePrimaryColor("color-skin-1");
  }, []);
  //Accord const
  const accordBlog = [
    { title: "Cras turpis felis, elementum sed mi at arcu ?" },
    { title: "Vestibulum nibh risus, in neque eleifendulputate ?" },
    { title: "Donec maximus, sapien id auctor ornare ?" },
  ];
  const cardBlog = [
    {
      title: "Trusted Partner",
      subtitle: "394-091-3312",
      icon: "flaticon-phone-call-1",
    },
    { title: "Mail", subtitle: "support@akcel.com", icon: "flaticon-email" },
    {
      title: "Our Address",
      subtitle: "832  Thompson Drive, San Fransisco, United States",
      icon: "flaticon-pin",
    },
  ];
  return (
    <>
      <div className="page-content bg-white">
        <div className="banner-one">
          <div className="container">
            <div className="row banner-inner">
              <div className="col-lg-8 col-md-7">
                <div className="banner-content">
                  <h5 className="sub-title text-primary">Crowdfunding</h5>
                  <h1 className="title">
                    We Help Surface Innovations In Technology
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip
                  </p>
                  <Link
                    to={"/about-us"}
                    className="btn btn-secondary btnhover2 m-r15"
                  >
                    Learn More{" "}
                    <i className="flaticon-right-arrows ms-3 scale1"></i>
                  </Link>
                  <Link
                    to={"#"}
                    className="btn btn-light"
                    onClick={() => {
                      modalRef.current.handleModalOpen();
                    }}
                    data-bs-target="#modalDonate"
                  >
                    Donate
                  </Link>
                  <BanerLogoSlider />
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="banner-media">
                  <img src={main} className="main-img" alt="" />
                  <div className="dz-media">
                    <img src={IMAGES.Shape} className="main-img" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="dz-shape">
              <img src={IMAGES.Shape1} className="shape-1 move-2" alt="shape" />
              <img src={IMAGES.Shape2} className="shape-2 move-2" alt="shape" />
              <img src={IMAGES.Shape1} className="shape-3 move-2" alt="shape" />
              <img src={IMAGES.Shape2} className="shape-4 move-2" alt="shape" />
            </div>
          </div>
        </div>
        <div className="counter-wrapper-1 content-inner-3">
          <div className="container">
            <div className="counter-inner bg-secondary">
              <div className="row">
                <CounterBlog />
              </div>
              <img src={IMAGES.Pattren1} className="pattren1 move-2" alt="" />
              <img src={IMAGES.Pattren2} className="pattren2 move-2" alt="" />
              <img src={IMAGES.Pattren3} className="pattren3 move-2" alt="" />
              <img src={IMAGES.Pattren4} className="pattren4 move-2" alt="" />
              <img src={IMAGES.Pattren5} className="pattren5 move-2" alt="" />
              <img src={IMAGES.Pattren6} className="pattren6 move-2" alt="" />
            </div>
          </div>
        </div>
        <section className="clearfix">
          <div className="container-fluid">
            <div
              className="content-inner bg-gray"
              style={{
                backgroundImage: "url(" + bg10 + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <div
                  className="section-head text-center wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <h5 className="sub-title">Services</h5>
                  <h2 className="title">Why Akcel</h2>
                </div>
                <div className="row justify-content-center">
                  <ServiceBlog />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner-1 section-wrapper3 ">
          <div className="container">
            <div className="section-head text-center">
              <h6 className="sub-title">START YOUR FUNDRAISER</h6>
              <h2 className="title">
                Start A Fundraiser In Three
                <br /> Simple Steps
              </h2>
            </div>
            <div className="row justify-content-center">
              <ThreeStepBlog />
            </div>
            <div
              className="text-center btn-bottom wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <Link to={"/browse-fundraiser"} className="btn btn-primary">
                Start your fundraiser
              </Link>
            </div>
            <img src={sideimage} alt="images" className="img-1" />
            <img src={shape3} alt="images" className="img-2" />
          </div>
        </section>
        <section className="clearfix section-wrapper7">
          <div className="container-fluid">
            <div
              className="content-inner bg-gray section-inner"
              style={{
                backgroundImage: "url(" + bg10 + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="section-head text-center">
                <h5 className="sub-title">LATEST CAUSES</h5>
                <h2>Trending Fundraisers</h2>
              </div>
              <TrendingSlider />
              <div
                className="text-center m-t30 m-b30 wow fadeInUp"
                data-wow-delay="1.0s"
              >
                <Link to={"/browse-fundraiser"} className="btn btn-primary">
                  View All Causes
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="clients-wrapper wow fadeInUp" data-wow-delay="0.2s">
          <div className="container">
            <div className="section-head text-center">
              <h4 className="title">Our Partnership</h4>
            </div>
            <PartnershipSlider />
          </div>
        </section>
        <section className="testimonial-wrapper1 content-inner">
          <div
            className="section-head text-center wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h2 className="title">Testimonials</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <TestimonialSlider />
        </section>
        <section className="content-inner-2 section-pattren1">
          <div className="container">
            <div
              className="section-head text-center wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h2 className="title">Akcel News</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <NewsSlider />
          </div>
          <img src={IMAGES.Shape2} className="shape-6 move-2" alt="shape" />
          <img src={IMAGES.Shape3} className="shape-5 move-1" alt="shape" />
          <img src={IMAGES.Shape5} className="shape-1 rotating" alt="shape" />
          <img src={IMAGES.Shape1} className="shape-3 move-1" alt="shape" />
          <img src={IMAGES.Shape6} className="shape-4 rotating" alt="shape" />
          <img src={IMAGES.Shape6} className="shape-2 rotating" alt="shape" />
        </section>
        <section className="flex justify-content-center my-5 overflow-hidden">
          <div className="container">
            <div className="w-100 align-self-center mx-auto ">
              <div className="section-head m-b30">
                <h2 className="title text-center">What Is Akcel ?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <Accordion
                className="accordion dz-accordion accordion-sm"
                id="accordionFaq1"
              >
                {accordBlog.map((item, index) => (
                  <Accordion.Item
                    className="accordion-item"
                    key={index}
                    eventKey={index}
                  >
                    <Accordion.Header as="h2" id="headingOne1">
                      {item.title}
                      <span className="toggle-close"></span>
                    </Accordion.Header>
                    <div
                      id="collapseOne1"
                      className="accordion-collapse "
                      eventKey={index}
                    >
                      <Accordion.Body>
                        <p className="m-b0">
                          Vestibulum nibh risus, lobortis in neque eleifend,
                          varius vulputate sem. Donec maximus, sapien id auctor
                          ornare, odio mi luctus massa, id rhoncus velit purus
                          eu turpis onec aliquet mauris est.
                        </p>
                      </Accordion.Body>
                    </div>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        <section className="content-inner-1 bg-light section-pattren1">
          <div className="container">
            <div className="row justify-content-center">
              {cardBlog.map((item, ind) => (
                <div className="col-lg-4 col-md-6 m-b20" key={ind}>
                  <div className="icon-bx-wraper box-hover style-3">
                    <div className="icon-lg">
                      <Link to={"/services-details"} className="icon-cell">
                        <i className={item.icon}></i>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-tilte m-b5 text-capitalize">
                        {item.title}
                      </h5>
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img src={shape1} className="shape-1 move-1" alt="shape" />
          <img src={shape3} className="shape-3 move-1" alt="shape" />
          <img src={shape5} className="shape-4 rotating" alt="shape" />
          <img src={shape6} className="shape-5 rotating" alt="shape" />
        </section>
        
      </div>

      {/* Modals */}
      {/* <Modal className="modal fade modal-wrapper" id="modalDonate" show={donateModal} onHide={setDonateModal} centered> 
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Choose a donation amount</h5>
                        <button type="button" className="btn-close" onClick={()=>setDonateModal(false)}><i className="flaticon-close"></i></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e)=>FormSubmit(e)}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="tag-donate style-1">
                                        <div className="donate-categories">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    $500
                                                </label>
                                            </div>
                                        </div>
                                        <div className="donate-categories">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked  />
                                                <label className="form-check-label" htmlFo="flexRadioDefault2">
                                                    $1000
                                                </label>
                                            </div>
                                        </div>
                                        <div className="donate-categories">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                                                <label className="form-check-label" htmlFo="flexRadioDefault3">
                                                    $2000
                                                </label>
                                            </div>
                                        </div>
                                        <div className="donate-categories">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" defaultChecked />
                                                <label className="form-check-label" htmlFo="flexRadioDefault4">
                                                    $5000
                                                </label>
                                            </div>
                                        </div>
                                        <p>Most Donors donate approx <span>$1000</span> to this Fundraiser</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label">Other Amount</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control"  placeholder="Other Amount" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label">Name</label>
                                        <div className="input-group">
                                            <input name="dzName" required="" type="text" className="form-control" placeholder="Jakob Bothman" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label">Email address</label>
                                        <div className="input-group">
                                            <input name="dzEmail" required type="text" className="form-control" placeholder="info@mail.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label">Phone Number</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label">Address</label>
                                        <div className="input-group">
                                            <input required type="text" className="form-control" placeholder="Address" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label">Pancard</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" placeholder="Pancard" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mb-0 text-center">
                                        <button name="submit" type="submit" value="Submit" className="btn btn-primary btn-block">Proceed To Pay</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>                
            </Modal> */}
      <DonateModal ref={modalRef} />
    </>
  );
};
export default Home;
