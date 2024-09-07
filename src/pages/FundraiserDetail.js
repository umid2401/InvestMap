import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
  const api_url = process.env.REACT_APP_INVEST_MAP_API;
  const token = localStorage.getItem("access_token");
  //steplar
  const [selectedOption, setSelectedOption] = useState("all");
  const [activeSection, setActiveSection] = useState("");
  const [timelimit, setTimelimit] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [description, setDescription] = useState(null);
  const [minamount, setMinamount] = useState(null);
  const [amount, setAmount] = useState(null);
  const [unique_investors_count, setUnique_investors] = useState(null);
  const [funding_goal, setFunding_goal] = useState(null);
  const [progress, setProgress] = useState(null);
  const [investor, setInvestor] = useState(null);
  const [allData, setAllData] = useState(null);
  const [imageData, setImageData] = useState({
    project_image: null,
    elevator_pitch_video: null,
    how_it_works_video: null,
  });
  // eslint-disable-next-line no-unused-vars
  const [pitchData, setPitchData] = useState(null);
  const [allTransaction, setAllTransaction] = useState(null);
  const [meTransaction, setMetransaction] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { id } = useParams();
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

  useEffect(() => {
    const handleScroll = () => {
      if (pitchData && Array.isArray(pitchData)) {
        pitchData.forEach(([key]) => {
          const section = document.getElementById(key);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
              setActiveSection(key);
            }
          }
        });
      } else {
        console.error("pitchData mavjud emas yoki noto'g'ri formatda.");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
  /////////////////////////////////////////////////
  const getPitchData = () => {
    axios
      .get(`http://api.investmap.uz/api/project/visible/${id}`, {
        headers: {
          "Accept-Language": "en-US,en;q=0.9",
        },
      })
      .then((res) => {
        if (res.status === 200 && res?.data?.length !== 0) {
          console.log(res);
          setAllData(res?.data);
          setInvestor(res?.data?.investors)
          const sections = res?.data?.pitchdeck_sections?.[0]?.sections;
          setTimelimit(res?.data?.deadline);
          setStartDate(res?.data?.start_date);
          setDescription(res?.data?.project_overview);
          setAmount(res?.data?.total_invested_amount);
          setMinamount(res?.data?.min_amount);
          setProgress(res?.data?.progress_bar);
          setFunding_goal(res?.data?.funding_goal);
          setUnique_investors(res?.data?.unique_investors_count);
          const { project_image, elevator_pitch_video, how_it_works_video } =
            res?.data;
          // Ma'lumotlarni state ichiga qo'shamiz
          setImageData({
            project_image: project_image || "No Image Available",
            elevator_pitch_video:
              elevator_pitch_video || "No Elevator Pitch Video",
            how_it_works_video: how_it_works_video || "No How It Works Video",
          });
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
  ////////////////////////////////////////////////
  const getAllTransaction = async () => {
    try {
      const response = await axios.get(
        `${api_url}/api/investor/transactions/all/`
      );
      const data = response?.data;
      setAllTransaction(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const getMeTransaction = async () => {
    try {
      const response = await axios.get(
        `${api_url}/api/investor/transactions/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response?.data;
      setMetransaction(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllTransaction();
    getMeTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  ////////////////////////////////////////////////
  const formatDate = (dateString) => {
    if (!dateString) return ""; // Agar dateString bo'sh bo'lsa, bo'sh string qaytaradi

    // Sana formatini to'g'ri qilish
    let formattedDateString;
    if (dateString.includes("/")) {
      // Agar sana / bilan bo'lingan bo'lsa (YYYY/MM/DD), ISO formatga o'zgartiring
      formattedDateString = dateString.replace(
        /(\d{4})\/(\d{2})\/(\d{2})/,
        "$1-$2-$3"
      );
    } else {
      formattedDateString = dateString;
    }

    const date = new Date(formattedDateString);

    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Oyni 2 raqamli formatda olish
    const day = String(date.getDate()).padStart(2, "0"); // Kunini 2 raqamli formatda olish

    return `${year}/${month}/${day}`;
  };
  const formattedDate = formatDate(startDate);
  useEffect(() => {
    getPitchData();
  }, []);
  if (!allTransaction || allTransaction.length === 0) {
    return <p>Loading or No data available...</p>;
  }
  if (!meTransaction || meTransaction.length === 0) {
    return <p>Loading or No data available...</p>;
  }
  const commonHeight = "2.5rem";
  const borderStyle = "1px solid #ced4da"; // Border color for the whole group
  const buttonBackground = "#28a745";
  const inputBorderRightOnly = "1px 0 0 1px #ced4da";
  const leftBorderStyle = {
    borderLeft: "1px 0 0 1px #ced4da",
    display: "block",
  };

  return (
    <>
      <div className="page-content bg-white">
        {/* <PageBanner maintitle="Fundraiser" pagetitle="Fundraiser Detail" background={bg}/> */}
        <section className="n">
          <div className="container">
            <div className="row d-flex ">
              <div className="col-xl-8 col-lg-8 mb-30 ">
                <div className="">
                  <div className="swiper fundraiser-gallery-wrapper">
                    <GallerySlider imageData={imageData} />
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
                    <h3 className="title"> {`UZS ${amount}`} </h3>
                    <p>
                      raised of <span>uzs {funding_goal}</span> goal
                    </p>
                    <div className="progress-bx style-1">
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-secondary progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: `${progress}%` }}
                        >
                          {progress}%
                        </div>
                      </div>
                    </div>
                    <p className="my-2">
                      Supporters:{" "}
                      <span className="mx-2">{unique_investors_count}</span>
                    </p>
                    {/* <ul className="detail">
                      <li className="d-flex gap-1 align-align-items-end">
                        <h5 className="m-0 p-0 ">Supporters:</h5>
                        <span>2422</span>
                      </li>
                      <li className="d-flex">
                        <h5 className="m-0 p-0"> Days left:</h5>
                        <span className="ms-2">52</span>
                      </li>
                      <li></li>
                    </ul> */}
                    <p className="my-2">
                      Start Date: <span className="mx-2">{formattedDate}</span>
                    </p>
                    <p className="my-2">
                      Min Amount: <span className="mx-2">{minamount}</span>
                    </p>
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
                    <div
                      className="input-group"
                      style={{ border: borderStyle, borderRadius: "0.25rem" }}
                    >
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Pul miqdorini kiriting"
                        style={{
                          height: commonHeight,
                          borderRadius: "0",
                          borderRight: inputBorderRightOnly,
                          outline: "none",
                        }}
                      />
                      <div
                        className="input-group-prepend border-left-red "
                        style={leftBorderStyle}
                      >
                        <span
                          className="input-group-text "
                          // style={{
                          //   height: commonHeight,
                          //   lineHeight: commonHeight,
                          //   borderRadius: "0",
                          //   borderRight: inputBorderRightOnly,
                          // }}
                        >
                          UZS
                        </span>
                      </div>

                      <div className="input-group-append">
                        <button
                          className="btn rounded-0 text-white"
                          type="button"
                          style={{
                            height: commonHeight,
                            backgroundColor: buttonBackground,
                            borderColor: buttonBackground,
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
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
                <Tab eventKey="description" title="Description">
                  <p>{description}</p>
                </Tab>
                <Tab eventKey="home" title="Pitchdeck">
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
                          {pitchData &&
                            pitchData?.map(([key, value]) => (
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
                        {pitchData &&
                          pitchData.map(([key, value]) => (
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

                <Tab eventKey="profile" title="Transaction">
                  <Form>
                    <Form.Group as={Row} className="d-flex">
                      <Col sm={10} className="d-flex gap-3">
                        {/* <Form.Check
                          type="radio"
                          label="Charts"
                          name="radioGroup"
                          value="charts"
                          id="radio-charts"
                          checked={selectedOption === "charts"}
                          onChange={handleOptionChange}
                        /> */}
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
                    {selectedOption === "all" && (
                      <div>
                        <Table responsive>
                          <thead>
                            <tr>
                              {/* Jadval sarlavhalarini dinamik ko'rsatish */}
                              {allTransaction.length > 0 && (
                                <>
                                  {Object.keys(allTransaction[0]).map(
                                    (key, index) => (
                                      <th key={index}>{key}</th>
                                    )
                                  )}
                                </>
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {allTransaction.map((transaction, index) => (
                              <tr key={index}>
                                <td>{transaction?.id}</td>
                                <td>{formatDate(transaction?.date)}</td>
                                <td>{transaction?.comment}</td>
                                <td>
                                  <a href={transaction?.invoice_file} className="download-link" target="blank">
                                    <i className="fa fa-download"></i> Download
                                    File
                                  </a>
                                  {/* <img
                                    style={{ width: "50px", height: "50px" }}
                                    src={transaction?.invoice_file}
                                    alt="Not found"
                                  /> */}
                                </td>
                                <td>{transaction?.amount}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    )}
                    {selectedOption === "me" && (
                      <div>
                        <p>All transaction</p>
                        <Table responsive>
                          <thead>
                            <tr>
                              {/* Jadval sarlavhalarini dinamik ko'rsatish */}
                              {allTransaction.length > 0 && (
                                <>
                                  {Object.keys(meTransaction[0]).map(
                                    (key, index) => (
                                      <th key={index}>{key}</th>
                                    )
                                  )}
                                </>
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {meTransaction.map((transaction, index) => (
                              <tr key={index}>
                                <td>{transaction?.id}</td>
                                <td>{formatDate(transaction?.date)}</td>
                                <td>{transaction?.comment}</td>
                                <td>
                                <a href={transaction?.invoice_file} className="download-link" target="blank">
                                    <i className="fa fa-download"></i> Download
                                    File
                                  </a>
                                </td>
                                <td>{transaction?.amount}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
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
                              <th>Id</th>
                              <th>Email</th>
                              <th>Firstname</th>
                              <th>Lastname</th>
                              
                              <th>Phone Number</th>
                              {/* {allTransaction.length > 0 && (
                                <>
                                  {Object.keys(allTransaction[0]).map(
                                    (key, index) => (
                                      <th key={index}>{key}</th>
                                    )
                                  )}
                                </>
                              )} */}
                            </tr>
                          </thead>
                          <tbody>
                            {investor&&investor.map((transaction, index) => (
                              <tr key={index}>
                                <td>{transaction?.id}</td>
                                <td>{transaction?.user?.email}</td>
                                <td>{transaction?.user?.first_name}</td>
                                <td>{transaction?.user?.last_name}</td> 
                                <td>{transaction?.user?.phone_number}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                </Tab>
                <Tab eventKey="documents" title="Documents">
                <Table responsive>
                          <thead>
                            <tr>
                              <th>Id</th>
                              <th>Filename</th>
                              <th>Source</th>
                              {/* Jadval sarlavhalarini dinamik ko'rsatish */}
                              {/* {allTransaction.length > 0 && (
                                <>
                                  {Object.keys(meTransaction[0]).map(
                                    (key, index) => (
                                      <th key={index}>{key}</th>
                                    )
                                  )}
                                </>
                              )} */}
                            </tr>
                          </thead>
                          <tbody>
                          
                            <tr>
                              <td>1</td>
                              <td>Business Plan</td>
                              <td>
                              <a href={allData?.business_plan} className="download-link" target="blank">
                                    <i className="fa fa-download"></i> Download
                                    File
                                  </a>
                              </td>
                             
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Financial Statements</td>
                              <td>
                              <a href={allData?.financial_statements} className="download-link" target="blank">
                                    <i className="fa fa-download"></i> Download
                                    File
                                  </a>
                              </td>
                             
                            </tr>
                            {/* {meTransaction.map((transaction, index) => (
                              <tr key={index}>
                                <td>{transaction?.id}</td>
                                <td>{formatDate(transaction?.date)}</td>
                                <td>{transaction?.comment}</td>
                                <td>
                                <a href={transaction?.invoice_file} className="download-link" target="blank">
                                    <i className="fa fa-download"></i> Download
                                    File
                                  </a>
                                </td>
                                <td>{transaction?.amount}</td>
                              </tr>
                            ))} */}
                          </tbody>
                        </Table>
                </Tab>
                {/* <Tab eventKey="updates" title="Updates">
                  Tab content for Home
                </Tab> */}
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
