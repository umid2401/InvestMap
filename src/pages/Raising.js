// import React, { useState, useContext, useEffect } from "react";
//images


//Layouts

//componenet
import Mainslider2 from "../components/Home2/Mainslider2";
// import { Link } from "react-router-dom";
import ServiceBlog from "../components/Home2/ServiceBlog";
import FaqComponent from "../components/FaqComponent";
import ContactComponent from "../components/ContactComponent";


const Home2 = () => {
//   const { changeBackground, changePrimaryColor } = useContext(ThemeContext);
//   useEffect(() => {
//     changeBackground({
//       value: "data-typography-1",
//       label: "data-typography-1",
//     });
//     changePrimaryColor("color-skin-2");
//   }, []);

  
  return (
    <>
      <div className="page-content bg-white">
        <div className="main-bnr-one">
          <Mainslider2 />
        </div>
        <section className="clearfix">
          <div className="container">
            <div
              className="content-inner "
             
            >
              <div className="container">
                <div
                  className="section-head text-center wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  
                  <h2 className="title">How it works?</h2>
                </div>
                <div className="row justify-content-center">
                  <ServiceBlog />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="content-inner"
          style={{ background: "darkturquoise" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-head">
                  <h5 className="sub-title text-white">JOIN US</h5>
                  <h2 className="title text-white">We Need Your Help</h2>
                </div>
              </div>
              <div className="col-lg-9">
                <form className="dzForm">
                  <div className="dzFormMsg"></div>
                  <input
                    type="hidden"
                    className="form-control"
                    name="dzToDo"
                    value="Contact"
                  />
                  <input
                    type="hidden"
                    className="form-control"
                    name="reCaptchaEnable"
                    value="0"
                  />

                  <div className="row g-4">
                    <div className="col-md-4 col-sm-6">
                      <input
                        name="dzFirstName"
                        required=""
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <input
                        name="dzLastName"
                        required=""
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <input
                        name="dzEmail"
                        required=""
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <input
                        name="dzPhoneNumber"
                        required=""
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <input
                        name="dzMessage"
                        required=""
                        type="text"
                        className="form-control"
                        placeholder="Your Message"
                      />
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="btn btn-dark btn-block h-100"
                      >
                        Submit Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <FaqComponent/>
        <ContactComponent/>
        
      </div>

    </>
  );
};

export default Home2;
