/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import shape1 from "../assets/images/pattern/shape1.png";
import shape3 from "../assets/images/pattern/shape3.png";
import shape5 from "../assets/images/pattern/shape5.png";
import shape6 from "../assets/images/pattern/shape6.png";
import shape7 from "../assets/images/pattern/shape7.png";
import axios from "axios";
import { toast } from "react-toastify";
const ContactUs = () => {
  const api_url = process.env.REACT_APP_INVEST_MAP_API;
  const [card, setCard] = useState(null);
  const state ={
    first_name:"",
    last_name:"",
    email:"",
    phone_number:"",
    message:""
  }
  const [contactState, setContactstate] = useState(state);
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setContactstate({...contactState, [name]:value})
  }
  const getCard = async () => {
    try {
      const response = await axios.get(`${api_url}/api/contact-details/`);
      const data = response?.data;
      console.log(response);
      setCard(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const cardBlog = [
    {
      title: "Phone",
      subtitle: card?.phone_number1,
      icon: "flaticon-phone-call-1",
    },
    { title: "Mail", subtitle: card?.email1, icon: "flaticon-email" },
    {
      title: "Our Address",
      subtitle: card?.office_address,
      icon: "flaticon-pin",
    },
  ];
  const form = useRef();
  const sendEmail = async(e) => {
    e.preventDefault();
    try {
        const res = await axios.post(`${api_url}/api/contact-details/sendquestion/`, contactState);
        if(res.status===201){
            console.log("succes");
            toast.success("Succes")
            setContactstate(state)
        }
    } catch (error) {
        console.log(error)
    }
    e.target.reset();
  };

  return (
    <>
      <div className="page-content bg-white">
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
        <section className="content-inner map-wrapper1">
          <div className="container-fluid">
            <div className="map-iframe style-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14448.884443175983!2d75.81853095!3d25.128214449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f835fcc2a9e43%3A0x69e74069e551d77d!2sRajasthan%20Technical%20University%2C%20Kota!5e0!3m2!1sen!2sin!4v1645506412870!5m2!1sen!2sin"
                style={{ border: "0" }}
                                loading="lazy"
              ></iframe>
            </div>
            <div className="row justify-content-end">
              <div className="col-xl-6 col-lg-8 col-sm-12">
                <div className="contact-info form-wrapper style-1">
                  <h2 className="title">Write us a message</h2>
                  <div className="contact-area">
                    <form
                      className="dz-form dzForm contact-bx"
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <div className="dzFormMsg"></div>
                      <input
                        type="hidden"
                        className="form-control"
                        name="dzToDo"
                        value="Contact"
                      />
                      <div className="row sp15">
                        <div className="col-md-6">
                          <label className="form-label">First Name</label>
                          <div className="input-group">
                            <input
                              name="first_name"
                              required
                              type="text"
                              className="form-control"
                              placeholder="John"
                              value={contactState?.first_name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Last Name</label>
                          <div className="input-group">
                            <input
                              name="last_name"
                              required
                              type="text"
                              className="form-control"
                              placeholder="Deo"
                              value={contactState?.last_name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email address</label>
                          <div className="input-group">
                            <input
                              name="email"
                              required
                              type="email"
                              className="form-control"
                              placeholder="info@example.com"
                              value={contactState?.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Phone Number</label>
                          <div className="input-group">
                            <input
                              name="phone_number"
                              required
                              type="text"
                              className="form-control"
                              placeholder="987 654 3210"
                              value={contactState?.phone_number}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <label className="form-label">Message</label>
                          <div className="input-group">
                            <textarea
                              name="message"
                              rows="7"
                              required
                              className="form-control"
                              placeholder="Dear Sir/Madam"
                              value={contactState?.message}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-recaptcha">
                            {/* <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                        <input className="form-control d-none" style={{display:"none"}} data-recaptcha="true" required data-error="Please complete the Captcha" /> */}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            name="submit"
                            type="submit"
                            value="Submit"
                            className="btn btn-secondary"
                          >
                            Submit Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={shape5} className="shape-2 move-2" alt="shape" />
          <img src={shape7} className="shape-1 move-2" alt="shape" />
          <img src={shape6} className="shape-3 move-2" alt="shape" />
        </section>
      </div>
    </>
  );
};

export default ContactUs;
