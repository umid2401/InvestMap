import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

//images
import pic1 from "../../assets/images/project/pic1.jpg";
import pic2 from "../../assets/images/project/pic2.jpg";
import pic3 from "../../assets/images/project/pic3.jpg";
import pic4 from "../../assets/images/project/pic4.jpg";
import pic5 from "../../assets/images/project/pic5.jpg";
import pic6 from "../../assets/images/project/pic6.jpg";
import pic7 from "../../assets/images/project/pic7.jpg";
import pic8 from "../../assets/images/project/pic8.jpg";
import pic9 from "../../assets/images/project/pic9.jpg";
import pic10 from "../../assets/images/project/pic10.jpg";
import pic11 from "../../assets/images/project/pic11.jpg";
import pic12 from "../../assets/images/project/pic12.jpg";

import avat1 from "../../assets/images/avatar/avatar1.jpg";
import avat2 from "../../assets/images/avatar/avatar2.jpg";
import avat3 from "../../assets/images/avatar/avatar3.jpg";
import avat4 from "../../assets/images/avatar/avatar4.jpg";
import avat5 from "../../assets/images/avatar/avatar5.jpg";
import avat6 from "../../assets/images/avatar/avatar6.jpg";
import avat7 from "../../assets/images/avatar/avatar7.jpg";
import avat8 from "../../assets/images/avatar/avatar8.jpg";
import avat9 from "../../assets/images/avatar/avatar9.jpg";
import axios from "axios";

