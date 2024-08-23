import React,{useState, useEffect, useReducer, useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import {MenuListArray2} from './Menu';
import { IMAGES } from '../constant/theme';
import DonateModal from '../components/Modal/DonateModal';

//import logo from './../assets/images/logo-2.png';

const Header2 = ({onShowDonate, changeStyle, changeLogo}) => {
 //form submit
 const nav = useNavigate();
 const formSubmit = (e) => {
     e.prevantDefault();
     nav("/");
 }

    /* for sticky header */
	const [headerFix, setheaderFix] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix(window.scrollY > 50);
		});
	}, []); 
        
    const [sidebarOpen, setSidebarOpen] = useState(false);	

    useEffect(() => {
		var mainMenu = document.getElementById('OpenMenu'); 
		if(mainMenu){
			if(sidebarOpen){
				mainMenu.classList.add('show');
			}else{
				mainMenu.classList.remove('show');
			}
		}	
	});
	
	// Menu dropdown list 
    const reducer = (previousState, updatedState) => ({
        ...previousState,
        ...updatedState,
    });
    const initialState = {
        active : "",
        activeSubmenu : "",
    }
    const [state, setState] = useReducer(reducer, initialState);
	const handleMenuActive = status => {		
        setState({active : status});		
            if(state.active === status){			
          setState({active : ""});
        }
       
    }
    const handleSubmenuActive = (status) => {		
            setState({activeSubmenu : status})
        if(state.activeSubmenu === status){
            setState({activeSubmenu : ""})                
        }
    
    }
    //let path = window.location.pathname;
    const [sideOverlay, setSideOverlay] = useState(false);
   
    //Modal
    const [loginModal, setloginModal] = useState(false);
    const [resetModal, setResetModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    //Modals end   
    const modalRef = useRef(null);

    return (
        <>
            <header className={`site-header mo-left header style-2 ${changeStyle}`}>                
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""}`}>
                    <div className="main-bar clearfix ">
                        <div className="container-fluid clearfix">   
                            {changeLogo ? 
                                <>
                                    <div className="logo-header mostion logo-dark">
                                        <Link to={"/"}><img src={IMAGES.logo3} alt="" /></Link>
                                    </div>
                                    <div className="logo-header mostion logo-light">
                                        <Link to={"/"}><img src={IMAGES.logoWhite3} alt="" /></Link>
                                    </div>
                                </>
                                :
                                <div className="logo-header mostion logo-dark">
                                    <Link to={"/"}><img src={IMAGES.logo2} alt="" /></Link>
                                </div>
                            }
                            <button 
                                type="button"
                                onClick={()=>setSidebarOpen(!sidebarOpen)}
                                className={`navbar-toggler navicon justify-content-end ${sidebarOpen ? 'open' : 'collapsed' }`}    
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>                
                            <div className="extra-nav">
                                <div className="extra-cell d-flex align-items-center">		
                                    <ul className="nav-link-list">
                                        <li><Link to={"#"} className="btn-login text-primary" data-bs-toggle="modal" data-bs-target="#modalLogin"
                                            onClick={()=>setloginModal(true)}
                                        >Login</Link></li>
                                        <li><Link to={"#"} className="btn-login" data-bs-toggle="modal" data-bs-target="#modalLogin"
                                            onClick={()=>setloginModal(true)}
                                        >Sign Up</Link></li>
                                    </ul>
                                    <Link to={"#"} className="btn btn-primary btnhover1"  data-bs-target="#modalDonate"
                                       //onClick={()=>onShowDonate(true)}
                                       onClick={() => {modalRef.current.handleModalOpen(); }}
                                    >
                                        <span>Donate Now</span>
                                        <i className="flaticon-heart text-secondary ms-3"></i>
                                    </Link>
                                    <Link to={"#"} className="menu-btn"
                                        onClick={()=>setSideOverlay(!sideOverlay)}
                                    >
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="22" y="11" width="4" height="4" rx="2" fill="#003B4A"/>
                                            <rect x="11" width="4" height="4" rx="2" fill="#003B4A"/>
                                            <rect x="22" width="4" height="4" rx="2" fill="#003B4A"/>
                                            <rect x="11" y="11" width="4" height="4" rx="2" fill="#003B4A"/>
                                            <rect x="11" y="22" width="4" height="4" rx="2" fill="#003B4A"/>
                                            <rect width="4" height="4" rx="2" fill="#003B4A"/>
                                            <rect y="11" width="4" height="4" rx="2" fill="#003B4A"/>
                                            <rect x="22" y="22" width="4" height="4" rx="2" fill="#003B4A"/>
                                            <rect y="22" width="4" height="4" rx="2" fill="#003B4A"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            
                
                            <div className={`header-nav navbar-collapse collapse justify-content-start ${sidebarOpen ? "show" : ""}`}>
                                <div className="logo-header logo-dark">
                                    {changeLogo ? 
                                        <Link to={"/"}><img src={IMAGES.logo3} alt="" /></Link>
                                        :
                                        <Link to={"/"}><img src={IMAGES.logo2} alt="" /></Link>
                                    }
                                    </div>
                                <ul className="nav navbar-nav navbar navbar-left">
                                    {MenuListArray2.map((data, index)=>{
                                        let menuClass = data.classChange;
                                        if(menuClass !== "sub-menu-down"){
                                            return(
                                                <li className={menuClass}  key={index} ><Link to={data.to}>{data.title}</Link></li>
                                            )
                                        }else{
                                            return(				
                                                <li className={`${menuClass} ${ state.active === data.title ? 'open' : ''}`}
                                                    key={index} 
                                                >
                                                
                                                    {data.content && data.content.length > 0 ?
                                                        <Link to={"#"}                                                       
                                                            onClick={() => {handleMenuActive(data.title)}}
                                                        >				
                                                            {data.title}
                                                        </Link>
                                                    :
                                                        <Link  to={data.to} > 
                                                            {data.title}                                                        
                                                        </Link>
                                                    }
                                                    <Collapse in={state.active === data.title ? true :false}>
                                                        <ul className={`sub-menu ${menuClass === "mm-collapse" ? "open" : ""}`}>
                                                            {data.content && data.content.map((data,index) => {									
                                                                return(	
                                                                    <li key={index}
                                                                        className={`${ state.activeSubmenu === data.title ? "open" : ""}`}  
                                                                    >
                                                                    {data.content && data.content.length > 0 ?
                                                                        <>
                                                                            <Link to={data.to} 
                                                                                onClick={() => { handleSubmenuActive(data.title)}}
                                                                            >
                                                                                {data.title}
                                                                                <i className="fa fa-angle-right" />
                                                                            </Link>
                                                                            <Collapse in={state.activeSubmenu === data.title ? true :false}>
                                                                                <ul className={`sub-menu ${menuClass === "mm-collapse" ? "open" : ""}`}>
                                                                                    {data.content && data.content.map((data,index) => {
                                                                                        return(	
                                                                                        <>
                                                                                            <li key={index}>
                                                                                                <Link  to={data.to}>{data.title}</Link>
                                                                                            </li>
                                                                                        </>
                                                                                        )
                                                                                    })}
                                                                                </ul>
                                                                            </Collapse>
                                                                        </>
                                                                        :
                                                                        <Link to={data.to}>
                                                                            {data.title}
                                                                        </Link>
                                                                    }
                                                                    </li>                                                                
                                                                )
                                                            })}
                                                        </ul>
                                                    </Collapse>
                                                </li>	
                                            )
                                        }
                                    })}     
                                </ul>
                                <div className="header-bottom">
                                    <Link to={"#"} className="btn btn-light btn-login btn-sm" data-bs-toggle="modal" data-bs-target="#modalLogin"
                                        onClick={()=>setloginModal(true)}
                                    >
                                        <i className="flaticon-logout me-3"></i>Login / Sign Up
                                    </Link>
                                    <div className="dz-social-icon">
                                        <ul>
                                            <li><a className="fab fa-facebook-f" href="https://www.facebook.com/" target="_blank" rel="noreferrer"></a></li>
                                            <li><a className="fab fa-twitter" href="https://twitter.com/" target="_blank" rel="noreferrer"></a></li>
                                            <li><a className="fab fa-linkedin-in" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"></a></li>
                                            <li><a className="fab fa-instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer"></a></li>
                                        </ul>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>   
            <div className={`contact-sidebar ${sideOverlay ? "active" : ""}`}>
                <div className="contact-box">
                    <div className="logo-contact logo-dark">
                        {changeLogo ? 
                            <Link to={"/"}><img src={IMAGES.logo3} alt="" /></Link>
                            :
                            <Link to={"/"}><img src={IMAGES.logo2} alt="" /></Link>
                        }
                    </div>
                    <div className="m-b50 contact-text">
                        <div className="dz-title">
                            <h4>About us</h4>
                            <div className="dz-separator style-1 text-primary mb-0"></div>	
                        </div>
                        <p>Aliquam erat massa porttitor vel egestas sit tristique ultricies lorem aliquet venenatis libero a nulla placerat egestas.</p>
                        <Link to={"/about-us"} className="btn btn-primary btn-sm">READ MORE</Link>
                    </div>
                    <div className="dz-title">
                        <h4>Contact Info</h4>
                        <div className="dz-separator style-1 text-primary mb-0"></div>	
                    </div>
                    <div className="icon-bx-wraper left">
                        <div className="icon-md m-r20">
                            <span className="icon-cell"><i className="las la-phone-volume"></i></span> 
                        </div>
                        <div className="icon-content">
                            <h5 className="tilte">Call Now</h5>
                            <p className="m-b0">+91 123 456 7890,<br/> +91 987 654 3210</p>
                        </div>
                    </div>
                    <div className="icon-bx-wraper left">
                        <div className="icon-md m-r20">
                            <span className="icon-cell"><i className="las la-envelope-open"></i></span> 
                        </div>
                        <div className="icon-content">
                            <h5 className="tilte">Email Now</h5>
                            <p className="m-b0">info@gmail.com, services@gmail.com</p>
                        </div>
                    </div>
                    <div className="icon-bx-wraper left">
                        <div className="icon-md m-r20">
                            <span className="icon-cell"><i className="las la-map-marker"></i></span> 
                        </div>
                        <div className="icon-content">
                            <h5 className="tilte">Location</h5>
                            <p className="m-b0">15/B Miranda House, New York, US</p>
                        </div>
                    </div>
                </div>	
            </div>
            <div className="menu-close" onClick={()=>setSideOverlay(!sideOverlay)}></div>
            <Modal className="modal fade modal-wrapper auth-modal" id="modalLogin" show={loginModal} onHide={setloginModal} centered>               
                <h2 className="title">Login Your Account</h2>
                <form onSubmit={(e)=>formSubmit(e)}>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" />
                        <div className="reset-password">
                            <Link to={"#"} className="btn-link collapsed"  role="button" aria-controls="reset-password"
                                // onClick={() => setOpenCollapse(!openCollapse)}
                                onClick={()=>(setResetModal(true),setloginModal(false))}
                            >Reset password?</Link>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-outline-primary btn-block">Login</button>
                    </div>
                    <div className="form-group">
                        <Link to={"#"} className="btn facebook btn-block"><i className="fa-brands fa-facebook-f m-r10"></i>Log in with Facebook</Link>
                    </div>
                    <div className="form-group">
                        <Link to={"#"} className="btn google-plus btn-block"><i className="fa-brands fa-google m-r10"></i>Log in with Google</Link>
                    </div>
                    <div className="sign-text">
                        <span>Don't have a Crowdfunding account? 
                            <Link to={"#"} className="btn-link collapsed" 
                                onClick={()=>(setSignupModal(true),setloginModal(false))}
                            > Sign up</Link>
                        </span>
                    </div>
                </form>                
            </Modal>
            <Modal className="modal fade modal-wrapper auth-modal"  show={resetModal} onHide={setResetModal} centered>
                <div  className="reset-password" id="reset-password">
                    <h2 className="title">Reset password?</h2>
                    <form onSubmit={(e)=>formSubmit(e)}>
                        <div className="form-group password-icon-bx">
                            <i className="fa fa-lock"></i>
                            <p>Enter your email address associated with your account, and we'll email you a link to reset your password...</p>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Enter email address" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-outline-primary btn-block">Send reset link</button>
                        </div>
                        <Link to={"#"} className="sign-text d-block" data-bs-toggle="collapse" 
                            onClick={()=>(setResetModal(false),setloginModal(true))}
                            >Back
                        </Link>
                    </form>
                </div>  
            </Modal>
            <Modal className="modal fade modal-wrapper auth-modal"  show={signupModal} onHide={setSignupModal} centered>               
                <h2 className="title">Sign Up Your Account</h2>
                <form onSubmit={(e)=>formSubmit(e)}>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-outline-primary btn-block">Sign Up</button>
                    </div>
                    <div className="form-group">
                        <Link to={"#"} className="btn facebook btn-block"><i className="fa-brands fa-facebook-f m-r10"></i>Log in with Facebook</Link>
                    </div>
                    <div className="form-group">
                        <Link to={"#"} className="btn google-plus btn-block"><i className="fa-brands fa-google m-r10"></i>Log in with Google</Link>
                    </div>
                    <div className="sign-text">
                        <span>Don't have a Crowdfunding account? <Link to={"#"} className="btn-link collapsed" data-bs-toggle="collapse"
                            onClick={()=>(setSignupModal(false),setloginModal(true))}
                        >Login</Link></span>
                    </div>
                </form>                
            </Modal>
            <DonateModal 
                ref={modalRef}
            />
        </>
    );
};

export default Header2;
