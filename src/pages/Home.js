import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import BanerLogoSlider from "./../components/Home/BanerLogoSlider";
import PartnershipSlider from "./../components/Home/PartnershipSlider";
import TestimonialSlider from "./../components/Home/TestimonialSlider";
import CounterBlog from "./../components/Home/CounterBlog";
import NewsSlider from "./../components/Home/NewsSlider";
import DonateModal from "./../components/Modal/DonateModal";
import ServiceBlog from "../components/Home2/ServiceBlog";
import TrendingSlider from "../components/Home2/TrendingSlider";
//images
import main from "./../assets/images/main-slider/pic1.png";
import bg10 from "../assets/images/background/bg10.png";
import sideimage from "../assets/images/side-images/pic1.png";
import shape3 from "../assets/images/side-images/shape3.png";

import { IMAGES } from "../constant/theme";
import FaqComponent from "../components/FaqComponent";
import ContactComponent from "../components/ContactComponent";
import { Dropdown } from "react-bootstrap";
import ThreestepBlog from "../components/Home2/ThreestepBlog";
import axios from "axios";


const Home = () => {
  const modalRef = useRef();
  const { changeBackground, changePrimaryColor } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "default", label: "default" });
    changePrimaryColor("color-skin-1");
  }, []);
  //Accord const
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(event.target.value);
    const apiUrl = value
      ? `http://api.investmap.uz/api/project/search/?search=${value}`
      : "http://api.investmap.uz/api/project/visible/";

    // axios
    //   .get(`${apiUrl}`, {
    //     responseType: "json",
    //   })
    //   .then((res) => {
    //     if (res.data && res.data.length === 0) {
    //       setNotfound(true);
    //     } else {
    //       setChildData(res.data);
    //       console.log(childData);
    //       setNotfound(false);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("salom");
    // axios
    //   .get(`http://api.investmap.uz/api/project/search/?search=${query}`, {
    //     responseType: "json",
    //   })
    //   .then((res) => {
    //     if (res.data && res.data.length === 0) {
    //       console.log("No results found");
    //     } else {
    //       setChildData(res.data);
    //       console.log(childData);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const handelCategory = (category) => {
    setCategory(category);
    // axios
    //   .get(`http://api.investmap.uz/api/project/search/?category=${category}`)
    //   .then((res) => {
    //     if (res.data && res.data.length === 0) {
    //         console.log("No results found");
    //         setNotfound(true)
    //       } else {
    //         setChildData(res.data);
    //         console.log(childData);
    //         setNotfound(false)
    //       }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const [category, setCategory] = useState("All Category");
  const [blog, setBlog] = useState(null);
  const api_url = process.env.REACT_APP_INVEST_MAP_API;
  const getData = async()=>{
    try {
      const res = await axios.get(`${api_url}/api/blog`);
      if(res){
        setBlog(res?.data);
        console.log(res);
      }
      else{
        console.log("Data not found")
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  const accordBlog =[
    {
      "title": "What is Investmap and how does it work?",
      "answer": "Investmap is a platform that connects startups with potential investors. Startup owners can submit their projects for funding, and investors can browse these projects and choose the ones they want to invest in."
    },
    {
      "title": "How do I join Investmap as an investor or a startup?",
      "answer": "Whether you are an investor or a startup, the registration process is simple. You just need to sign up, complete your profile, and you'll be able to start exploring investment opportunities or submitting projects for funding."
    },
    {
      "title": "Is there a minimum investment requirement?",
      "answer": "The minimum investment amount depends on each startup's project. Investors can see the minimum required investment on each project page, allowing them to invest according to their budget."
    },
    {
      "title": "How do startups get selected for funding on Investmap?",
      "answer": "Startups submit their projects to the platform, and each submission is reviewed by our expert team. Once approved, the project is listed for investors to view and invest in."
    },
    {
      "title": "What types of startups can raise funds on Investmap?",
      "answer": "Investmap welcomes a wide range of startups from various industries. Whether you're in tech, health, education, or another sector, you can submit your project for potential funding."
    },
    {
      "title": "How safe is my investment on Investmap?",
      "answer": "Investmap ensures transparency and security in all transactions. We perform thorough reviews of all listed startups, and funds are distributed based on project milestones, ensuring that investments are protected."
    },
    {
      "title": "Can I track the progress of my investment?",
      "answer": "Yes, as an investor, you can track the progress of your investments through your dashboard. You'll receive updates on project milestones and funding progress in real-time."
    },
    {
      "title": "What happens if a startup doesn’t reach its funding goal?",
      "answer": "If a startup doesn’t reach its funding goal within the set timeframe, the funds collected may be returned to the investors depending on the agreement, or the startup can choose to re-launch the campaign."
    },
    {
      "title": "Are there any fees for using Investmap?",
      "answer": "Startups are charged a small commission when they successfully raise funds. For investors, there are no direct fees for using the platform, although transaction fees may apply depending on the payment method."
    },
    {
      "title": "How does Investmap support startups and investors?",
      "answer": "Investmap offers 24/7 support for both startups and investors. We provide guidance on project submission, investment strategies, and help manage funds throughout the fundraising process."
    }
  ]
  
  return (
    <>
      <div className="page-content bg-white">
        {/* <div className="banner-one">
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
        </div> */}
      <div className="page-content bg-white">
      <div className="find-bx-wrapper " style={{ marginTop: "90px", marginBottom:"30px"}}>
        <div className="container-fluid">
            <div className="find-bx bg-white">
              <form>
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="">
                      <Dropdown className="select-drop-2">
                        <Dropdown.Toggle
                          as="div"
                          className="i-false select-drop-btn-2"
                        >
                          <span>{category===""?"All Category":category}</span>
                          <i className="fa-regular fa-angle-down"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={() => handelCategory("")}
                          >
                          All Category
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handelCategory("Technology")}
                          >
                            Technology
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handelCategory("Health & Medicine")}
                          >
                           Health
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handelCategory("Financial Technology")}
                          >
                            Financial Technology
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handelCategory("Education")}
                          >
                            Education
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handelCategory("E-commerce")}
                          >
                            E-commerce
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handelCategory("Green Technology")}
                          >
                            Green Technology
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handelCategory("Real Estate")}
                          >
                            Real Estate
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handelCategory("Transportation & Logistics")}
                          >
                            Transportation & Logistics
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handelCategory("Media & Entertainment")}
                          >
                            Media & Entertainment
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handelCategory("Food &Beverage")}
                          >
                            Food &Beverage
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handelCategory("Social Impact")}
                          >
                            Social Impact
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handelCategory("Consumer products")}
                          >
                           Consumer Products
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <div className="input-group">
                      <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Find Projects"
                      />
                      <div className="input-group-prepend">
                        <button onClick={handleSearch} className="btn">
                          <i className="las la-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* <div className="tag-list">
              <span className="title text-black">Popular Search:</span>
              <Link to={"#"}>Technology,</Link>
              <Link to={"#"}>Charity,</Link>
              <Link to={"#"}>Health,</Link>
              <Link to={"#"}>Medical</Link>
            </div> */}
          </div>
        </div>
        </div>
        <section className="clearfix section-wrapper7">
          <div className="container-fluid">
            <div
              className="content-inner bg-gray section-inner"
              // style={{
              //   backgroundImage: "url(" + bg10 + ")",
              //   backgroundSize: "cover",
              //   backgroundRepeat: "no-repeat",
              //   backgroundPosition: "center",
              // }}
            >
              <div className="section-head text-center">
                {/* <h5 className="sub-title">LATEST CAUSES</h5> */}
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
                  <h2 className="title">Why Investmap platform</h2>
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
                Start A Fundraiser In Four
                <br /> Simple Steps
              </h2>
            </div>
            <div className="row justify-content-center">
              <ThreestepBlog />
            </div>
            <div
              className="text-center btn-bottom wow fadeInUp"
              data-wow-delay="0.8s"
            >
              {/* <Link to={"/browse-fundraiser"} className="btn btn-primary">
                Start your fundraiser
              </Link> */}
            </div>
            {/* <img src={sideimage} alt="images" className="img-1" />
            <img src={shape3} alt="images" className="img-2" /> */}
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
        
          </div>
          <TestimonialSlider />
        </section>
        <section className="content-inner-2 section-pattren1">
          <div className="container">
            <div
              className="section-head text-center wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h2 className="title">News</h2>
             
            </div>
            <NewsSlider blog={blog} />
          </div>
          <img src={IMAGES.Shape2} className="shape-6 move-2" alt="shape" />
          <img src={IMAGES.Shape3} className="shape-5 move-1" alt="shape" />
          <img src={IMAGES.Shape5} className="shape-1 rotating" alt="shape" />
          <img src={IMAGES.Shape1} className="shape-3 move-1" alt="shape" />
          <img src={IMAGES.Shape6} className="shape-4 rotating" alt="shape" />
          <img src={IMAGES.Shape6} className="shape-2 rotating" alt="shape" />
        </section>
        <FaqComponent accordBlog={accordBlog}/>
        <ContactComponent/>
      </div>

       </>
  );
};
export default Home;
