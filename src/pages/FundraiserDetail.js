import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Form, InputGroup, Row, Tab, Table, Tabs } from "react-bootstrap";
//Images
import avat1 from "../assets/images/avatar/avatar1.jpg";
import avat2 from "../assets/images/avatar/avatar2.jpg";
import avat3 from "../assets/images/avatar/avatar3.jpg";
import avat4 from "../assets/images/avatar/avatar4.jpg";
import GallerySlider from "../components/Fundraiser/GallerySlider";
// import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { CommentBlog } from "../components/BlogDetailsLeftBar";
import { Element } from "react-scroll";
import axios from "axios";
SwiperCore.use([Navigation, Pagination, Autoplay]);
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const FundraiserDetail = () => {
  const [selectedOption, setSelectedOption] = useState("charts");
  const [activeSection, setActiveSection] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [pitchData, setPitchData] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    // Check if the target date is already stored in localStorage
    let targetDate = localStorage.getItem("targetDate");

    if (!targetDate) {
      // If no target date is stored, save the current deadline (12th September)
      targetDate = new Date("2024-09-12T00:00:00").toString();
      localStorage.setItem("targetDate", targetDate);
    }

    const interval = setInterval(() => {
      const now = new Date();
      const difference = new Date(targetDate) - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // const sections = [
  //   {
  //     id: "section1",
  //     name: "Problem",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 1",
  //   },
  //   {
  //     id: "section2",
  //     name: "Soluttions",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 2",
  //   },
  //   {
  //     id: "section3",
  //     name: "Market size",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 3",
  //   },
  //   {
  //     id: "section4",
  //     name: "Target customer",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 4",
  //   },
  //   {
  //     id: "section5",
  //     name: "Name 5",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 5",
  //   },
  //   {
  //     id: "section6",
  //     name: "How it works",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 6",
  //   },
  //   {
  //     id: "section7",
  //     name: "Special souce",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 7",
  //   },
  //   {
  //     id: "section8",
  //     name: "Team",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 8",
  //   },
  //   {
  //     id: "section9",
  //     name: "Why now ",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 9",
  //   },
  //   {
  //     id: "section10",
  //     name: "Business model ",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 10x",
  //   },
  //   {
  //     id: "section11",
  //     name: "Competitors ",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 10x",
  //   },
  //   {
  //     id: "section12",
  //     name: "Tractions ",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 10x",
  //   },
  //   {
  //     id: "section13",
  //     name: "Financial acqusitions ",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 10x",
  //   },
  //   {
  //     id: "section14",
  //     name: "Technology ",
  //     image: "https://via.placeholder.com/100",
  //     text: "Text 10x",
  //   },
  // ];
  
  useEffect(() => {
    const handleScroll = () => {
      pitchData.forEach(([key]) => {
        const section = document.getElementById(key);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            setActiveSection(key);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pitchData]);
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const data = {
    labels: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun"],
    datasets: [
      {
        label: "Sotuvlar",
        data: [30, 20, 50, 40, 60, 80],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const getPitchData = () => {
    axios
      .get("http://api.investmap.uz/api/project/visible/",
        {
          headers: {
            'Accept-Language': 'en-US,en;q=0.9', // Til sarlavhasi
            // Qo'shimcha sarlavhalar qo'shishingiz mumkin
          }
        }
      )
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          // Sectionsni tekshirib olish
          const sections = res?.data?.[0]?.pitchdeck_sections?.[0]?.sections;
          console.log(res.data)
          if (sections && typeof sections === "object") {
            const resdata = Object.entries(sections);
            setPitchData(resdata);
          } else {
            console.error("Sections undefined yoki null qiymatga ega.");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPitchData();
  }, []);

  return (
    <>
      <div className="page-content bg-white">
        {/* <PageBanner maintitle="Fundraiser" pagetitle="Fundraiser Detail" background={bg}/> */}
        <section className="content-inner-2">
          <div className="container">
            <div className="row d-flex ">
              <div className="col-xl-8 col-lg-8 m-b30 ">
                <div className="">
                  <div className="swiper fundraiser-gallery-wrapper">
                    <GallerySlider />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4">
                <aside className="side-bar">
                  <div
                    style={{
                      backgroundColor: "whitesmoke",
                      padding: "20px 20px",
                      borderRadius: "10px",
                    }}
                    className=" style-1 widget_fund"
                  >
                    <h3 className="title"> {`UZS 45000000`} </h3>
                    <p>
                      raised of <span>uzs 50,00,000</span> goal
                    </p>
                    <div className="progress-bx style-1">
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-secondary progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <ul className="detail">
                      <li className="d-flex gap-1 align-align-items-end">
                        <h5 className="m-0 p-0 ">Supporters:</h5>
                        <span>2422</span>
                      </li>
                      <li className="d-flex">
                        <h5 className="m-0 p-0"> Days left:</h5>
                        <span className="ms-2">52</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card border-1 rounded-3 py-2  mb-2 mt-3 d-flex ">
                    <div className="d-flex justify-content-center">
                      <div
                        className="mx-1 text-center"
                        style={{ minWidth: "70px" }}
                      >
                        <h3 className="text-danger m-0 fs-4">
                          {timeLeft.days}
                        </h3>
                        <small className="m-0">days</small>
                      </div>
                      <div className="align-self-center mx-1 fs-2">:</div>
                      <div
                        className="mx-1 text-center"
                        style={{ minWidth: "70px" }}
                      >
                        <h3 className="text-danger m-0 fs-4">
                          {timeLeft.hours}
                        </h3>
                        <small>hours</small>
                      </div>
                      <div className="align-self-center mx-1 fs-2">:</div>
                      <div
                        className="mx-1 text-center"
                        style={{ minWidth: "70px" }}
                      >
                        <h3 className="text-danger m-0 fs-4">
                          {timeLeft.minutes}
                        </h3>
                        <small>minutes</small>
                      </div>
                      <div className="align-self-center mx-1 fs-2">:</div>
                      <div
                        className="mx-1 text-center"
                        style={{ minWidth: "70px" }}
                      >
                        <h3 className="text-danger m-0 fs-4">
                          {timeLeft.seconds}
                        </h3>
                        <small>seconds</small>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <p className="text-left">How much do you hope to invest?</p>
                    <InputGroup
                      className="mb-3  py-0"
                      style={{ fontSize: "0.875rem" }}
                    >
                      <Form.Control
                        style={{ padding: "0rem 1rem" }}
                        aria-label="Dollar amount (with dot and two decimal places)"
                      />
                      <InputGroup.Text
                        style={{
                          backgroundColor: "whitesmoke",
                          padding: "0.25rem 0.5rem",
                        }}
                      >
                        $
                      </InputGroup.Text>
                      <InputGroup.Text
                        style={{ backgroundColor: "whitesmoke" }}
                      >
                        0.00
                      </InputGroup.Text>
                    </InputGroup>
                    <button
                      type="button"
                      className="btn btn-primary  my-0 btn-lg py-2 border-3 w-100 text-center"
                    >
                      Pul tikish
                    </button>
                  </div>

                  {/* <!-- Fundraiser Post --> */}
                  {/* <div className="widget style-1 recent-posts-entry">
                                        <div className="widget-title">
                                            <h5 className="title">Fundraiser Post</h5>
                                        </div>	
                                        <div className="widget-post-bx">
                                            {postBlog.map((data, ind)=>(
                                                <div className="widget-post clearfix" key={ind}>
                                                    <div className="dz-media"> 
                                                        <img src={data.image} alt="" />
                                                    </div>
                                                    <div className="dz-info">
                                                        <h6 className="title"><Link to={"/blog-details"}>{data.title}</Link></h6>
                                                        <div className="dz-meta">
                                                            <ul>
                                                                <li className="post-date"><i className="flaticon-placeholder"></i> Coimbatore</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div> */}

                  {/* <!-- Fundraising Team --> */}
                  {/* <div className="widget style-1 widget_avatar">
                                        <div className="widget-title">
                                            <h5 className="title">Fundraising Team</h5>
                                        </div>
                                        <div className="avatar-wrapper">
                                            {teamBlog.map((data, ind)=>(
                                                <div className="avatar-item" key={ind}>
                                                    <div className="avatar-media"> 
                                                        <img src={data.image} alt="" />
                                                    </div>
                                                    <div className="avatar-info">
                                                        <h6 className="title"><Link to={"#"}>{data.title}</Link></h6>
                                                    </div>
                                                </div>
                                            ))}                                            
                                        </div>
                                    </div> */}

                  {/* <!-- Top Donors --> */}
                  {/* <div className="widget style-1 widget_avatar">
                                        <div className="widget-title">
                                            <h5 className="title">Top Donors</h5>
                                        </div>
                                        <div className="avatar-wrapper">
                                            {donorsBlog.map((item, ind)=>(
                                                <div className="avatar-item" key={ind}>
                                                    <div className="avatar-media"> 
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                    <div className="avatar-info">
                                                        <h6 className="title"><Link to={"#"}>{item.title}</Link></h6>
                                                        <span className="donors-item">{item.price}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div> */}
                </aside>
              </div>
            </div>
            <div className="row my-5 ">
            
              <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3"
                justify
              >
                <Tab eventKey="home" title="Pitchdesk">
                  <Tab.Container
                    style={{ position: "relative" }}
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <div style={{ position: "relative" }}>
                      <nav
                        style={{
                          width: "300px",
                          float: "left",
                          height: "100vh",
                          position: "sticky",
                          top: "100px",
                          bottom: "0",
                          overflowY: "auto",
                          backgroundColor: "#f8f9fa",
                        }}
                      >
                        <ul
                          style={{
                            listStyleType: "none",
                            padding: "0",
                            margin: "0",
                          }}
                        >
                          {/* {pitchData &&
                            pitchData.map(([key, value]) => (
                              <div key={key}>
                                <h2>{key}</h2>
                                <p>{value.description}</p>
                                <img src={value.image} alt={key} />
                              </div>
                            ))} */}
                          {pitchData && pitchData?.map(([key, value]) => (
                            <li
                              key={key}
                              style={{
                                padding: "10px",
                                backgroundColor:
                                  activeSection === key
                                    ? "#dcdcdc"
                                    : "transparent",
                              }}
                            >
                             
                              <Link
                                to={key}
                                spy="true"
                                smooth="true"
                                duration={500}
                                offset={-50}
                              >
                                {value.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                      <div style={{ marginLeft: "300px", padding: "20px" }}>
                        {pitchData&&pitchData.map(([key, value]) => (
                          
                          <Element
                            key={key}
                            name={value.name}
                            id={key}
                            className="section"
                            style={{
                              padding: "10px 20px",

                              marginBottom: "10px",
                            }}
                          >
                            <div className="w-100">

                            <img
                              src={`http://api.investmap.uz${value.image}`}
                              alt={value.name}
                              style={{ width: "100%", height: "300px" }}
                            />
                            </div>
                            <p className="my-3">{value.description}</p>
                          </Element>
                        ))}
                      </div>
                    </div>
                  </Tab.Container>
                </Tab>
                <Tab eventKey="description" title="Description">
                  Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Transaction">
                  <Form>
                    <Form.Group as={Row} className="d-flex">
                      <Col sm={10} className="d-flex gap-3">
                        <Form.Check
                          type="radio"
                          label="Charts"
                          name="radioGroup"
                          value="charts"
                          id="radio-charts"
                          checked={selectedOption === "charts"}
                          onChange={handleOptionChange}
                        />
                        <Form.Check
                          type="radio"
                          label="All"
                          name="radioGroup"
                          value="all"
                          id="radio-all"
                          checked={selectedOption === "all"}
                          onChange={handleOptionChange}
                        />
                        <Form.Check
                          type="radio"
                          label="Me"
                          name="radioGroup"
                          value="me"
                          id="radio-me"
                          checked={selectedOption === "me"}
                          onChange={handleOptionChange}
                        />
                      </Col>
                    </Form.Group>
                    {selectedOption === "charts" && (
                      <div>
                        <h3>Bar Diagramma</h3>
                        <Bar data={data} />
                      </div>
                    )}
                  </Form>
                </Tab>
                <Tab eventKey="longer-tab" title="Comments">
                  <div className="clear" id="comment-list">
                    <div className="comments-area" id="comments">
                      <div className="widget-title style-1">
                        <h4 className="title">Comments</h4>
                      </div>
                      <div className="clearfix">
                        <ol className="comment-list">
                          <li className="comment">
                            <CommentBlog
                              title="Celesto Anderson"
                              image={avat1}
                            />
                            <ol className="children">
                              <li className="comment odd parent"></li>
                              <CommentBlog title="Jake Johnson" image={avat2} />
                            </ol>
                          </li>
                          <li className="comment">
                            <CommentBlog title="John Doe" image={avat3} />
                          </li>
                          <li className="comment">
                            <CommentBlog
                              title="Celesto Anderson"
                              image={avat4}
                            />
                          </li>
                        </ol>
                        <div className="comment-respond" id="respond">
                          <div className="widget-title style-1">
                            <h4 className="title" id="reply-title">
                              Leave Your Comment
                              <small>
                                <Link
                                  to={"#"}
                                  style={{ display: "none" }}
                                  id="cancel-comment-reply-link"
                                  rel="nofollow"
                                >
                                  Cancel reply
                                </Link>
                              </small>
                            </h4>
                          </div>
                          <form className="comment-form" id="commentform">
                            <p className="comment-form-author">
                              <label htmlFor="author">
                                Name <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="Author"
                                placeholder="Author"
                                id="author"
                              />
                            </p>
                            <p className="comment-form-email">
                              <label htmlFor="email">
                                Email <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                id="email"
                              />
                            </p>
                            <p className="comment-form-comment">
                              <label htmlFor="comment">Comment</label>
                              <textarea
                                rows="8"
                                name="comment"
                                placeholder="Comment"
                                id="comment"
                              ></textarea>
                            </p>
                            <p className="form-submit">
                              <button
                                type="submit"
                                className="btn btn-primary"
                                id="submit"
                              >
                                SUBMIT
                              </button>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="investor" title="Investor">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        {Array.from({ length: 4 }).map((_, index) => (
                          <th key={index}>Table heading</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                      <tr>
                        <td>2</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                      <tr>
                        <td>3</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey="documents" title="Documents">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        {Array.from({ length: 4 }).map((_, index) => (
                          <th key={index}>Table heading</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                      <tr>
                        <td>2</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                      <tr>
                        <td>3</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey="updates" title="Updates">
                  Tab content for Home
                </Tab>
              </Tabs>
            </div>
          </div>
        </section>
      
      </div>
      {/* <Modal className="modal fade modal-wrapper" id="modalRefer" show={referModal} onHide={setReferModal} centered>               
                <div className="modal-header">
                    <h5 className="modal-title">Refer a Friend</h5>
                    <button type="button" className="btn-close" onClick={()=>setReferModal(false)}><i className="flaticon-close"></i></button>
                </div>
                <div className="modal-body">
                    <form className="dz-form contact-bx" method="POST">
                        <div className="form-group style-1 align-items-center">
                            <label className="form-label">Name</label>
                            <div className="input-group">
                                <input name="dzName" required="" type="text" className="form-control" placeholder="Jakob Bothman" />
                            </div>
                        </div>
                        <div className="form-group style-1 align-items-center">
                            <label className="form-label">Email address</label>
                            <div className="input-group">
                                <input name="dzEmail" required="" type="text" className="form-control" placeholder="marseloque@mail.com" />
                            </div>
                        </div>
                        <div className="form-group style-1 align-items-center">
                            <label className="form-label">Phone Number</label>
                            <div className="input-group">
                                <input name="dzPhoneNumber" type="number" className="form-control" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="form-group mb-0 text-center">
                            <button name="submit" type="submit" value="Submit" className="btn btn-primary">Refer Now</button>
                        </div>
                    </form>
                </div>
            </Modal>
            <Modal className="modal fade modal-wrapper" id="modalDonate" show={modalDonate} onHide={setModalDonate} > 
                <div className="modal-header">
                    <h5 className="modal-title">Choose a donation amount</h5>
                    <button type="button" className="btn-close" onClick={()=>setModalDonate(false)}><i className="flaticon-close"></i></button>
                </div>
                <div className="modal-body">
                    <form action="index.html">
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
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                $1000
                                            </label>
                                        </div>
                                    </div>
                                    <div className="donate-categories">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                $2000
                                            </label>
                                        </div>
                                    </div>
                                    <div className="donate-categories">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault4">
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
            </Modal> */}
    </>
  );
};

export default FundraiserDetail;
