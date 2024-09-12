/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//images
import signature from "./../assets/images/about/signature.png";
import bg4 from "./../assets/images/background/bg4.jpg";
import NewsSlider from "../components/Home/NewsSlider";
import OurMission from "../components/OurMission";
import { IMAGES } from "../constant/theme";
import axios from "axios";
const iconBlog = [{ title: "Trusted Partner" }, { title: "Responsibility" }];
const wrapperBlog = [
  { icon: "flaticon-vr-glasses", title: "Quo Maxime Qui Impedit Odio Soluta" },
  {
    icon: "flaticon-transformation",
    title: "Ut Nisi Ea Vero Itaque Error Magnam",
  },
  { icon: "flaticon-doctor-bag", title: "Quaerat Nobis Est" },
  { icon: "flaticon-open-book", title: "Deleniti Iure Ipsa Eos Eaque Under" },
];

const AboutUs = () => {
  const api_url = process.env.REACT_APP_INVEST_MAP_API;
  const [about, setAbout] = useState(null);
  const getAbout = async () => {
    try {
      const response = await axios.get(`${api_url}/api/about-us/`, {
        headers: {
          "Accept-Language": "en",
        },
      });
      const data = response?.data;
      setAbout(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAbout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!about || about.length === 0) {
    return <p className="text-center py-5">Data not found</p>;
  }
  return (
    <>
      <div className="page-content bg-white">
        <section className="content-inner section-wrapper5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="section-head">
                  <h5 className="sub-title">Who We Are</h5>
                  <h2>{about[0]?.title}</h2>
                  <p className="m-t20">{about[0]?.description}</p>
                </div>
                {iconBlog.map((data, index) => (
                  <div
                    className="icon-bx-wraper box-hover style-2 m-b30"
                    key={index}
                  >
                    <div className="icon-lg">
                      <Link to={"/services-details"} className="icon-cell">
                        <i className="flaticon-shield"></i>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-tilte m-b5 text-capitalize">
                        {data.title}
                      </h5>
                      <p>
                       This partner is dependable and acts in the
                        best interests of their associates or clients, fostering
                        long-term, mutually beneficial collaborations based on
                        trust, transparency, and shared goals. They deliver on
                        promises, maintain open communication, and are always
                        available to provide support, guidance, and solutions
                        when needed.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-5 m-b30">
                <div className="dz-media">
                  <img src={`${api_url}${about[0]?.image}`} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="content-inner-2 overlay-primary-dark about-wrapper2 bg-img-fix"
          style={{
            backgroundImage: "url(" + bg4 + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="about-bx2">
              <div className="row g-0">
                <div className="col-lg-4">
                  <div className="dz-media">
                    <img src={about} alt="image" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="dz-info">
                    <h2 className="title m-b30 m-md-b20">
                      Fundraising is the gentle art of teaching the joy of
                      giving
                    </h2>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim exercitation ullamco laboris nisi
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                    <div className="signature">
                      <img src={signature} alt="image" />
                      <p className="text-dark m-t15 mb-0">William Durant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner">
          <div className="container">
            <div className="section-head text-center">
              <h5 className="sub-title">CATEGORIES</h5>
              <h2 className="m-b20">Why choose Akcel</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis no
              </p>
            </div>
            <div className="row">
              {wrapperBlog.map((item, ind) => (
                <div className="col-lg-6 col-md-12 col-sm-12" key={ind}>
                  <div className="icon-bx-wraper box-hover style-2 m-b30">
                    <div className="icon-lg">
                      <Link to={"/services-details"} className="icon-cell">
                        <i className={item.icon}></i>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-tilte m-b10 text-capitalize">
                        {item.title}
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do labore et dolore magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="content-inner-2 bg-light section-pattren1">
          <div className="container">
            <div className="row about-bx3 align-items-center">
              <OurMission />
            </div>
          </div>
          <img src={IMAGES.Shape1} className="shape-1 move-1" alt="shape" />
          <img src={IMAGES.Shape2} className="shape-2 move-2" alt="shape" />
          <img src={IMAGES.Shape3} className="shape-3 move-1" alt="shape" />
          <img src={IMAGES.Shape5} className="shape-4 rotating" alt="shape" />
          <img src={IMAGES.Shape6} className="shape-5 rotating" alt="shape" />
          <img src={IMAGES.Shape6} className="shape-6 rotating" alt="shape" />
        </section>
        <section className="content-inner-2">
          <div className="container mb-5">
            <div className="section-head text-center">
              <h2 className="title">Akcel News</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <NewsSlider />
          </div>
        </section>
        
      </div>
    </>
  );
};

export default AboutUs;
