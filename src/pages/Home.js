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

import { IMAGES } from "../constant/theme";
import FaqComponent from "../components/FaqComponent";
import ContactComponent from "../components/ContactComponent";


const Home = () => {
  const modalRef = useRef();
  const { changeBackground, changePrimaryColor } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "default", label: "default" });
    changePrimaryColor("color-skin-1");
  }, []);
  //Accord const
  
  
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
        <FaqComponent/>
        <ContactComponent/>
      </div>

       </>
  );
};
export default Home;
