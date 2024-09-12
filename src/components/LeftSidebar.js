import React, { useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Form, Link } from "react-router-dom";

const LeftSidebar = () => {
  const [dropbtn, setDropbtn] = useState("Newest");
  return (
    <>
      <aside className="side-bar sticky-top right">
        <div className="widget  style-1 py-3 row">
          <div className="">
            <h4 className="widget-title">Filter</h4>
          </div>
          <div className="col w-75 col-sm-4 m-b30">
            <Dropdown className="select-drop">
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
            </Dropdown>
          </div>
        </div>
        <div className="widget style-1 widget_categories">
          <div className="widget-title">
            <h4 className="title">Create Club</h4>
          </div>
          <form>
            <div className="form-row mb-2">
              <div className="col">
                <label htmlFor="firstName" className="form-label">
              Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Name"
                />
              </div>
              <div className="col">
                <label htmlFor="lastName" className="form-label">
                  Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Type"
                />
              </div>
            </div>
            <div className="form-row mb-2">
              <div className="col">
                <label htmlFor="email" className="form-label">
                 Description
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Description"
                />
              </div>
              {/* <div className="col">
                <label htmlFor="phone" className="form-label">
                  Telefon raqami
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Telefon raqamingizni kiriting"
                />
              </div> */}
            </div>
            <div className="form-row mb-2">
              <div className="col  text-center">
                <button type="submit" className="btn w-100 btn-warning mt-3">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </aside>
    </>
  );
};

export default LeftSidebar;
