import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ProjectMasonry from "../components/Project/ProjectMasonry";
import UpdateBlog from "../components/Home/UpdateBlog";
import axios from "axios";

const Project = () => {
  //Api
  const api_url = process.env.REACT_APP_INVEST_MAP_API;
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useState("");
  const [notfound, setNotfound] = useState();
  // eslint-disable-next-line no-unused-vars
  const [data, setdData] = useState();
  const [childData, setChildData] = useState([]);
  useEffect(() => {
    axios
      .get("http://api.investmap.uz/api/project/visible/", {
        responseType: "json",
      })
      .then((res) => {
        setChildData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(event.target.value);
    const apiUrl = value
      ? `http://api.investmap.uz/api/project/search/?search=${value}`
      : "http://api.investmap.uz/api/project/visible/";

    axios
      .get(`${apiUrl}`, {
        responseType: "json",
      })
      .then((res) => {
        if (res.data && res.data.length === 0) {
          setNotfound(true);
        } else {
          setChildData(res.data);
          console.log(childData);
          setNotfound(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("salom");
    axios
      .get(`http://api.investmap.uz/api/project/search/?search=${query}`, {
        responseType: "json",
      })
      .then((res) => {
        if (res.data && res.data.length === 0) {
          console.log("No results found");
        } else {
          setChildData(res.data);
          console.log(childData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handelCategory = (category) => {
    setCategory(category);
    axios
      .get(`http://api.investmap.uz/api/project/search/?category=${category}`)
      .then((res) => {
        if (res.data && res.data.length === 0) {
            console.log("No results found");
            setNotfound(true)
          } else {
            setChildData(res.data);
            console.log(childData);
            setNotfound(false)
          }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // eslint-disable-next-line no-unused-vars
  const getAllProjectData = async () => {
    try {
      const res = await axios.get(`${api_url}/api.investmap.uz/api/project/`);
      if (res.status === 200) {
        setdData(res?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const [category, setCategory] = useState("All Category");
  return (
    <>
      <div className="page-content bg-white">
        <div className="find-bx-wrapper " style={{ marginTop: "90px" }}>
          <div className="container">
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
        <section className="">
          <div className="container mb-5">
            <ProjectMasonry childData={childData} notfound={notfound} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;