const ProjectMasonry = ({ childData, notfound }) => {
  //   const [data, setData] = useState(null);
  const cardData = [
    {
      cardid: "3",
      image: pic1,
      image2: avat1,
      progres: "75%",
      title: "EDUCATION",
      subtitle: "New vaccine for cattle calf loss learned",
      authar: "Cheyenne Curtis",
      raised: "3,542",
      days: "43",
    },
    {
      cardid: "4",
      image: pic2,
      image2: avat2,
      progres: "85%",
      title: "TECHNOLOGY",
      subtitle: "He Created the Web. Now He’s Out to Remake",
      authar: "Kaylynn Donin",
      raised: "35,542",
      days: "63",
    },
    {
      cardid: "1",
      image: pic3,
      image2: avat3,
      progres: "70%",
      title: "FOOD",
      subtitle: "4 Things parents learned for they jids in 2020",
      authar: "Adam Jordon",
      raised: " 2,542",
      days: "23",
    },
    {
      cardid: "4",
      image: pic4,
      image2: avat4,
      progres: "40%",
      title: "FRIENDS",
      subtitle: "Partnering to create a community",
      authar: "Kaylynn Donin",
      raised: "6,542",
      days: "35",
    },
    {
      cardid: "3",
      image: pic5,
      image2: avat5,
      progres: "30%",
      title: "HEALTH",
      subtitle: "Primary School Build for Children",
      authar: "Richard Hart",
      raised: "1,542",
      days: "47",
    },
    {
      cardid: "1",
      image: pic6,
      image2: avat6,
      progres: "50%",
      title: "CHILDRENS",
      subtitle: "Best & Less published their supplier lists ",
      authar: "Cheyenne Curtis",
      raised: "8,354",
      days: "75",
    },
    {
      cardid: "4",
      image: pic7,
      image2: avat7,
      progres: "75%",
      title: "EDUCATION",
      subtitle: "New vaccine for cattle calf loss learned",
      authar: "Cheyenne Curtis",
      raised: "3,542",
      days: "43",
    },
    {
      cardid: "1",
      image: pic8,
      image2: avat8,
      progres: "85%",
      title: "TECHNOLOGY",
      subtitle: "He Created the Web. Now He’s Out to Remake",
      authar: "Kaylynn Donin",
      raised: "35,542",
      days: "63",
    },
    {
      cardid: "3",
      image: pic9,
      image2: avat9,
      progres: "70%",
      title: "FOOD",
      subtitle: "4 Things parents learned for they jids in 2020",
      authar: "Adam Jordon",
      raised: " 2,542",
      days: "23",
    },
    {
      cardid: "1",
      image: pic10,
      image2: avat4,
      progres: "40%",
      title: "FRIENDS",
      subtitle: "Partnering to create a community",
      authar: "Kaylynn Donin",
      raised: "6,542",
      days: "35",
    },
    {
      cardid: "2",
      image: pic11,
      image2: avat3,
      progres: "30%",
      title: "HEALTH",
      subtitle: "Primary School Build for Children",
      authar: "Richard Hart",
      raised: "1,542",
      days: "47",
    },
    {
      cardid: "1",
      image: pic12,
      image2: avat1,
      progres: "50%",
      title: "CHILDRENS",
      subtitle: "Best & Less published their supplier lists ",
      authar: "Cheyenne Curtis",
      raised: "8,354",
      days: "75",
    },
  ];
  const [dropbtn, setDropbtn] = useState("Newest");
  const [popular, setPopular] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function fetchPopular() {
    setPopular(cardData);
    setFiltered(cardData);
  }

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(cardData);
      return;
    }
    const filtered = popular.filter((card) =>
      card.cardid.includes(activeGenre)
    );
    setFiltered(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGenre]);

  //   const getData = () => {
  //     axios
  //       .get("http://api.investmap.uz/api/project/visible/")
  //       .then((res) => {
  //         if (res.status === 200) {
  //           const resData = res?.data;
  //           setData(resData);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);
  return (
    <>
      <div className="row ">
        <div className="col-xl-10 col-lg-9">
          <div className="site-filters style-1 clearfix">
            {/* <ul className="filters" data-bs-toggle="buttons">
              <li className={`btn ${activeGenre === 0 ? "active" : ""}`}>
                <Link to={"#"} onClick={() => setActiveGenre(0)}>
                  All Projects
                </Link>
              </li>
              <li
                data-filter=".Technology"
                className={`btn ${activeGenre === 1 ? "active" : ""}`}
              >
                <Link to={"#"} onClick={() => setActiveGenre(1)}>
                  Technology
                </Link>
              </li>
              <li
                data-filter=".Medical"
                className={`btn ${activeGenre === 2 ? "active" : ""}`}
              >
                <Link to={"#"} onClick={() => setActiveGenre(2)}>
                  Medical
                </Link>
              </li>
              <li
                data-filter=".Business"
                className={`btn ${activeGenre === 3 ? "active" : ""}`}
              >
                <Link to={"#"} onClick={() => setActiveGenre(3)}>
                  Business
                </Link>
              </li>
              <li
                data-filter=".Fashion"
                className={`btn ${activeGenre === 4 ? "active" : ""}`}
              >
                <Link to={"#"} onClick={() => setActiveGenre(4)}>
                  Fashion
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 text-start text-lg-end m-b20">
          {/* <Dropdown className="select-drop">
            <Dropdown.Toggle as="div" className="i-false select-drop-btn">
              <span>{dropbtn}</span>
              <i className="fa-regular fa-angle-down"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setDropbtn("Newest")}>
                Newest
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropbtn("Oldest")}>
                Oldest
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </div>
      </div>
      <div className="clearfix">
        <ul
          //layout
          id="masonry"
          className="row"
          //transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {console.log(childData)}
            {notfound ? (
              <div className="text-center my-5">Not found</div>
            ) : (
              childData &&
              childData.map((item, index) => {
                console.log(item);
                return (
                  <motion.li
                    layout
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="card-container col-xl-4 col-lg-6 col-md-6 col-sm-12 Fashion m-b30"
                    key={index}
                    //transition={{ duration: 0.5 }}
                  >
                    <div className="dz-card style-2  ">
                      <div className="dz-media">
                        <Link to={`/fundraiser-detail/${item.id}`}>
                          <img
                            style={{ height: "240px" }}
                            src={`${item.project_image}`}
                            alt="not found"
                          />
                        </Link>
                      </div>
                      <div className="dz-info">
                        <ul className="dz-category">
                          <li>
                            <Link to={"#"}>{item.sub_category_name}</Link>
                          </li>
                        </ul>
                        <h5 className="dz-title">
                          <Link to={"/fundraiser-detail"}>
                            {item.subtitle}{" "}
                          </Link>
                        </h5>
                        <div className="progress-bx style-1">
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-secondary progress-bar-striped progress-bar-animated d-flex justify-content-center "
                              style={{ width: item.progres }}
                            >
                              <span className="">50%</span>
                            </div>
                          </div>
                          <ul className="progress-tag">
                            {/* <li className="raised">
                                                        <i className="las la-coins"></i> Raised: <span className="text-primary">$ {item.raised}</span>
                                                    </li>
                                                    <li className="goal">
                                                        <i className="lar la-calendar"></i> Goal: <span className="text-primary">$70,000</span>
                                                    </li> */}
                          </ul>
                        </div>
                        <div className="author-wrappper">
                          {/* <div className="author-media">
                                                    <img src={item.image2} alt="" /> 
                                                </div> */}
                          <div className="author-content">
                            <div className="author-head">
                              {/* <h6 className="author-name">{item.authar}</h6> */}
                              {/* <ul className="rating-list">
                                                            <li><i className="fa fa-star"></i></li>
                                                            {" "}<li><i className="fa fa-star"></i></li>
                                                            {" "}<li><i className="fa fa-star"></i></li>
                                                            {" "}<li><i className="fa fa-star gray-light"></i></li>
                                                            {" "}<li><i className="fa fa-star gray-light"></i></li>
                                                        </ul> */}
                            </div>
                            <ul className="author-meta">
                              <li className="campaign">Investorlar: 12ta</li>
                              <li className="location">Tashkent</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                );
              })
            )}
          </AnimatePresence>
        </ul>
      </div>
      <div className="row">
        <div className="col-12 m-sm-t0 m-t30">
          <nav className="pagination-bx">
            <div className="page-item">
              <Link to={"#"} className="page-link prev">
                <i className="fas fa-chevron-left"></i>
              </Link>
            </div>
            <ul className="pagination">
              <li className="page-item">
                <Link to={"#"} className="page-link">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link to={"#"} className="page-link active">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link to={"#"} className="page-link">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link to={"#"} className="page-link">
                  4
                </Link>
              </li>
            </ul>
            <div className="page-item">
              <Link to={"#"} className="page-link next">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ProjectMasonry;
