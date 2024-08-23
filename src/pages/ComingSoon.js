import React,{useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import logo from '../assets/images/logo-white.png';
import bnr from '../assets/images/banner/bnr3.jpg';
import DonutChart2 from '../components/DonutChart2';

const ComingSoon = () => {
    const [subscribe, setSubscribe] = useState(false);

    const d = new Date();
    
    const [timerDays, setTimerDays] = useState('00');	
	const [timerHours, setTimerHours] = useState('00');	
	const [timerMinutes, setTimerMinutes] = useState('00');	
	const [timerSeconds, setTimerSeconds] = useState('00');	
	let interval = useRef();
	
	const startTimer = () =>{
		/* Website Launch Date */ 
		var WebsiteLaunchDate = new Date();
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
		WebsiteLaunchDate =  WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear();
		/* Website Launch Date END */
		
		//alert(WebsiteLaunchDate);
	
		// const countdownDate = new Date(`Dec 31, ${d.getFullYear()} 00:01:00`).getTime();	
		const countdownDate = new Date(WebsiteLaunchDate +' 23:5').getTime();	
		interval = setInterval(()=>{
			const now = new Date().getTime();
			const distance = countdownDate - now;
			const days = Math.floor(distance / (1000*60*60*24));
			const hours = Math.floor((distance % (1000*60*60*24)/(1000*60*60)));
			const minutes = Math.floor((distance % (1000*60*60)/(1000*60)));
			const seconds = Math.floor((distance % (1000*60))/1000);
			
			if(distance < 0){
				//stop our timer
				clearInterval(interval.current);
			} else {
				//update timer
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}	
		},1000);
	};
	
	//componentDidMount
 	useEffect(()=>{
		startTimer();
		return()=>{
			clearInterval(interval.current);
		};
	});
	
	
    return (
        <>
            <div className="coming-soon background-luminosity" data-text="CHARITY" style={{backgroundImage: "url("+ require('../assets/images/background/bg5.jpg') + ")"}}>
                <div className="inner-content">
                    <div className="logo-header logo-dark">
                        <Link to={"/"}><img src={logo} alt="" /></Link>
                    </div>
                    <h1 className="dz-head">We Are Coming <span className="text-secondary">Soon !</span></h1>
                    <p>We`ll be here soon with our new awesome site, subscribe to be notified.</p>
                    <Link to={"/contact-us"} className="btn btn-light btn-skew m-r15"> <span>GET IN TOUCH</span></Link>
                    <Link to={"#"}  onClick={()=>setSubscribe(true)} className="btn btn-skew btn-secondary"><span>SUBSCRIBE NOW</span></Link>
                </div>
                <div className="countdown-timer countdown-container">
                    <div className="clock">
                        <div className="clock-item clock-days countdown-time-value">
                            <div id="canvas-days" className="clock-canvas">
                                <DonutChart2 value={timerDays} backgroundColor="rgba(255,255,255,1)"
                                    backgroundColor2= "rgba(255, 255, 255,0.4)"
                                />
                            </div>
                            <div className="text">
                                <p className="val">{timerDays}</p>
                                <p className="type-days type-time" data-border-color="#fff">Days</p>
                            </div>
                        </div>
                        <div className="clock-item clock-hours countdown-time-value">
                            <div id="canvas-hours" className="clock-canvas">
                                <DonutChart2 value={timerHours} backgroundColor="rgba(255,255,255,1)"
                                    backgroundColor2= "rgba(255, 255, 255,0.4)"
                                />
                            </div>
                            <div className="text">
                                <p className="val">{timerHours}</p>
                                <p className="type-hours type-time" data-border-color="#fff">Hours</p>
                            </div>
                        </div>
                        <div className="clock-item clock-minutes countdown-time-value">
                            <div id="canvas-minutes" className="clock-canvas">
                                <DonutChart2 value={timerMinutes} backgroundColor="rgba(255,255,255,1)"
                                    backgroundColor2= "rgba(255, 255, 255,0.4)"
                                />
                            </div>
                            <div className="text">
                                <p className="val">{timerMinutes}</p>
                                <p className="type-minutes type-time" data-border-color="#fff">Minutes</p>
                            </div>
                        </div>
                        <div className="clock-item clock-seconds countdown-time-value">
                            <div id="canvas-seconds" className="clock-canvas">
                                <DonutChart2 value={timerSeconds} backgroundColor="rgba(255,255,255,1)"
                                    backgroundColor2= "rgba(255, 255, 255,0.4)"
                                />
                            </div>
                            <div className="text">
                                <p className="val">{timerSeconds}</p>
                                <p className="type-seconds type-time" data-border-color="#fff">Seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal className="modal fade inquiry-modal "  show={subscribe} onHide={setSubscribe} centered>
                
                    <div className="inquiry-adv">
                        <img src={bnr} alt="Image" />
                    </div>
                    <div className="contact-modal">
                        <div className="modal-header">
                            <i className="fa-solid fa-envelope"></i>
                            <h5 className="modal-title" id="exampleModalLongTitle">Subscribe To Our Newsletter</h5>
                            <button type="button" className="btn-close" onClick={()=>setSubscribe(false)}>×</button>
                        </div>
                        <div className="modal-body">
                            <form  className="dz-subscription dzSubscribe">
                                <div className="dzSubscribeMsg"></div>
                                <div className="input-group mb-3">
                                    <input name="dzName" required type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="input-group mb-3">
                                    <input name="dzEmail" required type="email" className="form-control" placeholder="Your Email Address" />
                                </div>
                                <div className="text-center">
                                    <button name="submit" type="submit" value="Submit" className="btn btn-primary">SUBSCRIBE NOW </button>
                                </div>
                            </form>
                        </div>
                    </div>               
                
            </Modal>
        </>
    );
};

export default ComingSoon;