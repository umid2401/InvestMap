// import React, { useState, useContext, useEffect } from "react";
//images


//Layouts

//componenet
import Mainslider2 from "../components/Home2/Mainslider2";
import ServiceBlog from "../components/Home2/ServiceBlog";
import FaqComponent from "../components/FaqComponent";
import ContactComponent from "../components/ContactComponent";
import RaisingBlog from "../components/RaisingBlog";


const Home2 = () => {

  const accordBlog = [
    { title: "How do I start raising funds on Investmap?", 
      answer:"To get started, sign up on the Investmap platform and submit your project. Our team will review your project, and once approved, it will be listed on the platform for investors to view and invest in." },
    { title: "How long does the fundraising process take?",
      answer:"The duration of the fundraising process varies depending on factors such as the attractiveness of your project, investor interest, and the amount of funding required. Typically, it can take anywhere from a few weeks to several months."
     },
    { title: " How are investors selected?",
      answer:" Investmap has thousands of individual investors and clubs on the platform. They review your project and decide whether to invest. The more compelling your project is, the faster you are likely to secure investments."
     },
    { title: " Are there any fees involved in raising funds?",
      answer:"Using the Investmap platform is free, but once your fundraising is successful, transaction or commission fees may apply. The fee amount depends on the size of the project and other investor-related factors."
     },
    { title: " What happens if my project is rejected?",
      answer:" If your project is rejected, our expert team will provide feedback on how to improve it and guide you on re-submitting it to increase its chances of approval."
     },
    { title: " What kind of support can I get during the fundraising process?",
      answer:"The Investmap team is available to assist you every step of the way. From preparing your project to managing investor relationships and funds, our 24/7 support service is always available to help."
     },
    { title: " How are funds disbursed?",
      answer:"Once the funds are secured, they are disbursed in stages based on predefined KPIs or milestones. The release of funds will depend on the progress of your project."
     },
  ];
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
                  <RaisingBlog/>
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
                  {/* <h5 className="sub-title text-white">JOIN US</h5> */}
                  <h2 className="title text-white">We help your raise founds </h2>
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
                        placeholder="Project name"
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

        <FaqComponent accordBlog={accordBlog}/>
        <ContactComponent/>
        
      </div>

    </>
  );
};

export default Home2;
