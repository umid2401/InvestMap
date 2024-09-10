/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

import PageBanner from "./../layouts/PageBanner";
import bgImage from "./../assets/images/banner/bnr4.jpg";
import project3 from "./../assets/images/project/pic3.jpg";
import project2 from "./../assets/images/project/pic2.jpg";
import project6 from "./../assets/images/project/pic6.jpg";
import UpdateBlog from "../components/Home/UpdateBlog";
import axios from "axios";
const accordBlog = [
  { title: "Cras turpis felis, elementum sed mi at arcu ?" },
  { title: "Vestibulum nibh risus, in neque eleifendulputate ?" },
  { title: "Donec maximus, sapien id auctor ornare ?" },
];

const Faq = () => {
  const api_url = process.env.REACT_APP_INVEST_MAP_API;
  const [faqData, setFaqData] = useState(null);
  const getFaqData = async () => {
    try {
      const response = await axios.get(`${api_url}/api/faqs/`);
      const data = response?.data;
      setFaqData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFaqData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!faqData || faqData.length === 0) {
    return <p>Data not found</p>;
  }

  //////////////////////////////////////
  function isScrolledIntoView(elem) {
    const spliBox = document.querySelectorAll(elem);
    spliBox.forEach(myFunction);
    function myFunction(item, index) {
      const docViewTop = window.scrollY;
      const docViewBottom = docViewTop + window.innerHeight;
      let elemTop = item.getBoundingClientRect().top + docViewTop;
      const elemBottom = elemTop + item.offsetHeight;
      if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
        item.classList.add("split-active");
      }
    }
  }
  window.addEventListener("scroll", () => {
    isScrolledIntoView(".split-box");
  });
  return (
    <>
      <div className="page-content bg-white">
       
        <section className="content-inner">
          <div className="container">
            <div className="row align-items-center flex-column-reverse flex-lg-row">
              <div className="col-lg-6 align-self-center">
                <div className="section-head m-b30">
                  <h2 className="title">Most Asked Questions</h2>
                  <p>
                    Investmap is a comprehensive platform designed to guide
                    users toward financial success. 
                  </p>
                </div>
                <Accordion
                  className="accordion dz-accordion accordion-sm"
                  id="accordionFaq1"
                >
                  {faqData &&
                    faqData.map((item, index) => (
                      <Accordion.Item
                        className="accordion-item"
                        key={index}
                        eventKey={index}
                      >
                        <Accordion.Header as="h2" id="headingOne1">
                          {item.question}
                          <span className="toggle-close"></span>
                        </Accordion.Header>
                        <div
                          id="collapseOne1"
                          className="accordion-collapse "
                          eventKey={index}
                        >
                          <Accordion.Body>
                            <p className="m-b0">{item?.answer}</p>
                          </Accordion.Body>
                        </div>
                      </Accordion.Item>
                    ))}
                </Accordion>
              </div>
              <div className="col-lg-6 order-lg-2 order-1 m-b30">
                <div className="dz-media split-box rounded">
                  <div>
                    <img src={project3} alt="FAQ Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="bg-light content-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 m-b30">
                                <div className="dz-media split-box rounded">
                                    <div>
                                        <img src={project2} alt="FAQ Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center m-b10">
                                <div className="section-head m-b30">
                                    <h2 className="title">My donation secure?</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <Accordion className="accordion dz-accordion accordion-sm" id="accordionFaq1">
                                    {accordBlog.map((item, index)=>(
                                        <Accordion.Item className="accordion-item" key={index} eventKey={index}>
                                            <Accordion.Header as="h2"  id="headingOne1">
                                                {item.title}
                                                <span className="toggle-close"></span>
                                            </Accordion.Header>
                                            <div id="collapseOne1" className="accordion-collapse " eventKey={index}>
                                                <Accordion.Body >
                                                    <p className="m-b0">Vestibulum nibh risus, lobortis in neque eleifend, varius vulputate sem. Donec maximus, sapien id auctor ornare, odio mi luctus massa, id rhoncus velit purus eu turpis onec aliquet mauris est.</p>
                                                </Accordion.Body>
                                            </div>
                                        </Accordion.Item>
                                    ))}

                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row align-items-center flex-column-reverse flex-lg-row">
                            <div className="col-lg-6 align-self-center">
                                <div className="section-head m-b30">
                                    <h2 className="title">Most Frequent Question</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <Accordion className="accordion dz-accordion accordion-sm" id="accordionFaq1">
                                    {accordBlog.map((item, index)=>(
                                        <Accordion.Item className="accordion-item" key={index} eventKey={index}>
                                            <Accordion.Header as="h2"  id="headingOne1">
                                                {item.title}
                                                <span className="toggle-close"></span>
                                            </Accordion.Header>
                                            <div id="collapseOne1" className="accordion-collapse " eventKey={index}>
                                                <Accordion.Body >
                                                    <p className="m-b0">Vestibulum nibh risus, lobortis in neque eleifend, varius vulputate sem. Donec maximus, sapien id auctor ornare, odio mi luctus massa, id rhoncus velit purus eu turpis onec aliquet mauris est.</p>
                                                </Accordion.Body>
                                            </div>
                                        </Accordion.Item>
                                    ))}

                                </Accordion>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 m-b30">
                                <div className="dz-media split-box rounded" >
                                    <div>
                                        <img src={project6} alt="FAQ Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
      
      </div>
    </>
  );
};

export default Faq;
