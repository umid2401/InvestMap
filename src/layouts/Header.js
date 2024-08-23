import React, { useState, useEffect, useReducer, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { MenuListArray2 } from "./Menu";
import { SignUp } from "../api/Api";
//Logo for Invest
import logo from "./../assets/images/logo.png";
import newlogo from "./../assets/images/new_logo.png";
import axios from "axios";
// import logo_new1 from "./../assets/images/logo_new1.png";

const Header = () => {
  //for otp code
  const [otp, setOtp] = useState(Array(6).fill(""));
  //invest_token
  const invest_token = localStorage.getItem("token");
  //react hooks
  const inputRefs = useRef([]);
  const nav = useNavigate();
  //Modal
  const [loginModal, setloginModal] = useState(false);
  const [resetModal, setResetModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [updatePasswordModal, setUpdatePasswordModal] = useState(false);
  const [roleModal, setRoleModal] = useState(false);
  const [mainModal, setMainModal] = useState(false);
  const [verify, setVerify] = useState(false);
  //Modals end
  //API FOR INVESTMAP
  const api_url = process.env.INVEST_MAP_API;
  //state
  const signUpState = {
    role: "",
    email: "",
    phone_number: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    birth_date: "",
    gender: "",
    password: "",
    contact_method: "",
  };
  const signInstate = { identifier: "", password: "" };
  const [sign_up, setSign_up] = useState(signUpState);
  const [sign_in, setSign_in] = useState(signInstate);
  //funksiya handel qilish
  const handelSignUp = (e) => {
    const { name, value } = e.target;
    setSign_up({ ...sign_up, [name]: value });
  };
  const handelSignIn = (e) => {
    const { name, value } = e.target;
    setSign_in({ ...sign_in, [name]: value });
  };

  //selectRole
  const selectRole = () => {
    setRoleModal(false);
    setMainModal(true);
  };

  //Formsubmit
  const formSubmit = (e, customAction) => {
    e.preventDefault();
    customAction();
  };
  //login bo'lganda ishlaydigan funksiya
  const login = () => {
    axios.post(`${api_url}/user/login`, sign_in).then((res) => {
      if (res.ok) {
        setloginModal(false);
        setSign_in(signInstate);
        if (sign_up?.role === "investor") {
          nav("/investor");
        }
        if (sign_up?.role === "company") {
          nav("/become-a-fundraiser");
        }
      }
    })
    .catch(err=>{
      console.log(err)
    });
    
  };
  //sign up bo'lganda ishlaydigan  funksiya
  const signUp = () => {
    axios
      .post(`${api_url}/user/register`, sign_up)
      .then((res) => {
        if (res.ok) {
          localStorage.setItem("invest_token", res?.token);
          setSignupModal(false);
          setVerify(true);
          setSign_up(signUpState);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Verify bo'lganda ishlaydigan funksiya
  const newOtp = otp.join("");
  const isVerify = () => {
    axios
      .post(`${api_url}/user/register-verify-otp`, newOtp, {
        headers: {
          Authorization: `Bearer ${invest_token}`,
        },
      })
      .then((res) => {
        if (res.ok) {
          setVerify(false);
          setOtp(Array(6).fill(""));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    alert(newOtp);
  };
  //handelVerifyChange
  const handelVerifyChange = (element, index) => {
    const value = element.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Keyingi inputga o'tish
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  // sendNumberSms
  const sendNumber = () => {
    setVerify(true);
    setResetModal(false);
  };
  const changePassword = () => {
    nav("/");
    setUpdatePasswordModal(false);
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index] === "") {
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      } else {
        // O'chirishni amalga oshirish
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };
  /* for sticky header */
  const [headerFix, setheaderFix] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    var mainMenu = document.getElementById("OpenMenu");
    if (mainMenu) {
      if (sidebarOpen) {
        mainMenu.classList.add("show");
      } else {
        mainMenu.classList.remove("show");
      }
    }
  });

  // Menu dropdown list
  const reducer = (previousState, updatedState) => ({
    ...previousState,
    ...updatedState,
  });
  const initialState = {
    active: "",
    activeSubmenu: "",
  };
  const [state, setState] = useReducer(reducer, initialState);
  const handleMenuActive = (status) => {
    setState({ active: status });
    if (state.active === status) {
      setState({ active: "" });
    }
  };
  const handleSubmenuActive = (status) => {
    setState({ activeSubmenu: status });
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" });
    }
  };

  //let path = window.location.pathname;
  // Menu dropdown list End
  return (
    <>
      <header className="site-header mo-left header style-1">
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            headerFix ? "is-fixed" : ""
          }`}
        >
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              <div className="logo-header mostion logo-dark">
                <Link to={"/"}>
                  <img
                    className="w-75"
                    src={newlogo}
                    alt="Logo for Invest Hub"
                  />
                </Link>
                {/* <Link to={"/"}>
                  <img
                    className="w-50"
                    src={logo_new1}
                    alt="Logo for Invest Hub"
                  />
                </Link> */}
              </div>
              <button
                className={`navbar-toggler navicon justify-content-end ${
                  sidebarOpen ? "open" : "collapsed"
                }`}
                type="button"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="extra-nav">
                <div className="text-info">
                  <Link
                    to={"#"}
                    className="badge d-flex align-items-center gap-1   badge-primary btn-login"
                    data-bs-toggle="modal"
                    data-bs-target="#modalLogin"
                  >
                    <i className="flaticon-logout mb-1"></i>
                    <span className="" onClick={() => setloginModal(true)}>
                      Login /
                    </span>
                    <span className="" onClick={() => setSignupModal(true)}>
                      Sign Up
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  sidebarOpen ? "show" : ""
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header logo-dark">
                  <Link to={"/"}>
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <ul className="nav navbar-nav navbar navbar-left">
                  {MenuListArray2.map((data, index) => {
                    let menuClass = data.classChange;
                    if (menuClass !== "sub-menu-down") {
                      return (
                        <li className={menuClass} key={index}>
                          <Link to={data.to}>{data.title}</Link>
                        </li>
                      );
                    } else {
                      return (
                        <li
                          className={`${menuClass} ${
                            state.active === data.title ? "open" : ""
                          }`}
                          key={index}
                        >
                          {data.content && data.content.length > 0 ? (
                            <Link
                              to={"#"}
                              onClick={() => {
                                handleMenuActive(data.title);
                              }}
                            >
                              {data.title}
                            </Link>
                          ) : (
                            <Link to={data.to}>{data.title}</Link>
                          )}
                          <Collapse
                            in={state.active === data.title ? true : false}
                          >
                            <ul
                              className={`sub-menu ${
                                menuClass === "mm-collapse" ? "open" : ""
                              }`}
                            >
                              {data.content &&
                                data.content.map((data, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className={`${
                                        state.activeSubmenu === data.title
                                          ? "open"
                                          : ""
                                      }`}
                                    >
                                      {data.content &&
                                      data.content.length > 0 ? (
                                        <>
                                          <Link
                                            to={data.to}
                                            onClick={() => {
                                              handleSubmenuActive(data.title);
                                            }}
                                          >
                                            {data.title}
                                            <i className="fa fa-angle-right" />
                                          </Link>
                                          <Collapse
                                            in={
                                              state.activeSubmenu === data.title
                                                ? true
                                                : false
                                            }
                                          >
                                            <ul
                                              className={`sub-menu ${
                                                menuClass === "mm-collapse"
                                                  ? "open"
                                                  : ""
                                              }`}
                                            >
                                              {data.content &&
                                                data.content.map(
                                                  (data, index) => {
                                                    return (
                                                      <>
                                                        <li key={index}>
                                                          <Link to={data.to}>
                                                            {data.title}
                                                          </Link>
                                                        </li>
                                                      </>
                                                    );
                                                  }
                                                )}
                                            </ul>
                                          </Collapse>
                                        </>
                                      ) : (
                                        <Link to={data.to}>{data.title}</Link>
                                      )}
                                    </li>
                                  );
                                })}
                            </ul>
                          </Collapse>
                        </li>
                      );
                    }
                  })}
                </ul>
                <div className="header-bottom">
                  <Link
                    to={"#"}
                    className="btn btn-light btn-login btn-sm"
                    data-bs-target="#modalLogin"
                    onClick={() => setloginModal(true)}
                  >
                    <i className="flaticon-logout me-3"></i>Login / Sign Up
                  </Link>
                  <div className="dz-social-icon">
                    <ul>
                      <li>
                        <a
                          className="fab fa-facebook-f"
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>{" "}
                      <li>
                        <a
                          className="fab fa-twitter"
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>{" "}
                      <li>
                        <a
                          className="fab fa-linkedin-in"
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>{" "}
                      <li>
                        <a
                          className="fab fa-instagram"
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Login modal */}
      <Modal
        className="fade modal-wrapper auth-modal"
        id="modalLogin"
        show={loginModal}
        onHide={setloginModal}
        centered
      >
        <h2 className="title">Sign In</h2>

        <form className="" onSubmit={(e) => formSubmit(e, login)}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email address"
              name="identifier"
              value={sign_in.identifier}
              onChange={handelSignIn}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={sign_in.password}
              onChange={handelSignIn}
            />
            <div className="reset-password">
              <Link
                to={"#"}
                className="btn-link collapsed"
                onClick={() => (setResetModal(true), setloginModal(false))}
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-outline-primary btn-block">
              Sign In
            </button>
          </div>
          {/* <div className="form-group">
                        <Link to={"#"} className="btn facebook btn-block"><i className="fa-brands fa-facebook-f m-r10"></i>Log in with Facebook</Link>
                    </div>
                    <div className="form-group">
                        <Link to={"#"} className="btn google-plus btn-block"><i className="fa-brands fa-google m-r10"></i>Log in with Google</Link>
                    </div> */}
          <div className="sign-text">
            <span>
              Don't have a Crowdfunding account?
              <Link
                to={"#"}
                className="btn-link collapsed"
                onClick={() => (setSignupModal(true), setloginModal(false))}
              >
                {" "}
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </Modal>
      {/* Reset Modal */}
      <Modal
        className="modal fade modal-wrapper auth-modal"
        show={resetModal}
        onHide={setResetModal}
        centered
      >
        <div className="reset-password" id="reset-password">
          <h2 className="title">Reset password?</h2>
          <form onSubmit={(e) => formSubmit(e, sendNumber)}>
            <div className="form-group password-icon-bx">
              <i className="fa fa-lock"></i>
              <p>
                Enter your email address associated with your account, and we'll
                email you a link to reset your password...
              </p>
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="+99890234567"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-outline-primary btn-block"
              >
                Send reset link
              </button>
            </div>
            <Link
              to={"#"}
              className="sign-text d-block"
              data-bs-toggle="collapse"
              onClick={() => (setResetModal(false), setloginModal(true))}
            >
              Back
            </Link>
          </form>
        </div>
      </Modal>
      {/* Sign Up Modal */}
      <Modal
        className="modal  fade modal-wrapper auth-modal"
        show={signupModal}
        onHide={setSignupModal}
        centered
      >
        <h2 className="title">Sign Up Your Account</h2>
        <form onSubmit={(e) => formSubmit(e, signUp)}>
          <div className="form-group">
            <label className="form-label" htmlFor="role">
              Role
            </label>
            <div className="d-flex justify-content-start gap-4 ">
              <div className="div d-flex gap-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  value="investor"
                  checked={sign_up.role === "investor"}
                  onChange={handelSignUp}
                  id="investor"
                />
                <label className="form-check-label" htmlFor="male">
                  Investor
                </label>
              </div>
              <div className="div d-flex gap-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  value="company"
                  checked={sign_up.role === "company"}
                  onChange={handelSignUp}
                  id="company"
                />
                <label className="form-check-label" htmlFor="male">
                  Company
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                required
                type="email"
                className="form-control "
                id="email"
                placeholder="Enter your email"
                name="email"
                value={sign_up.email}
                onChange={handelSignUp}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone number
              </label>
              <input
                required
                type="number"
                className="form-control form-control-sm"
                id="phone"
                placeholder="Enter your phone number"
                name="phone_number"
                value={sign_up.phone_number}
                onChange={handelSignUp}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                required
                type="text"
                className="form-control form-control-sm"
                id="firstName"
                placeholder="Enter your first name"
                name="first_name"
                value={sign_up.first_name}
                onChange={handelSignUp}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                required
                type="text"
                className="form-control form-control-sm"
                id="lastName"
                placeholder="Enter your last name"
                name="last_name"
                value={sign_up.last_name}
                onChange={handelSignUp}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6">
              <label htmlFor="middleName" className="form-label">
                Middle name
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="middleName"
                placeholder="Enter your middle name"
                name="middle_name"
                value={sign_up.middle_name}
                onChange={handelSignUp}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="birthDate" className="form-label">
                Birth date
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="birthDate"
                name="birth_date"
                value={sign_up.birth_date}
                onChange={handelSignUp}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6 ">
              <label htmlFor="lastName" className="form-label">
                Gender
              </label>
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="male"
                  checked={sign_up.gender === "male"}
                  onChange={handelSignUp}
                  id="male"
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>

              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="female"
                  checked={sign_up.gender === "female"}
                  onChange={handelSignUp}
                  id="male"
                />
                <label className="form-check-label" htmlFor="male">
                  Female
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-sm"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={sign_up.password}
                onChange={handelSignUp}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6 ">
              <label htmlFor="lastName" className="form-label">
                Contact Method
              </label>
              <div className="form-group ">
                <input
                  className="form-control"
                  type="text"
                  name="contact_method"
                  value={sign_up.contact_method}
                  onChange={handelSignUp}
                />
                <label className="form-check-label" htmlFor="male">
                  Contact Method
                </label>
              </div>
            </div>
          </div>
          {/* <div className="form-group">
            <span onClick={signUp}>Hello</span>
            <button
             
            2
              className="btn btn-outline-primary text-white bg-green btn-block"
            >
              Sign Up
            </button>
          </div> */}
          <button
            type="submit"
            className="btn btn-primary form-control  px-5 mx-auto d-block"
          >
            Register
          </button>

          <div className="sign-text">
            <span>
              Don't have a Crowdfunding account?{" "}
              <Link
                to={"#"}
                className="btn-link collapsed"
                onClick={() => (setSignupModal(false), setloginModal(true))}
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </Modal>
      {/* Verifikatsiya uchun */}
      <Modal show={verify} onHide={() => setVerify(false)} centered>
        <Modal.Header className="text-center mx-auto fs-3" closeButton>
          Enter OTP
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="d-flex justify-content-center verifyInput">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handelVerifyChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="form-control  mx-0 mx-md-2   "
                  style={{
                    width: "50px",
                    height: "40px",
                    textAlign: "left",
                    fontSize: "14px",
                  }}
                />
              ))}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="py-2"
            variant="secondary"
            onClick={() => (setVerify(false), setUpdatePasswordModal(true))}
          >
            Close
          </Button>
          <Button className="py-2" onClick={isVerify} variant="primary">
            Verify OTP
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Passwordni yangilash uchun  */}
      <Modal
        className="fade modal-wrapper auth-modal"
        show={updatePasswordModal}
        onHide={() => setUpdatePasswordModal(false)}
        centered
      >
        <h2 className="title">Change Password</h2>

        <form className="" onSubmit={(e) => formSubmit(e, changePassword)}>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-outline-primary btn-block">
              Change Password
            </button>
          </div>
        </form>
      </Modal>
      {/* Role ni tanlash uchun Modal */}
      {/* <Modal
        className="fade modal-wrapper auth-modal"
        show={roleModal}
        onHide={() => setRoleModal(false)}
        centered
      >
        <h2 className="title">Select Role</h2>

        <form onSubmit={(e) => formSubmit(e, selectRole)}>
          <div className="mb-3">
            <label className="form-label">Select Role</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="options"
                id="option1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="option1">
                Main
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="options"
                id="option2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="option2">
                Bank details
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="options"
                id="option3"
                value="option3"
              />
              <label className="form-check-label" htmlFor="option3">
                Contact Informations
              </label>
            </div>
          </div>

          <button
          
            type="submit"
            className="btn btn-primary py-2 "
          >
            Submit
          </button>
        </form>
      </Modal> */}
      {/* Role tanlangandan keyin chiquvchi modallar masalan */}
      {/* Main Modal */}

      <Modal
        className="fade modal-wrapper auth-modal"
        show={mainModal}
        onHide={() => setMainModal(false)}
        centered
      >
        <h2 className="title">Company Information Form</h2>
        <form>
          {/* Logo */}
          <div className="mb-3">
            <label htmlFor="logo" className="form-label">
              Logo URL
            </label>
            <input
              type="file"
              className="form-control"
              id="logo"
              placeholder="Enter logo URL"
            />
          </div>

          {/* Legal Name */}
          <div className="mb-3">
            <label htmlFor="legalName" className="form-label">
              Legal Name
            </label>
            <input
              type="text"
              className="form-control"
              id="legalName"
              placeholder="Enter legal name"
            />
          </div>

          {/* TIN */}
          <div className="mb-3">
            <label htmlFor="tin" className="form-label">
              TIN
            </label>
            <input
              type="text"
              className="form-control"
              id="tin"
              placeholder="Enter TIN"
            />
          </div>

          {/* Date of Registration */}
          <div className="mb-3">
            <label htmlFor="registrationDate" className="form-label">
              Date of Registration
            </label>
            <input type="date" className="form-control" id="registrationDate" />
          </div>

          {/* National Classifier of Activities */}
          <div className="mb-3">
            <label htmlFor="nationalClassifier" className="form-label">
              National Classifier of Activities
            </label>
            <input
              type="text"
              className="form-control"
              id="nationalClassifier"
              placeholder="Enter National Classifier"
            />
          </div>

          {/* Legal Address */}
          <div className="mb-3">
            <label htmlFor="legalAddress" className="form-label">
              Legal Address
            </label>
            <input
              type="text"
              className="form-control"
              id="legalAddress"
              placeholder="Enter legal address"
            />
          </div>

          {/* Name of Director */}
          <div className="mb-3">
            <label htmlFor="directorName" className="form-label">
              Name of Director
            </label>
            <input
              type="text"
              className="form-control"
              id="directorName"
              placeholder="Enter director's name"
            />
          </div>

          {/* Director TIN */}
          <div className="mb-3">
            <label htmlFor="directorTIN" className="form-label">
              Director TIN
            </label>
            <input
              type="text"
              className="form-control"
              id="directorTIN"
              placeholder="Enter director's TIN"
            />
          </div>

          {/* Share Capital */}
          <div className="mb-3">
            <label htmlFor="shareCapital" className="form-label">
              Share Capital
            </label>
            <input
              type="text"
              className="form-control"
              id="shareCapital"
              placeholder="Enter share capital"
            />
          </div>

          {/* State of Activity */}
          <div className="mb-3">
            <label htmlFor="stateOfActivity" className="form-label">
              State of Activity
            </label>
            <input
              type="text"
              className="form-control"
              id="stateOfActivity"
              placeholder="Enter state of activity"
            />
          </div>

          {/* Number of Employees */}
          <div className="mb-3">
            <label htmlFor="numberOfEmployees" className="form-label">
              Number of Employees
            </label>
            <input
              type="number"
              className="form-control"
              id="numberOfEmployees"
              placeholder="Enter number of employees"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Header;
