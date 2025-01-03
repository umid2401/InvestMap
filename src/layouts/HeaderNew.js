/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect, useReducer, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";
// import { MenuListArray2 } from "./Menu";
import { toast } from "react-toastify";
import Collapse from "react-bootstrap/Collapse";
import axios from "axios";
//Logo for Invest
import logo from "./../assets/images/logo.png";
import newlogo from "./../assets/images/logo-landing.png";
import "..//assets//vendor/bootstrap/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
// import logo_new1 from "./../assets/images/logo_new1.png";
const HeaderNew = () => {
  const [name, setName] = useState("");
  const token = localStorage.getItem("access_token");
  //for otp code
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [verification_token, setVerification_token] = useState("");
  const [reset_token, setReset_token] = useState("");
  //API FOR INVESTMAP
  const api_url = process.env.REACT_APP_INVEST_MAP_API;
  const [role, setRole] = useState("");
  //invest_token
  //react hooks
  const inputRefs = useRef([]);
  const nav = useNavigate();
  //Modal
  const [loginModal, setloginModal] = useState(false);
  const [forgotModal, setForgotModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [updatePasswordModal, setUpdatePasswordModal] = useState(false);
  const [verify, setVerify] = useState(false);
  const [verifyType, setVerifyType] = useState("signup");
  //Modals end
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
  //state
  const signInstate = { identifier: "", password: "" };
  const forgotPasswordState = { new_password: "", confirm_password: "" };
  const sendIdentifier = { identifier: "" };
  const [sign_up, setSign_up] = useState(signUpState);
  const [sign_in, setSign_in] = useState(signInstate);
  const [forgot, setForgot] = useState(forgotPasswordState);
  const [identifier, setIdentifier] = useState(sendIdentifier);
  //funksiya handel qilish
  const handelSignUp = (e) => {
    const { name, value } = e.target;
    setSign_up({ ...sign_up, [name]: value });
  };
  const handelSignIn = (e) => {
    const { name, value } = e.target;
    setSign_in({ ...sign_in, [name]: value });
  };
  const handelForgot = (e) => {
    const { name, value } = e.target;
    setForgot({ ...forgot, [name]: value });
  };
  const handelId = (e) => {
    const { name, value } = e.target;
    setIdentifier({ ...identifier, [name]: value });
  };
  //Formsubmit
  const formSubmit = (e, customAction) => {
    e.preventDefault();
    customAction();
  };
  //sign up bo'lganda ishlaydigan  funksiya
  const flag = JSON.parse(localStorage.getItem("isOpen"));
  if (flag) {
  }
  const signUp = () => {
    axios
      .post(`${api_url}/user/register/`, sign_up)
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("isOpen", JSON.stringify(false));
          setVerification_token(res?.data?.verification_token);
          setSignupModal(false);
          setVerify(true);
          setName(sign_up?.first_name);
          console.log(name);
          setRole(sign_up?.role);
          setSign_up(signUpState);
          setVerifyType("signup");
          toast.success(`${res?.data?.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.warning(`${err?.response?.data?.error}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  //login bo'lganda ishlaydigan funksiya
  const login = () => {
    axios
      .post(`${api_url}/user/login/`, sign_in)
      .then((res) => {
        if (res.status === 200) {
          const { refresh, access } = res?.data;
          console.log(access, refresh);
          console.log(res.data);
          localStorage.setItem("access_token", access);
          localStorage.setItem("refresh_token", refresh);
          setloginModal(false);
          console.log(sign_up);
          setSign_in(signInstate);
          toast.success(`${res?.data?.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          if (role === "investor") {
            nav("/investor");
          } else {
            nav("/company");
          }
        }
      })
      .catch((err) => {
        toast.warning("Invalid password or email", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  //logpout function
  const logOut = () => {
    localStorage.removeItem("access_token");
    setloginModal(true);
    setActive(false);
  };
  // Sign updam keyin Verify bo'lganda ishlaydigan funksiya
  const newOtp = otp.join("");
  const isVerify = () => {
    axios
      .post(
        `${api_url}/user/register-verify-otp/`,
        { otp: newOtp, verification_token },
        {
          headers: {},
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setVerify(false);
          setloginModal(true);
          setOtp(Array(6).fill(""));
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
  const { t, i18n } = useTranslation();

  const MenuListArray2 = [
    {
      title: t("home"),
      to: "/",
    },
    {
      title: t("investing"),
      to: "/investing",
    },

    {
      title: t("raising"),
      to: "/raising",
      // content : [
      //     {
      //         title : "About Us",
      //         to : "/about-us"
      //     },
      //     {
      //         title : "Volunteer",
      //         to : "#",
      //         className:"sub-menu",
      //         content : [
      //             {
      //                 title:"Volunteer",
      //                 to:"/volunteer"
      //             },
      //             {
      //                 title:"Become A Volunteer",
      //                 to:"/become-a-volunteer"
      //             },
      //         ],
      //     },
      //     {
      //         title : "Faq",
      //         to : "/faq"
      //     },
      //     {
      //         title : "Certificates",
      //         to : "/certificates"
      //     },
      //     {
      //         title : "Ask A Question",
      //         to : "/ask-a-question"
      //     },
      //     {
      //         title : "Happy Clients",
      //         to : "/happy-clients"
      //     },
      //     {
      //         title : "How It Works",
      //         to : "/how-it-works"
      //     },
      //     {
      //         title : "Mission",
      //         to : "/mission"
      //     },
      //     {
      //         title : "Terms And Condition",
      //         to : "/terms-and-condition"
      //     },
      //     {
      //         title : "Coming Soon",
      //         to : "/coming-soon"
      //     },
      //     {
      //         title : "Under Maintenance",
      //         to : "/under-maintenance"
      //     },
      //     {
      //         title : "Error 404",
      //         to : "/error-404"
      //     },
      // ],
    },
    {
      title: t("academy"),
      to: "/academy",
    },
    {
      title: t("club"),
      to: "/club",
    },
    {
      title: t("resource"),
      classChange: "sub-menu-down",
      content: [
        {
          title: "About Us",
          to: "/about-us",
        },

        {
          title: "Events",
          to: "/events",
        },
        {
          title: "Faq",
          to: "/faq",
        },
        {
          title: "Contact",
          to: "/contact",
        },
      ],
    },

    // {
    //     title:"Fundraiser",
    //     classChange:"sub-menu-down",
    //     content : [
    //         {
    //             title:"Browse Fundraiser",
    //             to:"/browse-fundraiser"
    //         },
    //         {
    //             title:"Become A Fundraiser",
    //             to:"/become-a-fundraiser"
    //         },
    //         {
    //             title:"Fundraiser Detail",
    //             to:"/fundraiser-detail"
    //         },
    //     ],
    // },

    // {
    //     title:"Blog",
    //     classChange:"sub-menu-down",
    //     content:[
    //         {
    //             title:"Blog",
    //             to:"/blog"
    //         },
    //         {
    //             title:"Blog Grid",
    //             to:"/blog-grid"
    //         },
    //         {
    //             title:"Blog List",
    //             to:"/blog-list"
    //         },
    //         {
    //             title:"Blog Details",
    //             to:"/blog-details"
    //         },
    //     ],
    // },
    {},
    // {
    //     title: 'Contact Us',
    //     to: './contact-us',
    // },
  ];
  //Forgot va Reset jarayoni uchun yoziladigan funksiyalar
  // sendSms
  const sendEmail = () => {
    if (verifyType === "forgot") {
      axios
        .post(`${api_url}/user/forgot-password/`, identifier)
        .then((res) => {
          if (res.status === 200) {
            setVerify(true);
            setForgotModal(false);
          }
        })
        .catch((err) => {
          console.log(err);
          console.log(identifier);
        });
    } else {
      axios
        .post(`${api_url}/user/reset-password/`, identifier, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setVerify(true);
            setForgotModal(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const sendCode = () => {
    if (verifyType === "forgot") {
      axios
        .post(`${api_url}/user/forgot-password-verify-otp/`, { otp: newOtp })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            setVerify(false);
            setUpdatePasswordModal(true);
            setReset_token(res?.data?.reset_token);
            toast.success(`${res?.data?.message}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setOtp(Array(6).fill(""));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(
          `${api_url}/user/reset-password-verify-otp/`,
          { otp: newOtp },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            setVerify(false);
            setUpdatePasswordModal(true);
            setReset_token(res?.data?.reset_token);
            toast.success(`${res?.data?.message}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setOtp(Array(6).fill(""));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const sendPassword = () => {
    if (verifyType === "forgot") {
      axios
        .post(`${api_url}/user/confirm-forgot-password/`, {
          ...forgot,
          reset_token: reset_token,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            toast.success(`${res?.data?.message}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setUpdatePasswordModal(false);
            setForgot(forgotPasswordState);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(
          `${api_url}/user/confirm-reset-password/`,
          { ...forgot, reset_token: reset_token },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            toast.success(`${res?.data?.message}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setUpdatePasswordModal(false);
            setForgot(forgotPasswordState);
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
  const [active, setActive] = useState(false);
  const [too, setToo] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const lang = localStorage.getItem("langs") || "EN";
  const [language, setLanguage] = useState("en");
  const toggle = (e) => {
    setToo(!too);
    setActive(false);
  };
  const firstDropdownRef = useRef(null);
  const secondDropdownRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // First dropdown tashqarisidagi kliklarni aniqlash
      if (
        firstDropdownRef.current &&
        !firstDropdownRef.current.contains(event.target) &&
        !button1Ref.current.contains(event.target)
      ) {
        setToo(false);
      }

      // Second dropdown tashqarisidagi kliklarni aniqlash
      if (
        secondDropdownRef.current &&
        !secondDropdownRef.current.contains(event.target) &&
        !button2Ref.current.contains(event.target)
      ) {
        setActive(false);
      }
    };

    // Event listener qo'shamiz
    document.addEventListener("mousedown", handleClickOutside);

    // Event listenerni tozalaymiz
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active, too]);

  // Handle language selection
  const handleLanguageChange = (language, displayName) => {
    setSelectedLanguage(displayName);
    setLanguage(language);
    setToo(false); // Close dropdown after selection
    localStorage.setItem("langs", language);
    i18n.changeLanguage(language);
  };
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
              <div className="extra-nav d-flex gap-3">
                {token ? (
                  <div className="extra-cell position-relative ">
                    <button
                      className="btn py-2 px-3 btn-outline-secondary btnhover1"
                      ref={button2Ref}
                      onClick={() => setActive(!active)}
                    >
                      <i className="fa-solid fa-user"></i>
                      <span className="m-l10">My Account</span>
                    </button>
                    <div
                      ref={secondDropdownRef}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "white",
                        padding: "10px 0px 20px 15px",
                        width: "180px",
                        borderRadius: "5px",
                      }}
                      className={`position-absolute   gap-1 ${
                        active ? "d-grid" : "d-none"
                      }`}
                    >
                      <div onClick={logOut}>
                        <i className="fas fa-sign-out-alt"></i>
                        <span> Logout</span>
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => (
                          // eslint-disable-next-line no-sequences
                          setForgotModal(true),
                          setVerifyType("reset"),
                          setActive(false)
                        )}
                      >
                        <i className="fas fa-key"></i>
                        <span> Reset Password</span>
                      </div>
                      <div style={{ cursor: "pointer" }} className="">
                        <i className="fas fa-sign-out-alt"></i>
                        <span> Logout</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-info">
                    <Link
                      to={"#"}
                      className="badge text-light d-flex align-items-center gap-1   badge-primary "
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
                )}
                {/* <div className="dropdown text-end">
                  <button
                    className="btn px-2 py-2 btn-secondary dropdown-toggle"
                    type="button"
                    id="languageDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-globe me-2"></i> Eng
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="languageDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-icon flag-icon-us me-2"></i> English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-icon flag-icon-fr me-2"></i> Français
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-icon flag-icon-de me-2"></i> Deutsch
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-icon flag-icon-es me-2"></i> Español
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-icon flag-icon-ru me-2"></i> Русский
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="dropdown position-relative">
                  {/* Dropdown Toggle Button */}
                  <button
                    ref={button1Ref}
                    className="btn px-2 py-2 btn-secondary"
                    type="button"
                    onClick={toggle}
                  >
                    <i className="fa fa-globe me-2"></i> {lang?.toUpperCase()}
                  </button>

                  {/* Custom Dropdown Menu */}
                  {too && (
                    <ul
                      ref={firstDropdownRef}
                      className="bg-light position-absolute start-0 mt-2 w-100"
                    >
                      <li>
                        <button
                          className="dropdown-item d-flex align-items-center w-100"
                          onClick={() => handleLanguageChange("en", "Enwwww")}
                        >
                          <i className="flag-icon flag-icon-us me-2"></i> EN
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item d-flex align-items-center"
                          onClick={() => handleLanguageChange("uz", "Uz")}
                        >
                          <i className="flag-icon flag-icon-fr me-2"></i> UZ
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item d-flex align-items-center"
                          onClick={() => handleLanguageChange("ru", "Ru")}
                        >
                          <i className="flag-icon flag-icon-de me-2"></i> RU
                        </button>
                      </li>
                    </ul>
                  )}
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
                    <img
                      className="w-75"
                      src={newlogo}
                      alt="Logo for Invest Hub"
                    />
                  </Link>
                </div>
                <ul className="nav navbar-nav navbar navbar-left">
                  {MenuListArray2.map((data, index) => {
                    let menuClass = data.classChange;
                    if (menuClass !== "sub-menu-down") {
                      return (
                        <li className={menuClass} key={index}>
                          <NavLink
  to={data?.to}
  style={({ isActive }) => ({
    fontWeight: "500",
   
    alignItems: "center",
    gap: "16px",
    fontSize: "15px",
    
    // backgroundColor: isActive ? "whitesmoke" : "transparent",
    color: isActive ? "#FF7468" : "",
    
    // textDecoration: isActive ? "underline" : "none",
    // ":hover": {
    //   backgroundColor: "whitesmoke",
    // },
  })}
>
  {data.title}
</NavLink>
                          {/* <NavLink
                            to={data?.to}
                            className={({ isActive }) =>
                              `font-medium hover:bg-[whitesmoke] px-11 rounded-[10px] items-center flex gap-x-4 text-[15px] leading-6 py-3 ${
                                isActive
                                  ? "bg-[whitesmoke] text-blue-500 link"
                                  : "border-transparent text-[darkgrey]"
                              }`
                            }
                          >
                            {data.title}
                          </NavLink> */}
                          {/* <Link to={data.to}>{data.title}</Link> */}
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
                onClick={() => (
                  setForgotModal(true),
                  setloginModal(false),
                  setVerifyType("forgot")
                )}
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
          <div className="sign-text">
            <span>
              Don't have a Crowdfunding account?
              <Link
                to={"#"}
                className="btn-link collapsed"
                onClick={() => (setSignupModal(true), setloginModal(false))}
              >
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </Modal>
      {/* send email Reset Modal and forgot Modal */}
      <Modal
        className="modal fade modal-wrapper auth-modal"
        show={forgotModal}
        onHide={setForgotModal}
        centered
      >
        <div className="reset-password" id="reset-password">
          <h2 className="title">
            {verifyType === "forgot" ? "Forgot Password" : "Reset Password"}
          </h2>
          <form onSubmit={(e) => formSubmit(e, sendEmail)}>
            <div className="form-group password-icon-bx">
              <i className="fa fa-lock"></i>
              <p>
                Enter your email address associated with your account, and we'll
                email you a link to reset your password...
              </p>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="identifier"
                value={identifier?.identifier}
                onChange={handelId}
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
                  required
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
                  required
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
                type="text"
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
        <Modal.Footer className=" d-flex justify-content-center">
          {verifyType === "forgot" && (
            <Button className="py-2" variant="secondary" onClick={sendCode}>
              Verify Otp
            </Button>
          )}
          {verifyType === "signup" && (
            <Button
              className="py-2 text-center"
              onClick={isVerify}
              variant="primary"
            >
              Verify OTP
            </Button>
          )}
          {verifyType === "reset" && (
            <Button className="py-2" onClick={sendCode} variant="primary">
              Verify Otp
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      {/* Forgot Passwordni yangilash uchun  */}
      <Modal
        className="fade modal-wrapper auth-modal"
        show={updatePasswordModal}
        onHide={() => setUpdatePasswordModal(false)}
        centered
      >
        <h2 className="title">Change Password</h2>
        <form className="" onSubmit={(e) => formSubmit(e, sendPassword)}>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="New password"
              name="new_password"
              value={forgot?.new_password}
              onChange={handelForgot}
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
              name="confirm_password"
              value={forgot?.confirm_password}
              onChange={handelForgot}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-outline-primary btn-block">
              Change Password
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default HeaderNew;
