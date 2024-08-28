import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";

//components
import PageBanner from "../layouts/PageBanner";
import FirstStep from "../components/Fundraiser/FirstStep";
import SecondStep from "../components/Fundraiser/SecondStep";
import ThirdStep from "../components/Fundraiser/ThirdStep";
import FourthStep from "../components/Fundraiser/FourthStep";

//images
import bg from "../assets/images/banner/bnr3.jpg";
import bg2 from "../assets/images/background/bg4.jpg";
import axios from "axios";
import { Modal } from "react-bootstrap";

const BecomeFundraiser = () => {
  //api
  const api_url = process.env.REACT_APP_INVEST_MAP_API;
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0OTE0MzkzLCJpYXQiOjE3MjQ4Mjc5OTMsImp0aSI6IjA3NzVjZTM2NjNhYTRkOWM5MWZjNDM2YWVkMjU5YWI0IiwidXNlcl9pZCI6Mn0.JzyEKvgnjUXoq5p_YuoXl_BtnY7iqNTcNDhuHD4Yq64"
  //steplar
  const [goSteps, setGoSteps] = useState(0);
  //modal uchun
  const [modal, setModal] = useState(false);
  //datalarni yigish uchun
  const [firstData, setFirstData] = useState({});
  const [secondData, setSecondData] = useState({});
  const [thirdData, setThirdData] = useState({});
  const formSubmit = (e, sendData) => {
    e.preventDefault();
    sendData();
  };
  const sendFirstData = () => {
    axios
      .post(`${api_url}/api/company/create/step1/`, firstData,
		{
			headers:{
				Authorization:`Bearer ${token}`,
				 'content-type': 'multipart/form-data'
			}
		}
	  )
      .then((res) => {
        if (res?.status === 200) {
          setGoSteps(1);
          scrollToTop();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const sendSecondData = () => {
    axios
      .post(`${api_url}/api/company/create/step2/`, secondData,
		{
			headers:{
				Authorization:`Bearer ${token}`
			}
		}
	  )
      .then((res) => {
        if (res?.status === 200) {
          setGoSteps(2);
          scrollToTop();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const sendThirdData = () => {
    axios
      .post(`${api_url}/api/company/create/step3/`, thirdData,
		{
			headers:{
				Authorization:`Bearer ${token}`
			}
		}
	  )
      .then((res) => {
        if (res?.status === 200) {
			setModal(true)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const sendFinallyData = () =>{
	axios.post(`${api_url}/api/company/create/final/`)
	.then(res=>{
		console.log(res)
		setModal(false)
	})
	.catch(err=>{
		console.log(err)
	})
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Yuqoriga siljitishni yumshoq qilish
    });
  };
  return (
    <>
      <div className="page-content bg-white">
        <section
          className="content-inner-1 section-pattren1 overlay-white-dark"
          style={{
            backgroundImage: "url(" + bg2 + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="form-wrapper overflow-hidden">
                  <div className="form-wizard dz-form-step">
                    <Stepper
                      className="nav nav-wizard"
                      activeStep={goSteps}
                      label={false}
                    >
                      <Step className="nav-link" onClick={() => setGoSteps(0)}>
                        Main
                      </Step>
                      <Step className="nav-link" onClick={() => setGoSteps(1)}>
                        Bank details
                      </Step>
                      <Step className="nav-link" onClick={() => setGoSteps(2)}>
                        Contact Informations
                      </Step>
                    </Stepper>
                    {goSteps === 0 && (
                      <>
                        <FirstStep setData={setFirstData} />
                        <div className="text-end toolbar toolbar-bottom p-2">
                          <button
                            className="btn sw-btn-next sw-btn ms-1npm"
							onClick={(e)=>formSubmit(e, sendFirstData)}

                          >
                            Next
                          </button>
                        </div>
                      </>
                    )}
                    {goSteps === 1 && (
                      <>
                        <SecondStep setData={setSecondData} />
                        <div className="text-end toolbar toolbar-bottom p-2">
						<button
                            className="btn sw-btn-prev sw-btn me-1"
                            onClick={()=>setGoSteps(0)}
                          >
                            Previous
                          </button>
                          <button
                            className="btn sw-btn-next sw-btn ms-1"
                            onClick={(e)=>formSubmit(e, sendSecondData)}
                          >
                            Next
                          </button>
                        </div>
                      </>
                    )}
                    {goSteps === 2 && (
                      <>
                        <ThirdStep setData={setThirdData} />
                        <div className="text-end toolbar toolbar-bottom p-2">
                          <button
                            className="btn sw-btn-prev sw-btn me-1"
                            onClick={()=>setGoSteps(2)}
                          >
                            Previous
                          </button>
                          <button
                            className="btn sw-btn-next sw-btn ms-1"
							onClick={(e)=>formSubmit(e, sendThirdData)}
                          >
                            Next
                          </button>
                        </div>
                      </>
                    )}

                    <Modal
                      size="sm"
                      show={modal}
                      onHide={() => setModal(false)}
                      aria-labelledby="example-modal-sizes-title-sm"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                          Small Modal
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
						Malumotlar yuborilsinmi
					  </Modal.Body>
					  <Modal.Footer>
					  <button
                            className="title btn sw-btn-next sw-btn ms-1npmm btn-warning text-white py-2"
                           onClick={()=>setModal(false)}
                          >
                            Close
                          </button>
						  <button
                            className="btn sw-btn-next sw-btn ms-1npm btn-primary py-2"
                            onClick={sendFinallyData}
                          >
                            Send
                          </button>
					  </Modal.Footer>
					 
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BecomeFundraiser;
